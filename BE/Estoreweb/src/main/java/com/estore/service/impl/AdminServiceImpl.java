package com.estore.service.impl;

import com.estore.dto.AdminDTO;
import com.estore.entity.Admin;
import com.estore.entity.User;
import com.estore.repository.AdminRepository;
import com.estore.repository.UserRepository;
import com.estore.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final AdminRepository adminRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<AdminDTO> getAllAdmins() {
        return adminRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public AdminDTO getAdminById(UUID id) {
        return adminRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
    }

    @Override
    @Transactional
    public AdminDTO createAdmin(AdminDTO adminDTO) {
        User user = userRepository.findById(adminDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Admin admin = new Admin();
        admin.setUser(user);
        admin.setDepartment(adminDTO.getDepartment());
        admin.setCreatedAt(LocalDateTime.now());
        admin.setUpdatedAt(LocalDateTime.now());
        Admin saved = adminRepository.save(admin);
        return convertToDTO(saved);
    }

    @Override
    @Transactional
    public AdminDTO updateAdmin(UUID id, AdminDTO adminDTO) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
        if (adminDTO.getDepartment() != null) admin.setDepartment(adminDTO.getDepartment());
        admin.setUpdatedAt(LocalDateTime.now());
        Admin updated = adminRepository.save(admin);
        return convertToDTO(updated);
    }

    @Override
    @Transactional
    public void deleteAdmin(UUID id) {
        if (!adminRepository.existsById(id)) {
            throw new RuntimeException("Admin not found");
        }
        adminRepository.deleteById(id);
    }

    private AdminDTO convertToDTO(Admin admin) {
        AdminDTO dto = new AdminDTO();
        dto.setAdminId(admin.getAdminId());
        dto.setUserId(admin.getUser().getUserId());
        dto.setDepartment(admin.getDepartment());
        dto.setCreatedAt(admin.getCreatedAt());
        dto.setUpdatedAt(admin.getUpdatedAt());
        return dto;
    }
}