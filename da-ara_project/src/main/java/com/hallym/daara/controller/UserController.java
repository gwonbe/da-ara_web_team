package com.hallym.daara.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.hallym.daara.entity.UserEntity;
import com.hallym.daara.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/daara/user")
@Configuration
public class UserController implements WebMvcConfigurer{

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*");
    }

    @Autowired
	UserService userService;

    // 회원가입

    @GetMapping("/signup")
    public void signup() {
        System.out.println("# [UserController] signup()");
        //return "user/signup";
    }

    @PostMapping("/signup-confirm")
    public void signupConfirm(UserEntity user){
        System.out.println("# [UserController] signupConfirm()");
		int result = userService.signupConfirm(user);
        System.out.println("# " + result);
        /*
		String nextPage;
		if(result > 0) nextPage = "home";
		else nextPage = "user/signup";
		return nextPage;
        */
    }

    // 회원탈퇴

    @GetMapping("/withdraw")
    public void withdraw() {
        System.out.println("# [UserController] withdraw()");
        //return "user/withdraw";
    }

    @PostMapping("/withdraw-confirm")
    public void withdrawConfirm(@RequestParam("uID") String uID, @RequestParam("uPW") String uPW){
        System.out.println("# [UserController] withdrawConfirm()");
        int result = userService.withdrawConfirm(uID, uPW);
        System.out.println("# " + result);
        /*
        String nextPage;
        if(result > 0) nextPage = "home";
        else nextPage = "user/withdraw";
        return nextPage;
        */
    }

    // 로그인

    @GetMapping("/login")
    public void login() {
        System.out.println("# [UserController] login()");
        //return "user/login";
    }

    @PostMapping("login-confirm")
    public void loginConfirm(@RequestParam("uID") String uID, @RequestParam("uPW") String uPW, HttpServletRequest request){
        System.out.println("# [UserController] loginConfirm()");
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
    }

    // 로그아웃

    @GetMapping("/logout")
    public void logout() {
        System.out.println("# [UserController] logout()");
        //return "user/logout";
    }

    @GetMapping("/logout-confirm")
    public void logoutConfirm(HttpServletRequest request, SessionStatus sessionStatus) {
        System.out.println("# [UserController] logoutConfirm()");
        //String nextPage = "home";
        sessionStatus.setComplete();
        HttpSession session = request.getSession();
        session.setAttribute("uID", null);
        Object value = session.getAttribute("uID");
        if (value != null) {
            System.out.println("# Session attribute value: " + value.toString());
        } else {
            System.out.println("# Session attribute not found!");
        }
        //return nextPage;
    }
    
}
