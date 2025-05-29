package com.estore.repository;

import com.estore.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {
    // Có thể bổ sung các phương thức query tùy ý
} 