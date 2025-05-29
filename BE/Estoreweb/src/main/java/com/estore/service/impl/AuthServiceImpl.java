package com.estore.service.impl;

import com.estore.dto.AuthRequestDTO;
import com.estore.dto.AuthResponseDTO;
import com.estore.dto.RegisterDTO;
import com.estore.entity.User;
import com.estore.repository.UserRepository;
import com.estore.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public AuthResponseDTO register(RegisterDTO registerDTO) {
        AuthResponseDTO response = new AuthResponseDTO();
        if (userRepository.findByEmail(registerDTO.getEmail()).isPresent()) {
            response.setMessage("Email đã tồn tại");
            return response;
        }
        User user = new User();
        user.setEmail(registerDTO.getEmail());
        user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
        user.setFullName(registerDTO.getFullName());
        user.setPhone(registerDTO.getPhone());
        user.setAddress(registerDTO.getAddress());
        user.setRole(com.estore.enums.UserRole.CUSTOMER);
        userRepository.save(user);
        response.setMessage("Đăng ký thành công");
        response.setToken(generateToken(user.getEmail()));
        return response;
    }

    @Override
    public AuthResponseDTO login(AuthRequestDTO authRequestDTO) {
        AuthResponseDTO response = new AuthResponseDTO();
        Optional<User> userOpt = userRepository.findByEmail(authRequestDTO.getEmail());
        if (userOpt.isPresent() && passwordEncoder.matches(authRequestDTO.getPassword(), userOpt.get().getPassword())) {
            response.setToken(generateToken(userOpt.get().getEmail()));
            response.setMessage("Đăng nhập thành công");
        } else {
            response.setMessage("Sai tài khoản hoặc mật khẩu");
        }
        return response;
    }

    @Override
    public boolean forgotPassword(String email) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        return userOpt.isPresent();
    }

    @Override
    public String generateToken(String email) {
        // Sinh JWT giả lập (thực tế nên dùng thư viện JWT)
        return "jwt-token-for-" + email;
    }
} 