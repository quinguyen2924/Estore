package com.estore.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class ProductDTO {
    private Long productId;
    private String name;
    private String slug;
    private String description;
    private BigDecimal price;
    private Long categoryId;
    private String categoryName;
    private Integer stockQuantity;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<ProductImageDTO> images;
    private List<Long> promotionIds;
    private List<Long> reviewIds;
    private Double averageRating;
} 