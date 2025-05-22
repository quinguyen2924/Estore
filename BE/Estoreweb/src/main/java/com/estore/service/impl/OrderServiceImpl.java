package com.estore.service.impl;

import com.estore.dto.OrderDTO;
import com.estore.dto.OrderItemDTO;
import com.estore.entity.Order;
import com.estore.entity.OrderItem;
import com.estore.enums.OrderStatus;
import com.estore.repository.OrderRepository;
import com.estore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    private OrderDTO toDTO(Order order) {
        if (order == null) return null;
        OrderDTO dto = new OrderDTO();
        dto.setOrderId(order.getOrderId());
        dto.setUserId(order.getUser().getUserId());
        dto.setTotalAmount(order.getTotalAmount());
        dto.setStatus(order.getStatus().name());
        dto.setShippingAddress(order.getShippingAddress());
        dto.setPaymentMethod(order.getPaymentMethod());
        dto.setCreatedAt(order.getCreatedAt());
        if (order.getItems() != null) {
            dto.setItems(order.getItems().stream().map(this::toItemDTO).collect(Collectors.toList()));
        }
        return dto;
    }

    private OrderItemDTO toItemDTO(OrderItem item) {
        OrderItemDTO dto = new OrderItemDTO();
        dto.setOrderItemId(item.getOrderItemId());
        dto.setProductId(item.getProduct().getProductId());
        dto.setQuantity(item.getQuantity());
        dto.setPrice(item.getPrice());
        return dto;
    }

    @Override
    public OrderDTO createOrder(OrderDTO orderDTO) {
        // Chuyển đổi DTO sang entity (giản lược, cần bổ sung mapping items, user...)
        Order order = new Order();
        // ... mapping các trường cần thiết từ orderDTO sang order
        // (Cần bổ sung logic lấy User, mapping items nếu cần)
        order.setTotalAmount(orderDTO.getTotalAmount());
        order.setShippingAddress(orderDTO.getShippingAddress());
        order.setPaymentMethod(orderDTO.getPaymentMethod());
        order.setStatus(OrderStatus.valueOf(orderDTO.getStatus()));
        Order saved = orderRepository.save(order);
        return toDTO(saved);
    }

    @Override
    public OrderDTO getOrderById(UUID id) {
        return toDTO(orderRepository.findById(id).orElse(null));
    }

    @Override
    public List<OrderDTO> getAllOrders() {
        return orderRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    @Override
    public OrderDTO updateOrder(UUID id, OrderDTO orderDTO) {
        Optional<Order> existing = orderRepository.findById(id);
        if (existing.isPresent()) {
            Order order = existing.get();
            // ... cập nhật các trường từ orderDTO sang order
            order.setTotalAmount(orderDTO.getTotalAmount());
            order.setShippingAddress(orderDTO.getShippingAddress());
            order.setPaymentMethod(orderDTO.getPaymentMethod());
            order.setStatus(OrderStatus.valueOf(orderDTO.getStatus()));
            return toDTO(orderRepository.save(order));
        }
        return null;
    }

    @Override
    public void deleteOrder(UUID id) {
        orderRepository.deleteById(id);
    }

    @Override
    public OrderDTO updateStatus(UUID id, String status) {
        Optional<Order> existing = orderRepository.findById(id);
        if (existing.isPresent()) {
            Order order = existing.get();
            order.setStatus(OrderStatus.valueOf(status));
            return toDTO(orderRepository.save(order));
        }
        return null;
    }
} 