import styled from "styled-components";
import { MdCancel } from "react-icons/md";

const Form = styled.div`
  width: 80%;
  margin: auto;
  background-color: #d5e2f2;
  border-radius: 11px;
`;
const Logoutform = styled.form`
  display: grid;
  row-gap: 13px;
`;

const P = styled.p`
  text-align: center;
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
const LogoutPage = ({ handleClickCancel }) => {
  return (
    <Form>
      <CloseButton onClick={handleClickCancel}>
        <MdCancel size={30} />
      </CloseButton>
      <Logoutform action="/logout-confirm" method="get">
        <P>로그아웃 하시겠습니까?</P>
        <ButtonForm>
          <Button type="submit">로그아웃</Button>
        </ButtonForm>
      </Logoutform>
    </Form>
  );
};

export default LogoutPage;
