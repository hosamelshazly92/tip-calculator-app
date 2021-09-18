import { button, main, secondary, input } from "./Tip.module.css";
import { useState } from "react";

const Tip = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleBlur = () => {
    setClicked(false);
  };

  return data.type === "custom" ? (
    <input
      className={`${button} ${input}`}
      type="number"
      placeholder={data.value}
    />
  ) : (
    <button
      className={`${button} ${clicked ? secondary : main}`}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {data.value}%
    </button>
  );
};

export default Tip;
