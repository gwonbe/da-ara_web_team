import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const GuideBox = styled.div`
  width: 80%;
  margin: auto;
  border-radius: 11px;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 11px;
  color: white;
  background-color: transparent;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 90%;
  display: block;
  margin: auto;
`;

const ArrowButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

const images = ["/da-araAimg.png", "/da-araBimg.png", "/da-araAimg.png"];

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
      <Header>
        <CloseButton onClick={handleClickCancel}>
          <MdCancel size={30} />
        </CloseButton>
      </Header>
      <ImgContainer>
        <ArrowButton onClick={handlePrevClick} visible={currentImageIndex > 0}>
          <IoIosArrowBack size={50} />
        </ArrowButton>
        <Img src={images[currentImageIndex]} alt="" />
        <ArrowButton
          onClick={handleNextClick}
          visible={currentImageIndex < images.length - 1}
        >
          <IoIosArrowForward size={50} />
        </ArrowButton>
      </ImgContainer>
    </GuideBox>
  );
};

export default Guide;
