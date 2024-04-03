package com.hallym.daara.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserComponent userComponent;
    
    // 회원가입

    public int signupConfirm(UserEntity user){
        System.out.println("# [UserService] signupConfirm()");
        int signupResult = userComponent.signupConfirm(user);
		if(user == null) {
			return 0;
		}else {
			if(signupResult > 0) return 1;
			else return -1;
		}
    }

    // 회원탈퇴

    public int withdrawConfirm(String uID, String uPW){
        System.out.println("# [UserService] withdrawConfirm()");
        return userComponent.withdrawConfirm(uID, uPW);
    }

    // 로그인
    
    public UserEntity loginConfirm(String uID, String uPW){
        System.out.println("# [UserService] loginConfirm()");
        return userComponent.loginConfirm(uID, uPW);
    }

    // 로그아웃

}
