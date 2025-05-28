package com.estore.dto;

import java.math.BigDecimal;

public class OrderItemDTO {
    private Long orderItemId;
    private Long productId;
    private Integer quantity;
    private BigDecimal price;
    // getter, setter
    public Long getOrderItemId() { return orderItemId; }
    public void setOrderItemId(Long orderItemId) { this.orderItemId = orderItemId; }
    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
} 