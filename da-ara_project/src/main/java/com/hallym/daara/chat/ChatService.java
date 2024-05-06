package com.hallym.daara.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    
    @Autowired
    ChatComponent chatComponent;

    // 채팅 내역 저장

    public int saveChatRecord(ChatEntity chat){
        System.out.println("# [ChatService] saveChatRecord()");
        int result = chatComponent.saveChatRecord(chat);
        if (chat == null) {
            return 0;
        }else{
            if(result > 0) return 1;
            else return -1;
        }
    }

}
