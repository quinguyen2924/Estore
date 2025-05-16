package com.estore.controller;

import com.estore.dto.CartDTO;
import com.estore.dto.CartItemDTO;
import com.estore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public ResponseEntity<CartDTO> getCart(@PathVariable UUID userId) {
        return ResponseEntity.ok(cartService.getCartByUserId(userId));
    }

    @PostMapping("/{userId}/items")
    public ResponseEntity<CartDTO> addItemToCart(
            @PathVariable UUID userId,
            @RequestParam Long productId,
            @RequestParam Integer quantity) {
        return ResponseEntity.ok(cartService.addItemToCart(userId, productId, quantity));
    }

    @PutMapping("/{userId}/items/{cartItemId}")
    public ResponseEntity<CartDTO> updateCartItemQuantity(
            @PathVariable UUID userId,
            @PathVariable Long cartItemId,
            @RequestParam Integer quantity) {
        return ResponseEntity.ok(cartService.updateCartItemQuantity(userId, cartItemId, quantity));
    }

    @DeleteMapping("/{userId}/items/{cartItemId}")
    public ResponseEntity<CartDTO> removeCartItem(
            @PathVariable UUID userId,
            @PathVariable Long cartItemId) {
        return ResponseEntity.ok(cartService.removeCartItem(userId, cartItemId));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> clearCart(@PathVariable UUID userId) {
        cartService.clearCart(userId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}/items")
    public ResponseEntity<List<CartItemDTO>> getCartItems(@PathVariable UUID userId) {
        return ResponseEntity.ok(cartService.getCartItems(userId));
    }
} 