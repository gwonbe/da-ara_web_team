import { useState } from "react";
import Select from "react-select";
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
const StyledSelect = styled(Select)`
  width: 90%;
  margin: 0 auto;
`;
// const H2 = styled.h2`
//   font-size: 50px;
//   text-align: center;
//   font-family: "BagleFatOne";
//   color: #fff;
//   -webkit-text-stroke: 1px #9a96c8;
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
  margin: 0 2px;
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
const P = styled.p`
  padding-left: 0.5rem;
  font-family: "NanumSquareRoundR";
`;

const SignupPage = ({ handleClickCancel }) => {
  const [usernumber, setUsernumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(null);

  // 비밀번호 정규식
  const passwordNumber = /^[A-Za-z0-9]{8,20}$/;

  const passwordCheck = (password) => {
    if (password.match(passwordNumber) === null) {
      setPwdErrorMsg("비밀번호 규정에 맞춰 입력해주세요");
    } else {
      setPwdErrorMsg("비밀번호 규정에 맞게 입력하셨습니다😊");
    }
  };
  const options = [
    { value: "인문학부", label: "인문학부" },
    { value: "국어국문학전공", label: "국어국문학전공" },
    { value: "철학전공", label: "철학전공" },
    { value: "사학전공", label: "사학전공" },
    { value: "영어영문학과", label: "영어영문학과" },
    { value: "중국학과", label: "중국학과" },
    { value: "일본학과", label: "일본학과" },
    { value: "러시아학과", label: "러시아학과" },
    { value: "글로컬융합인문학전공", label: "글로컬융합인문학전공" },
    { value: "심리학과", label: "심리학과" },
    { value: "사회학과", label: "사회학과" },
    { value: "사회복지학부", label: "사회복지학부" },
    { value: "사회복지전공", label: "사회복지전공" },
    { value: "노인복지전공", label: "노인복지전공" },
    { value: "정치행정학과", label: "정치행정학과" },
    { value: "광고홍보학과", label: "광고홍보학과" },
    { value: "법학과", label: "법학과" },
    { value: "경제학과", label: "경제학과" },
    { value: "청소년학", label: "청소년학" },
    { value: "경영학과", label: "경영학과" },
    { value: "금융재무학과", label: "금융재무학과" },
    {
      value: "스타트업비즈니스(융합)전공",
      label: "스타트업비즈니스(융합)전공",
    },
    { value: "화학과", label: "화학과" },
    { value: "생명과학과", label: "생명과학과" },
    { value: "바이오메디컬학과", label: "바이오메디컬학과" },
    { value: "식품영양학과", label: "식품영양학과" },
    { value: "환경생명공학과", label: "환경생명공학과" },
    { value: "언어청각학부", label: "언어청각학부" },
    { value: "체육학과", label: "체육학과" },
    { value: "바이오헬스케어융합전공", label: "바이오헬스케어융합전공" },
    { value: "의예·의학과", label: "의예·의학과" },
    { value: "간호학과", label: "간호학과" },
    { value: "글로벌학부", label: "글로벌학부" },
    { value: "글로벌비즈니스전공", label: "글로벌비즈니스전공" },
    { value: "문화산업전공", label: "문화산업전공" },
    { value: "한국학전공", label: "한국학전공" },
    { value: "융합과학수사학과", label: "융합과학수사학과" },
    { value: "융합인재학부", label: "융합인재학부" },
    { value: "의과학융합전공", label: "의과학융합전공" },
    { value: "기후변화융합전공", label: "기후변화융합전공" },
    { value: "언론방송융합미디어전공", label: "언론방송융합미디어전공" },
    { value: "디지털미디어콘텐츠전공", label: "디지털미디어콘텐츠전공" },
    { value: "반도체전공", label: "반도체전공" },
    { value: "디스플레이전공", label: "디스플레이전공" },
    { value: "소프트웨어학부", label: "소프트웨어학부" },
    { value: "빅데이터전공", label: "빅데이터전공" },
    { value: "스마트IOT전공", label: "스마트IOT전공" },
    { value: "콘텐츠IT전공", label: "콘텐츠IT전공" },
    { value: "인공지능융합학부", label: "인공지능융합학부" },
    { value: "AI의료융합전공", label: "AI의료융합전공" },
    { value: "AI로봇융합전공", label: "AI로봇융합전공" },
    { value: "AI기술경영융합전공", label: "AI기술경영융합전공" },
    { value: "데이터사이언스학부", label: "데이터사이언스학부" },
    { value: "디지털금융전보전공", label: "디지털금융전보전공" },
    { value: "데이터테크전공", label: "데이터테크전공" },
    { value: "임상의학통계전공", label: "임상의학통계전공" },
    { value: "디지털인문예술전공", label: "디지털인문예술전공" },
    { value: "글로벌협력전공", label: "글로벌협력전공" },
    { value: "융합관광경영전공", label: "융합관광경영전공" },
    { value: "의약신소재전공", label: "의약신소재전공" },
    { value: "융합신소재공학전공", label: "융합신소재공학전공" },
    {
      value: "마케팅커뮤니케이션테크놀로지융합전공",
      label: "마케팅커뮤니케이션테크놀로지융합전공",
    },
    { value: "공공인재융합전공", label: "공공인재융합전공" },
  ];

  const handleMajorChange = (selectedOption) => {
    setSelectedMajor(selectedOption);
  };

  return (
    <Form>
      <CloseButton onClick={handleClickCancel}>
        <MdCancel size={30} />
      </CloseButton>
      <Loginform action="/signup-confirm" method="post">
        {/* <H2>DA-ARA</H2> */}
        <Label>성명</Label>
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="성명"
          value={username}
          name="uName"
          type="text"
        ></Input>
        <Label>학번</Label>
        <Input
          onChange={(e) => {
            setUsernumber(e.target.value);
          }}
          placeholder="학번"
          value={usernumber}
          name="uID"
          type="text"
        ></Input>
        <Label>비밀번호</Label>
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
            passwordCheck(e.target.value);
          }}
          placeholder="비밀번호"
          value={password}
          type="password"
          name="uPW"
        ></Input>
        {pwdErrorMsg && <p style={{ color: "green" }}>{pwdErrorMsg}</p>}
        <P>영문 대소문자, 숫자를 혼합하여 8~20자로 입력</P>
        <StyledSelect
          onChange={handleMajorChange}
          options={options}
          value={selectedMajor}
          getOptionLabel={(option) => option.label}
          placeholder="학과를 입력(선택)해주세요..."
          name="uMajor"
        />
        <ButtonForm>
          <Button
            type="submit"
            disabled={!(username && password && usernumber && selectedMajor)}
          >
            회원가입
          </Button>
        </ButtonForm>
      </Loginform>
    </Form>
  );
};

export default SignupPage;
