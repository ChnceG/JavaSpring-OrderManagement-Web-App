package com.chance.backend.service;

import com.chance.backend.model.Review;
import com.chance.backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProductProductId(productId);
    }
}
