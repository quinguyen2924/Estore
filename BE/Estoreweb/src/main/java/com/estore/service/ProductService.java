package com.estore.service;

import com.estore.dto.ProductDTO;
import com.estore.dto.ProductImageDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.List;

public interface ProductService {
    Page<ProductDTO> getAllProducts(Pageable pageable);
    
    ProductDTO getProductById(Long id);
    
    ProductDTO getProductBySlug(String slug);
    
    Page<ProductDTO> getProductsByCategory(Long categoryId, Pageable pageable);
    
    Page<ProductDTO> searchProducts(String keyword, Pageable pageable);
    
    Page<ProductDTO> filterProductsByPrice(BigDecimal minPrice, BigDecimal maxPrice, Pageable pageable);
    
    Page<ProductDTO> getActiveProducts(Pageable pageable);
    
    Page<ProductDTO> getAvailableProducts(Pageable pageable);
    
    List<ProductDTO> getProductsByPromotion(Long promotionId);
    
    ProductDTO createProduct(ProductDTO productDTO);
    
    ProductDTO updateProduct(Long id, ProductDTO productDTO);
    
    void deleteProduct(Long id);
    
    // Product images
    ProductImageDTO addProductImage(Long productId, MultipartFile file);
    
    void deleteProductImage(Long imageId);
    
    void setPrimaryImage(Long productId, Long imageId);
    
    // Stock management
    boolean updateStock(Long productId, Integer quantity);
    
    boolean checkAvailability(Long productId);
} 