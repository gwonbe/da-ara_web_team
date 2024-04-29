package com.hallym.daara.user;

public class UserEntity {
    
    private String uID;
    private String uPW;
    private String uName;
    private String uMajor;
    private String uDoubleMajor;
    
    // getters and setters

    public String getuID() {
        return uID;
    }
    public void setuID(String uID) {
        this.uID = uID;
    }
    public String getuPW() {
        return uPW;
    }
    public void setuPW(String uPW) {
        this.uPW = uPW;
    }
    public String getuName() {
        return uName;
    }
    public void setuName(String uName) {
        this.uName = uName;
    }
    public String getuMajor() {
        return uMajor;
    }
    public void setuMajor(String uMajor) {
        this.uMajor = uMajor;
    }
    public String getuDoubleMajor() {
        return uDoubleMajor;
    }
    public void setuDoubleMajor(String uDoubleMajor) {
        this.uDoubleMajor = uDoubleMajor;
    }

    // method

    public void printUser(){
        System.out.println(String.format("# uID : %s , uPW : %s , uName : %s , uMajor : %s , uDoubleMajor : %s", uID, uPW, uName, uMajor, uDoubleMajor));
    }
    
}
