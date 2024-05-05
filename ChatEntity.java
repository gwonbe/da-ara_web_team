package com.hallym.daara.chat;

public class ChatEntity {
    
    private int cID;
    private String cUser;
    private String cRecord;
    private String cDate;

    // getters and setters

    public int getCID() {
        return this.cID;
    }

    public void setCID(int cID) {
        this.cID = cID;
    }

    public String getCUser() {
        return this.cUser;
    }

    public void setCUser(String cUser) {
        this.cUser = cUser;
    }

    public String getCRecord() {
        return this.cRecord;
    }

    public void setCRecord(String cRecord) {
        this.cRecord = cRecord;
    }

    public String getCDate() {
        return this.cDate;
    }

    public void setCDate(String cDate) {
        this.cDate = cDate;
    }

    // method

    public void printChatInfo(){
        System.out.println(String.format("# cID : %d , cUser : %s , cDate : %s", cID, cUser, cDate));
    }

}
