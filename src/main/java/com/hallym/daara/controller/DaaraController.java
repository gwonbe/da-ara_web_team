package com.hallym.daara.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class DaaraController {
    
    @RequestMapping("daara")
    public String requestMethodName() {
        return "다아라에게 무엇이든 물어보세요!";
    }
    

}
