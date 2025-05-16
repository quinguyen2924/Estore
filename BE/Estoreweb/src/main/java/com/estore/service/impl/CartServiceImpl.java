package com.estore.service.impl;

import com.estore.dto.CartDTO;
import com.estore.dto.CartItemDTO;
import com.estore.entity.Cart;
import com.estore.entity.CartItem;
import com.estore.entity.Product;
import com.estore.entity.User;
import com.estore.repository.CartRepository;
import com.estore.repository.CartItemRepository;
import com.estore.repository.ProductRepository;
import com.estore.repository.UserRepository;
import com.estore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public CartDTO createCart(UUID userId) {
        // Kiểm tra xem user đã có cart chưa
        Cart existingCart = cartRepository.findByUser_UserId(userId);
        if (existingCart != null) {
            return convertToDTO(existingCart);
        }

        // Lấy thông tin user
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Tạo cart mới
        Cart cart = new Cart();
        cart.setUser(user);
        cart.setItems(new ArrayList<>()); // Khởi tạo danh sách items rỗng
        cart = cartRepository.save(cart);

        return convertToDTO(cart);
    }

    @Override
    public CartDTO getCartByUserId(UUID userId) {
        Cart cart = cartRepository.findByUser_UserId(userId);
        if (cart == null) {
            return createCart(userId);
        }
        return convertToDTO(cart);
    }

    @Override
    public CartDTO addItemToCart(UUID userId, Long productId, Integer quantity) {
        Cart cart = cartRepository.findByUser_UserId(userId);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem);

        return convertToDTO(cart);
    }

    @Override
    public CartDTO updateCartItemQuantity(UUID userId, Long cartItemId, Integer quantity) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));
        
        if (!cartItem.getCart().getUser().getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to cart item");
        }

        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem);

        return convertToDTO(cartItem.getCart());
    }

    @Override
    public CartDTO removeCartItem(UUID userId, Long cartItemId) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));
        
        if (!cartItem.getCart().getUser().getUserId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to cart item");
        }

        cartItemRepository.delete(cartItem);
        return convertToDTO(cartItem.getCart());
    }

    @Override
    public void clearCart(UUID userId) {
        Cart cart = cartRepository.findByUser_UserId(userId);
        cartItemRepository.deleteByCart_CartId(cart.getCartId());
    }

    @Override
    public List<CartItemDTO> getCartItems(UUID userId) {
        Cart cart = cartRepository.findByUser_UserId(userId);
        return cart.getItems().stream()
                .map(this::convertToCartItemDTO)
                .collect(Collectors.toList());
    }

    private CartDTO convertToDTO(Cart cart) {
        CartDTO dto = new CartDTO();
        dto.setCartId(cart.getCartId());
        dto.setUserId(cart.getUser().getUserId());
        dto.setCreatedAt(cart.getCreatedAt());
        dto.setUpdatedAt(cart.getUpdatedAt());
        dto.setItems(cart.getItems().stream()
                .map(this::convertToCartItemDTO)
                .collect(Collectors.toList()));
        dto.setTotal(cart.getTotal());
        return dto;
    }

    private CartItemDTO convertToCartItemDTO(CartItem cartItem) {
        CartItemDTO dto = new CartItemDTO();
        dto.setCartItemId(cartItem.getCartItemId());
        dto.setCartId(cartItem.getCart().getCartId());
        dto.setProductId(cartItem.getProduct().getProductId());
        dto.setProductName(cartItem.getProduct().getName());
        dto.setPrice(cartItem.getProduct().getPrice());
        dto.setQuantity(cartItem.getQuantity());
        dto.setSubtotal(cartItem.getProduct().getPrice().multiply(new java.math.BigDecimal(cartItem.getQuantity())));
        dto.setCreatedAt(cartItem.getCreatedAt());
        dto.setUpdatedAt(cartItem.getUpdatedAt());
        return dto;
    }
} 