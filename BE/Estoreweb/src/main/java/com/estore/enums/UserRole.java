package com.estore.enums;

import java.util.Arrays;
import java.util.List;

public enum UserRole {
    ADMIN(Arrays.asList(
        Permission.MANAGE_USERS,
        Permission.MANAGE_PRODUCTS,
        Permission.MANAGE_CATEGORIES,
        Permission.MANAGE_ORDERS,
        Permission.MANAGE_PROMOTIONS,
        Permission.MANAGE_INVENTORY,
        Permission.MANAGE_REVIEWS
    )),
    MANAGER(Arrays.asList(
        Permission.MANAGE_PRODUCTS,
        Permission.MANAGE_ORDERS,
        Permission.MANAGE_PROMOTIONS,
        Permission.MANAGE_INVENTORY
    )),
    STAFF(Arrays.asList(
        Permission.MANAGE_ORDERS,
        Permission.MANAGE_INVENTORY
    )),
    CUSTOMER(Arrays.asList());

    private final List<Permission> permissions;

    UserRole(List<Permission> permissions) {
        this.permissions = permissions;
    }

    public List<Permission> getPermissions() {
        return permissions;
    }
} 