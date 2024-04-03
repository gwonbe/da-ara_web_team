package com.hallym.daara;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class DaaraController{

    // http://localhost:8080/daara
    @RequestMapping("daara")
    public String requestMethodName() {
        System.out.println("# [DaaraController] daara()");
        return "다아라에게 무엇이든 물어보세요!";
    }
    
}
