import { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");

  // 비밀번호 정규식
  const passwordNumber = /^[A-Za-z0-9]{8,20}$/;

  const passwordCheck = (password) => {
    if (password.match(passwordNumber) === null) {
      setPwdErrorMsg("비밀번호 규정에 맞춰 입력해주세요😊");
    } else {
      setPwdErrorMsg("");
    }
  };

  return (
    <form action="" className="login-box" method="post">
      <p>
        반가워요! 학번과 비밀번호를 <br />
        입력해주세요. 😀
      </p>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="학번"
        value={username}
        name="signup_id"
        type="number"
      ></input>
      <br />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
          passwordCheck(e.target.value);
        }}
        placeholder="비밀번호"
        value={password}
        type="password"
        name="signup_pwd"
      ></input>
      <br />
      {pwdErrorMsg && <p style={{ color: "yellow" }}>{pwdErrorMsg}</p>}
      <p>비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</p>
      <button type="submit">회원가입 완료</button>
    </form>
  );
};

export default SignupPage;
