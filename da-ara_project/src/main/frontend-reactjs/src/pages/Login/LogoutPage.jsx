import styled from "styled-components";
import { MdCancel } from "react-icons/md";

const Form = styled.div`
  width: 100%;
  margin: auto;
  background-color: #f3f2fd;
  border-radius: 11px;
`;
const Logoutform = styled.form`
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
const P = styled.p`
  text-align: center;
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
const ButtonForm = styled.div`
  background: #f3f2fd;
  color: white;
  align-self: end;
  padding: 8px;
`;
const CloseButton = styled.button`
  // float: right;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 11px;
`;
const LogoutPage = ({ handleClickCancel }) => {
  return (
    <Form>
      <CloseButton onClick={handleClickCancel}>
        <MdCancel size={30} />
      </CloseButton>
      <Logoutform action="/logout-confirm" method="get">
        <H2>로그아웃</H2>
        <P>로그아웃 하시겠습니까?</P>
        <ButtonForm>
          <Button type="submit">로그아웃</Button>
        </ButtonForm>
      </Logoutform>
    </Form>
  );
};

export default LogoutPage;
