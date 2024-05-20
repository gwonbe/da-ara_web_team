import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const GuideBox = styled.div`
  width: 75%;
  margin: auto;
  border-radius: 11px;
  padding: 10px;
  position: relative;
`;

const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 11px;
  color: white;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 80vh;
  display: block;
  margin: auto;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ArrowButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ color }) => color};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  margin: 0 10px;
`;

const images = ["/daara-phone01.png", "/daara-phone02.png"];

const Guide = ({ handleClickCancel }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <GuideBox>
      <CloseButton onClick={handleClickCancel}>
        <MdCancel size={30} />
      </CloseButton>
      <ImgContainer>
        <Img src={images[currentImageIndex]} alt="" />
      </ImgContainer>
      <ArrowContainer>
        <ArrowButton
          onClick={handlePrevClick}
          visible={currentImageIndex >= 0}
          color={currentImageIndex === 0 ? "gray" : "white"}
        >
          <IoIosArrowBack size={30} />
        </ArrowButton>
        <ArrowButton
          onClick={handleNextClick}
          visible={currentImageIndex <= images.length - 1}
          color={currentImageIndex === images.length - 1 ? "gray" : "white"}
        >
          <IoIosArrowForward size={30} />
        </ArrowButton>
      </ArrowContainer>
    </GuideBox>
  );
};

export default Guide;
