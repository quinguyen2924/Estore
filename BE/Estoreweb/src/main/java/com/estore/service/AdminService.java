package com.estore.service;

import com.estore.dto.AdminDTO;
import java.util.List;
import java.util.UUID;

public interface AdminService {
    List<AdminDTO> getAllAdmins();
    AdminDTO getAdminById(UUID id);
    AdminDTO createAdmin(AdminDTO adminDTO);
    AdminDTO updateAdmin(UUID id, AdminDTO adminDTO);
    void deleteAdmin(UUID id);
}