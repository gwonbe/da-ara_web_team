import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const navigate = useNavigate();

  const saveUserId = (event) => {
    setIdValue(event.target.value);
  };

  const saveUserPw = (event) => {
    setPwValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("학번:", idValue);
    console.log("비밀번호:", pwValue);
  };

  return (
    <form
      action="daara/user/login-confirm"
      className="login-box"
      onSubmit={handleClick}
      method="post"
    >
      <input
        type="number"
        className="login_id"
        placeholder="학번을 입력하세요."
        autoComplete="username"
        value={idValue}
        onChange={saveUserId}
      />
      <br />
      <input
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
          //onClick={() => navigate("/chatpage")}
        >
          로그인
        </button>
      </div>
      <div>
        <p>아직 회원이 아니신가요?</p>
        <Link to="/signup">
          <button>회원가입 이동</button>
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;
