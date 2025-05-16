package com.estore.service;

import com.estore.dto.RoleDTO;
import com.estore.enums.Permission;
import com.estore.enums.UserRole;

import java.util.List;

public interface RoleService {
    List<RoleDTO> getAllRoles();
    RoleDTO getRoleById(Long id);
    RoleDTO getRoleByName(UserRole name);
    RoleDTO updateRolePermissions(Long id, List<Permission> permissions);
    List<Permission> getPermissions(Long roleId);
    boolean addPermission(Long roleId, Permission permission);
    boolean removePermission(Long roleId, Permission permission);
}