import { button, main, secondary, input } from "./Tip.module.css";

const Tip = ({
  data,
  inputClick,
  checkClick,
  inputCustom,
  inputSetCustom,
  inputFocus,
}) => {
  return data.type !== "custom" ? (
    <button
      className={`${button} ${
        data.id === 1 && checkClick.first ? secondary : main
      } ${data.id === 2 && checkClick.second ? secondary : main} ${
        data.id === 3 && checkClick.third ? secondary : main
      } ${data.id === 4 && checkClick.fourth ? secondary : main} ${
        data.id === 5 && checkClick.fifth ? secondary : main
      } ${data.id === 6 && checkClick.sixth ? secondary : main}`}
      onClick={inputClick}
      id={data.id}
    >
      {data.value}%
    </button>
  ) : (
    <input
      className={`${button} ${input}`}
      type="number"
      placeholder="custom"
      value={inputCustom}
      onChange={inputSetCustom}
      onFocus={inputFocus}
    />
  );
};

export default Tip;
