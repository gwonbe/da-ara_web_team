package com.hallym.daara.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@Configuration
public class DaaraController implements WebMvcConfigurer{
    
    // vite 접속 허용
    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*");
    }

    // http://localhost:8080/daara
    @RequestMapping("daara")
    public String requestMethodName() {
        System.out.println("# [DaaraController] daara()");
        return "다아라에게 무엇이든 물어보세요!";
    }
    
}
