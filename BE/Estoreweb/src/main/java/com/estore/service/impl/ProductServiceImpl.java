package com.estore.service.impl;

import com.estore.dto.ProductDTO;
import com.estore.dto.ProductImageDTO;
import com.estore.entity.Category;
import com.estore.entity.Product;
import com.estore.entity.ProductImage;
import com.estore.repository.CategoryRepository;
import com.estore.repository.ProductImageRepository;
import com.estore.repository.ProductRepository;
import com.estore.service.ProductService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;
    
    private static final String UPLOAD_DIR = "uploads/products/";

    @Override
    public Page<ProductDTO> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable).map(this::toDTO);
    }

    @Override
    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + id));
        return toDTO(product);
    }

    @Override
    public ProductDTO getProductBySlug(String slug) {
        Product product = productRepository.findBySlug(slug)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with slug: " + slug));
        return toDTO(product);
    }

    @Override
    public Page<ProductDTO> getProductsByCategory(Long categoryId, Pageable pageable) {
        return productRepository.findByCategory_CategoryId(categoryId, pageable).map(this::toDTO);
    }

    @Override
    public Page<ProductDTO> searchProducts(String keyword, Pageable pageable) {
        return productRepository.search(keyword, pageable).map(this::toDTO);
    }

    @Override
    public Page<ProductDTO> filterProductsByPrice(BigDecimal minPrice, BigDecimal maxPrice, Pageable pageable) {
        return productRepository.findByPriceBetween(minPrice, maxPrice, pageable).map(this::toDTO);
    }

    @Override
    public Page<ProductDTO> getActiveProducts(Pageable pageable) {
        return productRepository.findByIsActive(true, pageable).map(this::toDTO);
    }

    @Override
    public Page<ProductDTO> getAvailableProducts(Pageable pageable) {
        return productRepository.findAvailableProducts(pageable).map(this::toDTO);
    }

    @Override
    public List<ProductDTO> getProductsByPromotion(Long promotionId) {
        return productRepository.findByPromotionId(promotionId).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = toEntity(productDTO);
        
        if (productDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(productDTO.getCategoryId())
                    .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + productDTO.getCategoryId()));
            product.setCategory(category);
        }
        
        product = productRepository.save(product);
        return toDTO(product);
    }

    @Override
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + id));
        
        product.setName(productDTO.getName());
        product.setSlug(productDTO.getSlug());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setStockQuantity(productDTO.getStockQuantity());
        product.setIsActive(productDTO.getIsActive());
        
        if (productDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(productDTO.getCategoryId())
                    .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + productDTO.getCategoryId()));
            product.setCategory(category);
        }
        
        product = productRepository.save(product);
        return toDTO(product);
    }

    @Override
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new EntityNotFoundException("Product not found with id: " + id);
        }
        productRepository.deleteById(id);
    }

    @Override
    public ProductImageDTO addProductImage(Long productId, MultipartFile file) {
        try {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));
            
            // Create folder if not exists
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            
            // Generate unique filename
            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
            Path filePath = uploadPath.resolve(fileName);
            
            // Save file
            Files.copy(file.getInputStream(), filePath);
            
            // Create product image
            ProductImage productImage = new ProductImage();
            productImage.setProduct(product);
            productImage.setImageUrl(UPLOAD_DIR + fileName);
            
            // Check if this is the first image, set as primary
            if (product.getImages() == null || product.getImages().isEmpty()) {
                productImage.setIsPrimary(true);
            } else {
                productImage.setIsPrimary(false);
            }
            
            productImage = productImageRepository.save(productImage);
            
            return toImageDTO(productImage);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }

    @Override
    public void deleteProductImage(Long imageId) {
        ProductImage productImage = productImageRepository.findById(imageId)
                .orElseThrow(() -> new EntityNotFoundException("Product image not found with id: " + imageId));
        
        // Delete file
        try {
            Path filePath = Paths.get(productImage.getImageUrl());
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            // Log warning but continue deleting the database record
        }
        
        // If this was the primary image, set another image as primary
        if (productImage.getIsPrimary()) {
            List<ProductImage> otherImages = productImageRepository.findByProduct_ProductId(productImage.getProduct().getProductId());
            otherImages.remove(productImage);
            if (!otherImages.isEmpty()) {
                ProductImage newPrimary = otherImages.get(0);
                newPrimary.setIsPrimary(true);
                productImageRepository.save(newPrimary);
            }
        }
        
        productImageRepository.delete(productImage);
    }

    @Override
    public void setPrimaryImage(Long productId, Long imageId) {
        ProductImage productImage = productImageRepository.findById(imageId)
                .orElseThrow(() -> new EntityNotFoundException("Product image not found with id: " + imageId));
        
        if (!productImage.getProduct().getProductId().equals(productId)) {
            throw new IllegalArgumentException("The image does not belong to the specified product");
        }
        
        // Remove primary flag from current primary image
        productImageRepository.findByProduct_ProductIdAndIsPrimaryTrue(productId)
                .ifPresent(currentPrimary -> {
                    currentPrimary.setIsPrimary(false);
                    productImageRepository.save(currentPrimary);
                });
        
        // Set new primary image
        productImage.setIsPrimary(true);
        productImageRepository.save(productImage);
    }

    @Override
    public boolean updateStock(Long productId, Integer quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));
        
        boolean result = product.updateStock(quantity);
        if (result) {
            productRepository.save(product);
        }
        
        return result;
    }

    @Override
    public boolean checkAvailability(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + productId));
        
        return product.checkAvailability();
    }

    // Mapping methods
    private ProductDTO toDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        
        dto.setProductId(product.getProductId());
        dto.setName(product.getName());
        dto.setSlug(product.getSlug());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setStockQuantity(product.getStockQuantity());
        dto.setIsActive(product.getIsActive());
        dto.setCreatedAt(product.getCreatedAt());
        dto.setUpdatedAt(product.getUpdatedAt());
        
        // Category info
        if (product.getCategory() != null) {
            dto.setCategoryId(product.getCategory().getCategoryId());
            dto.setCategoryName(product.getCategory().getName());
        }
        
        // Images
        if (product.getImages() != null) {
            dto.setImages(product.getImages().stream()
                    .map(this::toImageDTO)
                    .collect(Collectors.toList()));
        }
        
        // Promotion IDs
        if (product.getPromotions() != null) {
            dto.setPromotionIds(product.getPromotions().stream()
                    .map(promotion -> promotion.getPromotionId())
                    .collect(Collectors.toList()));
        }
        
        // Review IDs and average rating
        if (product.getReviews() != null && !product.getReviews().isEmpty()) {
            dto.setReviewIds(product.getReviews().stream()
                    .map(review -> review.getReviewId())
                    .collect(Collectors.toList()));
            
            double avgRating = product.getReviews().stream()
                    .mapToInt(review -> review.getRating())
                    .average()
                    .orElse(0.0);
            
            dto.setAverageRating(avgRating);
        } else {
            dto.setAverageRating(0.0);
        }
        
        return dto;
    }
    
    private Product toEntity(ProductDTO dto) {
        Product product = new Product();
        
        // Skip ID for new products
        if (dto.getProductId() != null) {
            product.setProductId(dto.getProductId());
        }
        
        product.setName(dto.getName());
        product.setSlug(dto.getSlug());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setStockQuantity(dto.getStockQuantity());
        product.setIsActive(dto.getIsActive() != null ? dto.getIsActive() : true);
        
        return product;
    }
    
    private ProductImageDTO toImageDTO(ProductImage image) {
        ProductImageDTO dto = new ProductImageDTO();
        
        dto.setImageId(image.getImageId());
        dto.setProductId(image.getProduct().getProductId());
        dto.setImageUrl(image.getImageUrl());
        dto.setIsPrimary(image.getIsPrimary());
        dto.setCreatedAt(image.getCreatedAt());
        
        return dto;
    }
} 