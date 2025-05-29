package com.estore.repository;

import com.estore.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    // Có thể bổ sung các phương thức query tùy ý
} 