package com.estore.repository;

import com.estore.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    // Có thể bổ sung các phương thức query tùy ý
} 