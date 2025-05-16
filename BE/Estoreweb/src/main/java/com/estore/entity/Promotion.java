package com.estore.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "promotions")
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long promotionId;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private BigDecimal discountPercent;
    private BigDecimal discountAmount;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;

    private Boolean isActive = true;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @ManyToMany(mappedBy = "promotions")
    private List<Product> products;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public boolean isValid() {
        LocalDateTime now = LocalDateTime.now();
        return isActive && now.isAfter(startDate) && now.isBefore(endDate);
    }

    public BigDecimal calculateDiscount(BigDecimal amount) {
        if (!isValid()) {
            return BigDecimal.ZERO;
        }

        if (discountPercent != null) {
            return amount.multiply(discountPercent).divide(new BigDecimal("100"));
        } else if (discountAmount != null) {
            return discountAmount.min(amount);
        }
        return BigDecimal.ZERO;
    }

    public void activate() {
        this.isActive = true;
    }

    public void deactivate() {
        this.isActive = false;
    }

    public void extendEndDate(LocalDateTime newEndDate) {
        if (newEndDate.isAfter(this.endDate)) {
            this.endDate = newEndDate;
        }
    }

    public void addProduct(Product product) {
        if (!products.contains(product)) {
            products.add(product);
            product.getPromotions().add(this);
        }
    }

    public void removeProduct(Product product) {
        if (products.remove(product)) {
            product.getPromotions().remove(this);
        }
    }
} 