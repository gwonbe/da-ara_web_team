// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  // const navigate = useNavigate();

  const saveUserId = (event) => {
    setIdValue(event.target.value);
  };

  const saveUserPw = (event) => {
    setPwValue(event.target.value);
  };

  return (
    <form action="/login-confirm" className="login-box" method="post">
      <input
        name="uID"
        type="number"
        className="login_id"
        placeholder="학번을 입력하세요."
        autoComplete="username"
        value={idValue}
        onChange={saveUserId}
      />
      <br />
      <input
        name="uPW"
        className="login_pw"
        type="password"
        placeholder="비밀번호"
        value={pwValue}
        onChange={saveUserPw}
        autoComplete="new-password"
      />
      <div className="login-btn-box">
        <button
          type="submit"
          disabled={!(idValue && pwValue)}
          //onClick={() => navigate("/login-confirm")}
        >
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
