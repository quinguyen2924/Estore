package com.estore.config;

import com.estore.entity.Role;
import com.estore.enums.Permission;
import com.estore.enums.UserRole;
import com.estore.repository.RoleRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class RoleInitializer {
    private final RoleRepository roleRepository;

    @PostConstruct
    @Transactional
    public void initRoles() {
        // Tạo hoặc cập nhật role ADMIN - Có tất cả các quyền
        createRoleIfNotExists(
                UserRole.ADMIN,
                "Quản trị viên hệ thống",
                List.of(
                    Permission.MANAGE_USERS,
                    Permission.MANAGE_PRODUCTS,
                    Permission.MANAGE_CATEGORIES,
                    Permission.MANAGE_ORDERS,
                    Permission.MANAGE_PROMOTIONS,
                    Permission.MANAGE_INVENTORY,
                    Permission.MANAGE_REVIEWS
                )
        );

        // Tạo hoặc cập nhật role MANAGER - Quản lý sản phẩm, đơn hàng, khuyến mãi, kho và xem báo cáo
        createRoleIfNotExists(
                UserRole.MANAGER,
                "Quản lý",
                List.of(
                        Permission.MANAGE_PRODUCTS,
                        Permission.MANAGE_ORDERS,
                        Permission.MANAGE_PROMOTIONS,
                        Permission.MANAGE_INVENTORY
                )
        );

        // Tạo hoặc cập nhật role STAFF - Quản lý đơn hàng và xem báo cáo
        createRoleIfNotExists(
                UserRole.STAFF,
                "Nhân viên",
                List.of(
                        Permission.MANAGE_ORDERS,
                        Permission.MANAGE_INVENTORY
                )
        );

        // Tạo hoặc cập nhật role CUSTOMER - Không có quyền quản lý
        createRoleIfNotExists(
                UserRole.CUSTOMER,
                "Khách hàng",
                List.of()
        );
    }

    private void createRoleIfNotExists(UserRole roleName, String description, List<Permission> permissions) {
        Role role = roleRepository.findByName(roleName)
                .orElse(new Role());

        role.setName(roleName);
        role.setDescription(description);

        // Chỉ gán quyền mới nếu là role mới hoặc role hiện tại không có quyền
        if (role.getRoleId() == null || role.getPermissions().isEmpty()) {
            role.getPermissions().clear();
            role.getPermissions().addAll(permissions);
        }

        roleRepository.save(role);
    }
}