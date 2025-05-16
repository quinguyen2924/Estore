package com.estore.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ProductImageDTO {
    private Long imageId;
    private Long productId;
    private String imageUrl;
    private Boolean isPrimary;
    private LocalDateTime createdAt;
} 