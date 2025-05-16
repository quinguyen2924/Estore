package com.estore.entity;

import com.estore.enums.Permission;
import com.estore.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private UserRole name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @ElementCollection
    @CollectionTable(name = "role_permissions", joinColumns = @JoinColumn(name = "role_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "permission")
    private List<Permission> permissions = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public List<Permission> getPermissions() {
        return permissions;
    }

    public boolean addPermission(Permission permission) {
        if (!permissions.contains(permission)) {
            permissions.add(permission);
            return true;
        }
        return false;
    }

    public boolean removePermission(Permission permission) {
        return permissions.remove(permission);
    }

    public boolean hasPermission(Permission permission) {
        return permissions.contains(permission);
    }

    public void clearPermissions() {
        permissions.clear();
    }

    public void setDefaultPermissions() {
        permissions.clear();
        switch (name) {
            case ADMIN:
                permissions.addAll(List.of(Permission.values()));
                break;
            case MANAGER:
                permissions.addAll(List.of(
                    Permission.MANAGE_PRODUCTS,
                    Permission.MANAGE_ORDERS,
                    Permission.MANAGE_PROMOTIONS,
                    Permission.VIEW_REPORTS,
                    Permission.MANAGE_INVENTORY
                ));
                break;
            case STAFF:
                permissions.addAll(List.of(
                    Permission.MANAGE_ORDERS,
                    Permission.VIEW_REPORTS,
                    Permission.MANAGE_INVENTORY
                ));
                break;
            case CUSTOMER:
                // Customers have no special permissions
                break;
        }
    }
} 