package com.estore.service;

import com.estore.dto.PromotionDTO;
import java.util.List;

public interface PromotionService {
    PromotionDTO createPromotion(PromotionDTO promotionDTO);
    PromotionDTO getPromotionById(Long id);
    List<PromotionDTO> getAllPromotions();
    PromotionDTO updatePromotion(Long id, PromotionDTO promotionDTO);
    void deletePromotion(Long id);
} 