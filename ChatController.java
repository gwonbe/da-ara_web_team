package com.hallym.daara.chat;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class ChatController {
    
    @Autowired
    ChatService chatService;

    // 채팅 내역 저장

    @PostMapping("/save-chat-record")
    public void saveChatRecord(ChatEntity chat, HttpServletRequest request, HttpServletResponse response) throws IOException{
        System.out.println("# [ChatController] saveChatRecord()");
		int result = chatService.saveChatRecord(chat);
        System.out.println("# " + result);
        response.sendRedirect("");
    }

}
