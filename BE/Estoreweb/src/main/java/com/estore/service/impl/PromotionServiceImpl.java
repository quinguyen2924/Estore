package com.estore.service.impl;

import com.estore.dto.PromotionDTO;
import com.estore.entity.Promotion;
import com.estore.repository.PromotionRepository;
import com.estore.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PromotionServiceImpl implements PromotionService {
    @Autowired
    private PromotionRepository promotionRepository;

    private PromotionDTO toDTO(Promotion promotion) {
        if (promotion == null) return null;
        PromotionDTO dto = new PromotionDTO();
        dto.setPromotionId(promotion.getPromotionId());
        dto.setName(promotion.getName());
        dto.setDescription(promotion.getDescription());
        dto.setDiscountPercent(promotion.getDiscountPercent());
        dto.setDiscountAmount(promotion.getDiscountAmount());
        dto.setStartDate(promotion.getStartDate());
        dto.setEndDate(promotion.getEndDate());
        dto.setIsActive(promotion.getIsActive());
        return dto;
    }

    private Promotion toEntity(PromotionDTO dto) {
        Promotion promotion = new Promotion();
        promotion.setPromotionId(dto.getPromotionId());
        promotion.setName(dto.getName());
        promotion.setDescription(dto.getDescription());
        promotion.setDiscountPercent(dto.getDiscountPercent());
        promotion.setDiscountAmount(dto.getDiscountAmount());
        promotion.setStartDate(dto.getStartDate());
        promotion.setEndDate(dto.getEndDate());
        promotion.setIsActive(dto.getIsActive());
        return promotion;
    }

    @Override
    public PromotionDTO createPromotion(PromotionDTO promotionDTO) {
        Promotion promotion = toEntity(promotionDTO);
        return toDTO(promotionRepository.save(promotion));
    }

    @Override
    public PromotionDTO getPromotionById(Long id) {
        return toDTO(promotionRepository.findById(id).orElse(null));
    }

    @Override
    public List<PromotionDTO> getAllPromotions() {
        return promotionRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public PromotionDTO updatePromotion(Long id, PromotionDTO promotionDTO) {
        Optional<Promotion> existing = promotionRepository.findById(id);
        if (existing.isPresent()) {
            Promotion promotion = existing.get();
            promotion.setName(promotionDTO.getName());
            promotion.setDescription(promotionDTO.getDescription());
            promotion.setDiscountPercent(promotionDTO.getDiscountPercent());
            promotion.setDiscountAmount(promotionDTO.getDiscountAmount());
            promotion.setStartDate(promotionDTO.getStartDate());
            promotion.setEndDate(promotionDTO.getEndDate());
            promotion.setIsActive(promotionDTO.getIsActive());
            return toDTO(promotionRepository.save(promotion));
        }
        return null;
    }

    @Override
    public void deletePromotion(Long id) {
        promotionRepository.deleteById(id);
    }
} 