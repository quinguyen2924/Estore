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
        // Tạo hoặc cập nhật role ADMIN
        createRoleIfNotExists(
                UserRole.ADMIN,
                "Quản trị viên hệ thống",
                Arrays.asList(Permission.values())
        );

        // Tạo hoặc cập nhật role MANAGER
        createRoleIfNotExists(
                UserRole.MANAGER,
                "Quản lý",
                List.of(
                        Permission.MANAGE_PRODUCTS,
                        Permission.MANAGE_ORDERS,
                        Permission.MANAGE_PROMOTIONS,
                        Permission.VIEW_REPORTS,
                        Permission.MANAGE_INVENTORY
                )
        );

        // Tạo hoặc cập nhật role STAFF
        createRoleIfNotExists(
                UserRole.STAFF,
                "Nhân viên",
                List.of(
                        Permission.MANAGE_ORDERS,
                        Permission.VIEW_REPORTS
                )
        );

        // Tạo hoặc cập nhật role CUSTOMER
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