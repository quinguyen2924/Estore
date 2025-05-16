package com.estore.dto;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class CategoryDTO {
    private Long categoryId;
    private String name;
    private String slug;
    private Long parentId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<CategoryDTO> subCategories;
    private List<Long> products;
}