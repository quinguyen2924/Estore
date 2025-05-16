package com.estore.service.impl;

import com.estore.dto.RoleDTO;
import com.estore.entity.Role;
import com.estore.enums.Permission;
import com.estore.enums.UserRole;
import com.estore.repository.RoleRepository;
import com.estore.service.RoleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Override
    public List<RoleDTO> getAllRoles() {
        return roleRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RoleDTO getRoleById(Long id) {
        return roleRepository.findById(id)
                .map(this::toDTO)
                .orElseThrow(() -> new RuntimeException("Role not found"));
    }

    @Override
    public RoleDTO getRoleByName(UserRole name) {
        return roleRepository.findByName(name)
                .map(this::toDTO)
                .orElseThrow(() -> new RuntimeException("Role not found"));
    }

    @Override
    public RoleDTO updateRolePermissions(Long id, List<Permission> permissions) {
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Role not found"));
        
        // Không cho phép chỉnh sửa role ADMIN
        if (role.getName() == UserRole.ADMIN) {
            throw new RuntimeException("Cannot modify ADMIN role permissions");
        }
        
        role.getPermissions().clear();
        role.getPermissions().addAll(permissions);
        role = roleRepository.save(role);
        
        return toDTO(role);
    }

    @Override
    public List<Permission> getPermissions(Long roleId) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Role not found"));
        return role.getPermissions();
    }

    @Override
    public boolean addPermission(Long roleId, Permission permission) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Role not found"));
        
        // Không cho phép chỉnh sửa role ADMIN
        if (role.getName() == UserRole.ADMIN) {
            throw new RuntimeException("Cannot modify ADMIN role permissions");
        }
        
        boolean result = role.addPermission(permission);
        if (result) {
            roleRepository.save(role);
        }
        return result;
    }

    @Override
    public boolean removePermission(Long roleId, Permission permission) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Role not found"));
        
        // Không cho phép chỉnh sửa role ADMIN
        if (role.getName() == UserRole.ADMIN) {
            throw new RuntimeException("Cannot modify ADMIN role permissions");
        }
        
        boolean result = role.removePermission(permission);
        if (result) {
            roleRepository.save(role);
        }
        return result;
    }

    // Chuyển đổi Entity -> DTO
    private RoleDTO toDTO(Role role) {
        RoleDTO dto = new RoleDTO();
        dto.setRoleId(role.getRoleId());
        dto.setName(role.getName());
        dto.setDescription(role.getDescription());
        dto.setCreatedAt(role.getCreatedAt());
        dto.setUpdatedAt(role.getUpdatedAt());
        dto.setPermissions(new ArrayList<>(role.getPermissions()));
        return dto;
    }
}