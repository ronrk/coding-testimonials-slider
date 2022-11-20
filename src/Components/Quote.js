import React from "react";

import Wrapper from "./Quote.styled";

const Quote = ({ name, position, quote }) => {
  return (
    <Wrapper>
      <p className="quote">{quote}</p>
      <div className="user">
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </Wrapper>
  );
};

export default Quote;
