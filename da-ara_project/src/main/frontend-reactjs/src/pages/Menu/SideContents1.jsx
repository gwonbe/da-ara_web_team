//로그인 후
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import Sidebar from "./Sidebar";

const SideContents = () => {
  //   const navigate = useNavigate();
  return (
    <Sidebar width={320}>
      <ul>
        <li>
          <button>회원정보 수정</button>
        </li>
        <li>
          <button>이용가이드</button>
        </li>
        <li>
          <p>언어 변경</p>
        </li>
        <li>
          <button>테마 변경</button>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </Sidebar>
  );
};

export default SideContents;
