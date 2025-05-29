package com.estore.service;

import com.estore.dto.AuthRequestDTO;
import com.estore.dto.AuthResponseDTO;
import com.estore.dto.RegisterDTO;

public interface AuthService {
    AuthResponseDTO register(RegisterDTO registerDTO);
    AuthResponseDTO login(AuthRequestDTO authRequestDTO);
    boolean forgotPassword(String email);
    String generateToken(String email);
} 