package com.estore.service.impl;

import com.estore.entity.OrderItem;
import com.estore.repository.OrderItemRepository;
import com.estore.service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemServiceImpl implements OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    @Override
    public OrderItem getOrderItemById(Long id) {
        return orderItemRepository.findById(id).orElse(null);
    }

    @Override
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    @Override
    public OrderItem updateOrderItem(Long id, OrderItem orderItem) {
        Optional<OrderItem> existing = orderItemRepository.findById(id);
        if (existing.isPresent()) {
            orderItem.setOrderItemId(id);
            return orderItemRepository.save(orderItem);
        }
        return null;
    }

    @Override
    public void deleteOrderItem(Long id) {
        orderItemRepository.deleteById(id);
    }
} 