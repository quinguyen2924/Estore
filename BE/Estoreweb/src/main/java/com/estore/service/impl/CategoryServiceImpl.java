package com.estore.service.impl;

import com.estore.dto.CategoryDTO;
import com.estore.entity.Category;
import com.estore.entity.Product;
import com.estore.repository.CategoryRepository;
import com.estore.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    @Override
    public List<CategoryDTO> getAllCategories() {
        return categoryRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public CategoryDTO getCategoryById(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        return toDTO(category);
    }

    @Override
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = toEntity(categoryDTO);
        if (categoryDTO.getParentId() != null) {
            category.setParent(categoryRepository.findById(categoryDTO.getParentId()).orElse(null));
        }
        return toDTO(categoryRepository.save(category));
    }

    @Override
    public CategoryDTO updateCategory(Long id, CategoryDTO categoryDTO) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        category.setName(categoryDTO.getName());
        category.setSlug(categoryDTO.getSlug());
        if (categoryDTO.getParentId() != null) {
            category.setParent(categoryRepository.findById(categoryDTO.getParentId()).orElse(null));
        } else {
            category.setParent(null);
        }
        return toDTO(categoryRepository.save(category));
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public List<CategoryDTO> getCategoriesByParentId(Long parentId) {
        return categoryRepository.findByParent_CategoryId(parentId).stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public CategoryDTO getCategoryBySlug(String slug) {
        Category category = categoryRepository.findBySlug(slug).orElseThrow(() -> new RuntimeException("Category not found"));
        return toDTO(category);
    }

    // Mapping
    private CategoryDTO toDTO(Category category) {
        CategoryDTO dto = new CategoryDTO();
        dto.setCategoryId(category.getCategoryId());
        dto.setName(category.getName());
        dto.setSlug(category.getSlug());
        dto.setCreatedAt(category.getCreatedAt());
        dto.setUpdatedAt(category.getUpdatedAt());
        dto.setParentId(category.getParent() != null ? category.getParent().getCategoryId() : null);
        
        // Subcategories
        if (category.getSubCategories() != null) {
            dto.setSubCategories(category.getSubCategories().stream().map(this::toDTO).collect(Collectors.toList()));
        }
        
        // Products (chỉ lấy id)
        if (category.getProducts() != null) {
            List<Long> productIds = new ArrayList<>();
            for (Product product : category.getProducts()) {
                productIds.add(product.getProductId());
            }
            dto.setProducts(productIds);
        }
        
        return dto;
    }

    private Category toEntity(CategoryDTO dto) {
        Category category = new Category();
        category.setCategoryId(dto.getCategoryId());
        category.setName(dto.getName());
        category.setSlug(dto.getSlug());
        return category;
    }
}
