import styled from "styled-components";
import bg from "../assets/images/pattern-bg.svg";

const ImgSliderWtapper = styled.section`
  position: relative;
  z-index: 1;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 100%;
  @media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: bottom;
    background-size: 60%;
  }

  & .user__photo {
    display: block;
    width: 35vw;
    transform: translateX(-5rem);
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: -20;
    @media screen and (max-width: 950px) {
      transform: translate(0);
      height: 100%;
    }
  }

  & .slider {
    /* z-index: 20; */
    position: relative;

    display: inline-block;
    margin-top: -20rem;
    @media screen and (max-width: 950px) {
      margin-top: -2rem;
    }
  }
  & .btn-container {
    /* z-index: 20; */
    background-color: #fff;
    border-radius: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  & .btn {
    border: none;
    background: none;
    padding: 0.7rem 1.7rem;
    cursor: pointer;
    transition: all 0.2s;
    @media screen and (max-width: 700px) {
      padding: 0.3rem 1.6rem;
    }
  }
  & .btn:hover {
    transform: scale(1.3);
  }
`;

export default ImgSliderWtapper;
