import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 200px;
  background-color: antiquewhite;
  text-align: left;
  margin: 10px;
  padding: 15px;
`;

function Modal() {
  return (
    <Box>
      <h4>title</h4>
      <p>contents</p>
      <span>date</span>
    </Box>
  );
}

export default Modal;
