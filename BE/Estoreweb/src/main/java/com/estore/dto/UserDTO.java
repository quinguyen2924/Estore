package com.estore.dto;

import com.estore.enums.UserRole;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class UserDTO {
    private UUID userId;
    private String email;
    private String fullName;
    private String password;
    private String phone;
    private String address;
    private UserRole role;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}