package com.estore.controller;

import com.estore.dto.RoleDTO;
import com.estore.enums.Permission;
import com.estore.enums.UserRole;
import com.estore.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@RequiredArgsConstructor
public class RoleController {
    private final RoleService roleService;

    @GetMapping
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<List<RoleDTO>> getAllRoles() {
        return ResponseEntity.ok(roleService.getAllRoles());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<RoleDTO> getRoleById(@PathVariable Long id) {
        return ResponseEntity.ok(roleService.getRoleById(id));
    }

    @GetMapping("/name/{name}")
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<RoleDTO> getRoleByName(@PathVariable UserRole name) {
        return ResponseEntity.ok(roleService.getRoleByName(name));
    }

    @PutMapping("/{id}/permissions")
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<RoleDTO> updateRolePermissions(
            @PathVariable Long id,
            @RequestBody List<Permission> permissions) {
        return ResponseEntity.ok(roleService.updateRolePermissions(id, permissions));
    }

    @GetMapping("/{id}/permissions")
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<List<Permission>> getPermissions(@PathVariable Long id) {
        return ResponseEntity.ok(roleService.getPermissions(id));
    }

    @PostMapping("/{id}/permissions")
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<Boolean> addPermission(
            @PathVariable Long id,
            @RequestBody Permission permission) {
        return ResponseEntity.ok(roleService.addPermission(id, permission));
    }

    @DeleteMapping("/{id}/permissions")
    @PreAuthorize("hasAuthority('MANAGE_USERS')")
    public ResponseEntity<Boolean> removePermission(
            @PathVariable Long id,
            @RequestBody Permission permission) {
        return ResponseEntity.ok(roleService.removePermission(id, permission));
    }
}