package com.estore.service;

import com.estore.dto.OrderDTO;
import java.util.List;
import java.util.UUID;

public interface OrderService {
    OrderDTO createOrder(OrderDTO orderDTO);
    OrderDTO getOrderById(UUID id);
    List<OrderDTO> getAllOrders();
    OrderDTO updateOrder(UUID id, OrderDTO orderDTO);
    void deleteOrder(UUID id);
    OrderDTO updateStatus(UUID id, String status);
    // Có thể bổ sung các phương thức nghiệp vụ khác
} 