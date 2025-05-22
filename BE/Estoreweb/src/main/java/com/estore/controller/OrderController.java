package com.estore.controller;

import com.estore.dto.OrderDTO;
import com.estore.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    // Public APIs
    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO) {
        return ResponseEntity.ok(orderService.createOrder(orderDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getOrderById(@PathVariable UUID id) {
        return ResponseEntity.ok(orderService.getOrderById(id));
    }

    // Protected APIs
    @GetMapping
    @PreAuthorize("hasAuthority('MANAGE_ORDERS')")
    public ResponseEntity<List<OrderDTO>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('MANAGE_ORDERS')")
    public ResponseEntity<OrderDTO> updateOrder(@PathVariable UUID id, @RequestBody OrderDTO orderDTO) {
        return ResponseEntity.ok(orderService.updateOrder(id, orderDTO));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('MANAGE_ORDERS')")
    public ResponseEntity<Void> deleteOrder(@PathVariable UUID id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasAuthority('MANAGE_ORDERS')")
    public ResponseEntity<OrderDTO> updateStatus(@PathVariable UUID id, @RequestParam String status) {
        return ResponseEntity.ok(orderService.updateStatus(id, status));
    }
} 