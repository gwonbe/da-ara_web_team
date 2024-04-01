package com.hallym.daara.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.hallym.daara.entity.UserEntity;
import com.hallym.daara.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
@Configuration
public class ReactController implements WebMvcConfigurer{
    
    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*");
    }

    @Autowired
	UserService userService;

    // 로그인

    @GetMapping("/login")
    public void login() {
        System.out.println("# [ReactController] login()");
        //return "user/login";
    }

    @PostMapping("/login-confirm")
    public void loginConfirm(@RequestParam("uID") String uID, @RequestParam("uPW") String uPW, HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("# [ReactController] loginConfirm()");
        String nextPage;
        UserEntity user = userService.loginConfirm(uID, uPW);
        if(user != null){
            System.out.println(String.format("# uID : %s , uPW : %s", uID, uPW));
            nextPage = "home";
            HttpSession session = request.getSession();
            session.setAttribute("uID", uID);
            System.out.println(String.format("# session { uID : %s }", session.getAttribute("uID")));
        }else{
            nextPage = "user/login";
        }
        // 무시 가능 코드
        if(nextPage.equals("home")) System.out.println("# 로그인 성공");
        else System.out.println("# 로그인 실패");
        //return nextPage;
        //return "test";
        response.sendRedirect("");
    }

}
