package com.estore.service;

import com.estore.dto.ReviewDTO;
import java.util.List;

public interface ReviewService {
    ReviewDTO createReview(ReviewDTO reviewDTO);
    ReviewDTO getReviewById(Long id);
    List<ReviewDTO> getAllReviews();
    ReviewDTO updateReview(Long id, ReviewDTO reviewDTO);
    void deleteReview(Long id);
} 