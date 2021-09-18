import { container, input, dollar } from "./Input.module.css";

const Input = ({ data, inputValue, inputChangeValue }) => {
  return (
    <div className={container}>
      <input
        className={input}
        type="number"
        placeholder="0.00"
        name={data.type}
        onChange={inputChangeValue}
        value={inputValue}
      />
      <img className={dollar} src={data.icon} alt={`${data.type} sign`} />
    </div>
  );
};

export default Input;
