package com.hallym.daara.user;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class UserComponent {

    @Autowired
    JdbcTemplate jdbcTemplate;
	
	// 회원가입
	
	public int signupConfirm(UserEntity user) {
		
		System.out.println("# [UserComponent] signupConfirm()");
		
		List<String> list = new ArrayList<String>();
		
		String sql = "INSERT INTO user(uID, uPW, uName, uMajor, uDoubleMajor) ";
		sql += "VALUES(?, ?, ?, ?, ?)";

		String userID = user.getuID();
		String userPW = user.getuPW();
		String userName = user.getuName();
		String userMajor = user.getuMajor();
		String userDoubleMajor = user.getuDoubleMajor();

		System.out.println(String.format("# uID : %s , uPW : %s , uName : %s , uMajor : %s , uDoubleMajor : %s", userID, userPW, userName, userMajor, userDoubleMajor));

        list.add(userID);
        list.add(userPW);
        list.add(userName);
        list.add(userMajor);
        list.add(userDoubleMajor);
		
		int result = -1;
		
		try {
			result = jdbcTemplate.update(sql, list.toArray());
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return result;
		
	}

    // 회원탈퇴

	public int withdrawConfirm(String uID, String uPW) {
		
		System.out.println("# [UserComponent] withdrawConfirm()");

		String sql = "DELETE FROM user WHERE uID = ? and uPW = ?";

		int result = -1;

		try{
			result = jdbcTemplate.update(sql, uID, uPW);
		}catch(Exception e){
			e.printStackTrace();
		}

		return result;

	}

    // 로그인

	@SuppressWarnings("null")
	public UserEntity loginConfirm(String uID, String uPW){
		
		System.out.println("# [UserComponent] loginConfirm()");

		String sql = "SELECT * FROM user WHERE uID = ? AND uPW = ?";

		List<UserEntity> users = null;

		try{
			users = jdbcTemplate.query(
				sql,
				new RowMapper<UserEntity>(){
					@Override
					public UserEntity mapRow(ResultSet rs, int rowNum) throws SQLException{
						UserEntity user = new UserEntity();
						user.setuID(rs.getString("uID"));
						user.setuPW(rs.getString("uPW"));
						user.setuName(rs.getString("uName"));
						user.setuMajor(rs.getString("uMajor"));
						user.setuDoubleMajor(rs.getString("uDoubleMajor"));
						return user;
					}
				},
				uID,
				uPW
			);
		}catch(Exception e){
			e.printStackTrace();
		}

		return users.size()>0 ? users.get(0) : null;

	}

    // 로그아웃

}
