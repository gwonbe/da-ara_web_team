import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 100%;
  background-color: blue;
  text-align: left;
  padding: 0;
`;

function SideModal() {
  return (
    <Box>
      <h4>title</h4>
      <p>contents</p>
      <span>date</span>
    </Box>
  );
}

export default SideModal;
