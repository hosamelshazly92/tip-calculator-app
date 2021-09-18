import { button } from "./Button.module.css";

const Button = ({ reset, resetTips, resetTipValue, resetCustom }) => {
  const handleClick = () => {
    reset({
      bill: "",
      people: "",
    });

    resetTips({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
    });

    resetTipValue("");
    resetCustom("");
  };

  return (
    <button className={button} onClick={handleClick}>
      Reset
    </button>
  );
};

export default Button;
