package com.estore.service;

import com.estore.dto.CartDTO;
import com.estore.dto.CartItemDTO;
import java.util.List;
import java.util.UUID;

public interface CartService {
    CartDTO createCart(UUID userId);
    CartDTO getCartByUserId(UUID userId);
    CartDTO addItemToCart(UUID userId, Long productId, Integer quantity);
    CartDTO updateCartItemQuantity(UUID userId, Long cartItemId, Integer quantity);
    CartDTO removeCartItem(UUID userId, Long cartItemId);
    void clearCart(UUID userId);
    List<CartItemDTO> getCartItems(UUID userId);
} 