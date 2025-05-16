package com.estore.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
public class CartDTO {
    private Long cartId;
    private UUID userId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<CartItemDTO> items;
    private BigDecimal total;
} 