package com.estore.service;

import com.estore.dto.UserDTO;
import java.util.List;
import java.util.UUID;


public interface UserService {
    List<UserDTO> getAllUsers();
    UserDTO getUserById(UUID id);
    UserDTO getUserByEmail(String email);
    UserDTO createUser(UserDTO userDTO);
    UserDTO updateUser(UUID id, UserDTO userDTO);
    void deleteUser(UUID id);
    boolean login(String email, String password);
    void changePassword(UUID id, String oldPassword, String newPassword);
    void updateUserStatus(UUID id, boolean active);
} 