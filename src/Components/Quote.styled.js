import styled from "styled-components";
import bg from "../assets/images/pattern-quotes.svg";

const QuoteWrapper = styled.section`
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-self: stretch;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left top;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 950px) {
    order: 2;
    text-align: center;
    background-position: top center;
    margin-top: 5rem;
  }

  & .quote {
    font-family: var(--font);
    font-size: 3.5rem;
    color: var(--dark-blue);
    font-weight: 300;
    word-spacing: 2px;

    @media screen and (max-width: 750px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }

  & .user {
    display: flex;
    gap: 1rem;
    align-items: center;
    @media screen and (max-width: 950px) {
      justify-content: center;
      flex-direction: column;
    }

    & h3 {
      font-size: 1.9rem;
      text-transform: capitalize;
      color: var(--dark-blue);
      font-family: var(--font);
      font-weight: 700;
    }
    & span {
      font-size: 1.7em;
      font-family: var(--font);
      color: var(--grayish-blue);
    }
  }
`;
export default QuoteWrapper;
