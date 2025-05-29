package com.estore.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "product_images")
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private String imageUrl;

    private Boolean isPrimary = false;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public void setAsPrimary() {
        // Remove primary status from other images of the same product
        product.getImages().forEach(image -> image.setIsPrimary(false));
        this.isPrimary = true;
    }

    public void removePrimaryStatus() {
        this.isPrimary = false;
    }

    public void updateImageUrl(String newImageUrl) {
        if (newImageUrl != null && !newImageUrl.trim().isEmpty()) {
            this.imageUrl = newImageUrl;
        }
    }
} 