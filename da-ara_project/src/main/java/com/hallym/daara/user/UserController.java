package com.hallym.daara.user;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
public class UserController{
    
    @Autowired
	UserService userService;

    // 로그인

    @GetMapping("/login")
    public void login() {
        System.out.println("# [UserController] login()");
        //return "user/login";
    }

    @PostMapping("/login-confirm")
    public void loginConfirm(@RequestParam("uID") String uID, @RequestParam("uPW") String uPW, HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("# [UserController] loginConfirm()");
        String nextPage;
        UserEntity user = userService.loginConfirm(uID, uPW);
        if(user != null){
            //System.out.println(String.format("# uID : %s , uPW : %s", uID, uPW));
            user.printUser();
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

    // 회원가입

    @PostMapping("/signup-confirm")
    public void signupConfirm(UserEntity user, HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("# [UserController] signupConfirm()");
		int result = userService.signupConfirm(user);
        System.out.println("# " + result);
        /*
		String nextPage;
		if(result > 0) nextPage = "home";
		else nextPage = "user/signup";
		return nextPage;
        */
        response.sendRedirect("");
    }

}
