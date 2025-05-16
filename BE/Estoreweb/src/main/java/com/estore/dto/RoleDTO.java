package com.estore.dto;

import com.estore.enums.Permission;
import com.estore.enums.UserRole;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class RoleDTO {
    private Long roleId;
    private UserRole name;
    private String description;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<Permission> permissions;
} 