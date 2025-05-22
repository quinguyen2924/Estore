package com.estore.controller;

import com.estore.dto.PromotionDTO;
import com.estore.service.PromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/promotions")
@RequiredArgsConstructor
public class PromotionController {
    private final PromotionService promotionService;

    // Public APIs
    @GetMapping("/{id}")
    public ResponseEntity<PromotionDTO> getPromotionById(@PathVariable Long id) {
        return ResponseEntity.ok(promotionService.getPromotionById(id));
    }

    @GetMapping
    public ResponseEntity<List<PromotionDTO>> getAllPromotions() {
        return ResponseEntity.ok(promotionService.getAllPromotions());
    }

    // Protected APIs
    @PostMapping
    @PreAuthorize("hasAuthority('MANAGE_PROMOTIONS')")
    public ResponseEntity<PromotionDTO> createPromotion(@RequestBody PromotionDTO promotionDTO) {
        return ResponseEntity.ok(promotionService.createPromotion(promotionDTO));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('MANAGE_PROMOTIONS')")
    public ResponseEntity<PromotionDTO> updatePromotion(@PathVariable Long id, @RequestBody PromotionDTO promotionDTO) {
        return ResponseEntity.ok(promotionService.updatePromotion(id, promotionDTO));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('MANAGE_PROMOTIONS')")
    public ResponseEntity<Void> deletePromotion(@PathVariable Long id) {
        promotionService.deletePromotion(id);
        return ResponseEntity.noContent().build();
    }
} 