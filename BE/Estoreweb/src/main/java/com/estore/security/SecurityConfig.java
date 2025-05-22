package com.estore.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                // Public APIs
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/products/public/**").permitAll()
                .requestMatchers("/api/categories/public/**").permitAll()
                .requestMatchers("/api/cart/**").permitAll()
                .requestMatchers("/api/orders/public/**").permitAll()
                
                // Protected APIs
                .requestMatchers("/api/admin/**").hasAuthority("MANAGE_USERS")
                .requestMatchers("/api/products/**").hasAnyAuthority("MANAGE_PRODUCTS", "MANAGE_INVENTORY")
                .requestMatchers("/api/categories/**").hasAuthority("MANAGE_CATEGORIES")
                .requestMatchers("/api/orders/**").hasAuthority("MANAGE_ORDERS")
                .requestMatchers("/api/promotions/**").hasAuthority("MANAGE_PROMOTIONS")
                .requestMatchers("/api/reviews/**").hasAuthority("MANAGE_REVIEWS")
                
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}