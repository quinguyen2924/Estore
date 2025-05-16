package com.estore.repository;

import com.estore.entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
    List<ProductImage> findByProduct_ProductId(Long productId);
    
    Optional<ProductImage> findByProduct_ProductIdAndIsPrimaryTrue(Long productId);
    
    @Query("SELECT pi FROM ProductImage pi WHERE pi.product.productId = :productId ORDER BY pi.isPrimary DESC")
    List<ProductImage> findByProductIdOrderByPrimary(@Param("productId") Long productId);
} 