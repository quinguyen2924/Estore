package com.estore.dto;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class AdminDTO {
    private UUID adminId;
    private UUID userId;
    private String department;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}