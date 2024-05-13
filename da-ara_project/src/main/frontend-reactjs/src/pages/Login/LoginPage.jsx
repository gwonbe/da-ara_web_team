// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";

const Form = styled.div`
  width: 100%;
  margin: auto;
  background-color: #f3f2fd;
  border-radius: 11px;
`;
const Loginform = styled.form`
  display: grid;
  row-gap: 13px;
  padding: 5px;
`;

const H2 = styled.h2`
  padding: 15px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;
const ButtonForm = styled.div`
  background: #f3f2fd;
  color: white;
  align-self: end;
  padding: 8px;
`;
const Button = styled.button`
  background-color: #d6d4f2;
  width: 100%;
  color: black;
  font-weight: bold;
  outline: none;
  border: none;
  margin: 0 2px;
  padding: 10px 24px;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #7586ff;
    color: white;
  }
`;
const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 9px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const CloseButton = styled.button`
  // float: right;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 11px;
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
        <H2>로그인</H2>
        <Label htmlFor="name">학번 </Label>
        <Input
          name="uID"
          type="number"
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
