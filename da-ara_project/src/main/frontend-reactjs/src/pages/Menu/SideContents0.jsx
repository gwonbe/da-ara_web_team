//로그인 전
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import Sidebar from "./Sidebar";

const SideContents = () => {
  const navigate = useNavigate();
  return (
    <Sidebar width={320}>
      <ul>
        <li>
          <button onClick={() => navigate("/login")}>로그인</button>
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
      </ul>
    </Sidebar>
  );
};

export default SideContents;
