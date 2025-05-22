package com.estore.service.impl;

import com.estore.dto.ReviewDTO;
import com.estore.entity.Product;
import com.estore.entity.Review;
import com.estore.entity.User;
import com.estore.repository.ProductRepository;
import com.estore.repository.ReviewRepository;
import com.estore.repository.UserRepository;
import com.estore.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    private ReviewDTO toDTO(Review review) {
        if (review == null) return null;
        ReviewDTO dto = new ReviewDTO();
        dto.setReviewId(review.getReviewId());
        dto.setProductId(review.getProduct().getProductId());
        dto.setUserId(review.getUser().getUserId());
        dto.setRating(review.getRating());
        dto.setComment(review.getComment());
        dto.setCreatedAt(review.getCreatedAt());
        return dto;
    }

    private Review toEntity(ReviewDTO dto) {
        Review review = new Review();
        review.setReviewId(dto.getReviewId());
        Optional<Product> product = productRepository.findById(dto.getProductId());
        Optional<User> user = userRepository.findById(dto.getUserId());
        product.ifPresent(review::setProduct);
        user.ifPresent(review::setUser);
        review.setRating(dto.getRating());
        review.setComment(dto.getComment());
        review.setCreatedAt(dto.getCreatedAt());
        return review;
    }

    @Override
    public ReviewDTO createReview(ReviewDTO reviewDTO) {
        Review review = toEntity(reviewDTO);
        return toDTO(reviewRepository.save(review));
    }

    @Override
    public ReviewDTO getReviewById(Long id) {
        return toDTO(reviewRepository.findById(id).orElse(null));
    }

    @Override
    public List<ReviewDTO> getAllReviews() {
        return reviewRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public ReviewDTO updateReview(Long id, ReviewDTO reviewDTO) {
        Optional<Review> existing = reviewRepository.findById(id);
        if (existing.isPresent()) {
            Review review = existing.get();
            review.setRating(reviewDTO.getRating());
            review.setComment(reviewDTO.getComment());
            return toDTO(reviewRepository.save(review));
        }
        return null;
    }

    @Override
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
} 