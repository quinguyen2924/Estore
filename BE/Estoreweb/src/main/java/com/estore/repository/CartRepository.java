package com.estore.repository;

import com.estore.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByUser_UserId(UUID userId);
} 