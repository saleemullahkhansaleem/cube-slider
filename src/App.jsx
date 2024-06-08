import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  const [pos, setPos] = useState(0);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="image-cube" style={{ transform: `rotateY(${pos}deg)` }}>
          <div className="front">
            <img src="img.webp" />
          </div>
          <div className="right">
            <img src="img.webp" />
          </div>
          <div className="back">
            <img src="img.webp" />
          </div>
          <div className="left">
            <img src="img.webp" />
          </div>
        </div>
      </div>
      <div className="btns">
        <button
          id="prev"
          onClick={() => {
            setPos((prv) => prv - 90);
          }}
        >
          <FaArrowLeft />
        </button>
        <button
          id="next"
          onClick={() => {
            setPos((prv) => prv + 90);
          }}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default App;
