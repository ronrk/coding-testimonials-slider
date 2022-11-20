import React from "react";
import Wrapper from "./ImgSlider.styled";
import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-prev.svg";

const ImgSlider = ({ img, next, prev }) => {
  return (
    <Wrapper>
      <img src={img} alt="user" className="user__photo" />
      <div className="slider">
        <div className="btn-container">
          <button className="btn btn-prev" onClick={prev}>
            <img src={iconPrev} alt="prev icon" />
          </button>
          <button className="btn btn-next" onClick={next}>
            <img src={iconNext} alt="next icon" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImgSlider;
