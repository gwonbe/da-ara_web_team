// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import "../../assets/fonts/fonts.css";

const Form = styled.div`
  width: 80%;
  margin: auto;
  background-color: #d5e2f2;
  border-radius: 11px;
`;
const Loginform = styled.form`
  display: grid;
  row-gap: 13px;
`;

// const H2 = styled.h2`
//   font-size: 50px;
//   text-align: center;
//   font-family: "BagleFatOne";
//   color: #fff;
//   -webkit-text-stroke: 1px #a0bbf2;
// `;

const ButtonForm = styled.div`
  background-color: #d5e2f2;
  color: white;
  align-self: end;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
`;
const Button = styled.button`
  background-color: #a0bbf2;
  width: 90%;
  color: black;
  font-weight: bold;
  outline: none;
  border: none;
  padding: 10px 24px;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 15px;
  font-family: "NanumSquareRoundEB";
  &:hover {
    background-color: #5576d9;
    color: white;
  }
`;
const Label = styled.label`
  padding-left: 2rem;
  display: block;
  font-family: "NanumSquareRoundR";
`;

const Input = styled.input`
  width: 90%;
  margin: 0 auto; /* Add this line */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 9px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const CloseButton = styled.button`
  margin: 5px;
  // float: right;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 11px;
  color: #a0bbf2;
  background-color: #d5e2f2;
`;
const LoginPage = ({ handleClickCancel }) => {
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
    <Form>
      <CloseButton onClick={handleClickCancel}>
        <MdCancel size={30} />
      </CloseButton>
      <Loginform action="/login-confirm" className="login-box" method="post">
        {/* <H2>DA-ARA</H2> */}
        <Label htmlFor="name">학번 </Label>
        <Input
          name="uID"
          type="text"
          id="username"
          placeholder="학번을 입력하세요."
          autoComplete="username"
          value={idValue}
          onChange={saveUserId}
          required
        />
        <Label htmlFor="password">비밀번호 </Label>
        <Input
          name="uPW"
          type="password"
          placeholder="비밀번호"
          value={pwValue}
          onChange={saveUserPw}
          autoComplete="password"
          required
        />
        <ButtonForm>
          <Button type="submit" disabled={!(idValue && pwValue)}>
            로그인
          </Button>
        </ButtonForm>
      </Loginform>
    </Form>
  );
};

export default LoginPage;
