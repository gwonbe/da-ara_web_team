package com.hallym.daara.chat;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class ChatComponent {

    @Autowired
    JdbcTemplate jdbcTemplate;

    // 채팅 내역 저장

    public int saveChatRecord(ChatEntity chat){

        System.out.println("# [ChatComponent] saveChatRecord()");

        List<String> list = new ArrayList<String>();

        String sql = "INSERT INTO chat(cUser, cRecord, cDate) ";
        sql += "VALUES(?, ?, NOW())";

        list.add(chat.getCUser());
        list.add(chat.getCRecord());
        list.add(chat.getCDate());

        int result = -1;

        try{
            result = jdbcTemplate.update(sql, list.toArray());
        }catch(Exception e){
            e.printStackTrace();
        }

        return result;

    }
    
}
