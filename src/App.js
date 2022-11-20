import React, { useState } from "react";
import Quote from "./Components/Quote";
import ImgSlider from "./Components/ImgSlider";
import imgJohn from "./assets/images/image-john.jpg";
import imgTanya from "./assets/images/image-tanya.jpg";

const App = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [items, setItems] = useState([
    {
      img: imgJohn,
      name: "john tarkpor",
      position: "Junior Front-end Developer",
      quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
    },
    {
      img: imgTanya,
      name: "tanya sinclair",
      position: "UX Engineer",
      quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future. ”`,
    },
  ]);
  const nextSlide = () => {
    setQuoteIdx((prev) => {
      const nextItem = prev + 1;
      if (nextItem >= items.length) {
        return 0;
      }
      return nextItem;
    });
  };

  const prevSlide = () => {
    setQuoteIdx((prev) => {
      const prevItem = prev - 1;
      if (prevItem < 0) {
        return items.length - 1;
      }
      return prevItem;
    });
  };

  const currentSlide = items[quoteIdx];

  return (
    <div className="app-container">
      <Quote {...currentSlide} />
      <ImgSlider next={nextSlide} prev={prevSlide} img={currentSlide.img} />
    </div>
  );
};

export default App;
