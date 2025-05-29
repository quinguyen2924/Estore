package com.estore.repository;

import com.estore.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
    // Có thể bổ sung các phương thức query tùy ý
} 