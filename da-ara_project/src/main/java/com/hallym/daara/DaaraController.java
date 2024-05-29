package com.hallym.daara;

import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class DaaraController{

    // http://localhost:8080
    @RequestMapping("daara")
    public Object daara(HttpServletRequest request) {
        System.out.println("# [DaaraController] daara()");
        Object[] userInfoArray = new String[5];
        HttpSession session = request.getSession();
        Object session_uID = session.getAttribute("uID");
        Object session_uPW = session.getAttribute("uPW");
        Object session_uName = session.getAttribute("uName");
        Object session_uMajor = session.getAttribute("uMajor");
        Object session_uDoubleMajor = session.getAttribute("uDoubleMajor");
        // System.out.println(session_uID);
        // System.out.println(session_uPW);
        // System.out.println(session_uName);
        // System.out.println(session_uMajor);
        // System.out.println(session_uDoubleMajor);
        userInfoArray[0] = session_uID;
        userInfoArray[1] = session_uPW;
        userInfoArray[2] = session_uName;
        userInfoArray[3] = session_uMajor;
        userInfoArray[4] = session_uDoubleMajor;
        return userInfoArray;
    }
    
}
