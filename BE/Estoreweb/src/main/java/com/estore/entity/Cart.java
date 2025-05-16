package com.estore.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> items;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public boolean addItem(Long productId, Integer quantity) {
        if (quantity <= 0) {
            return false;
        }
        // Implement add item logic
        return true;
    }

    public boolean removeItem(Long cartItemId) {
        // Implement remove item logic
        return true;
    }

    public boolean updateQuantity(Long cartItemId, Integer quantity) {
        if (quantity <= 0) {
            return false;
        }
        // Implement update quantity logic
        return true;
    }

    public BigDecimal getTotal() {
        return items.stream()
                .map(item -> item.getProduct().getPrice().multiply(new BigDecimal(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public boolean clear() {
        items.clear();
        return true;
    }

    public Order checkout() {
        // Implement checkout logic
        return new Order();
    }
} 