import {
  container,
  left,
  label,
  section,
  right,
  total,
  totalLabel,
  totalText,
  totalResult,
} from "./Calculator.module.css";
import Input from "../Input/Input";
import Tip from "../Tip/Tip";
import Button from "../Button/Button";
import { useState } from "react";

const Calculator = () => {
  const inputs = [
    {
      type: "bill",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631973900/Assets/icon-dollar_djgbj0.svg",
    },
    {
      type: "people",
      icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631973900/Assets/icon-person_dhf8u3.svg",
    },
  ];

  const tips = [
    {
      id: 1,
      type: "main",
      value: 5,
    },
    {
      id: 2,
      type: "main",
      value: 10,
    },
    {
      id: 3,
      type: "main",
      value: 15,
    },
    {
      id: 4,
      type: "main",
      value: 25,
    },
    {
      id: 5,
      type: "main",
      value: 50,
    },
    {
      id: 6,
      type: "custom",
      value: "custom",
    },
  ];

  const [val, setVal] = useState({
    bill: "",
    people: "",
  });

  const [clicked, setClicked] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  const [tipValue, setTipValue] = useState("");

  const [custom, setCustom] = useState("");

  const handleCustomFocus = () => {
    setClicked({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
    });
    setTipValue("");
  };

  const handleCustomChange = (evt) => {
    setCustom(evt.target.value);
    setTipValue(custom * 10);
  };

  const handleChange = (evt) => {
    setVal({
      bill: evt.target.name === "bill" ? evt.target.value : val.bill,
      people: evt.target.name === "people" ? evt.target.value : val.people,
    });
  };

  const handleClick = (evt) => {
    let val = 0;

    switch (+evt.target.id) {
      case 1:
        val = tips.filter((tip) => tip.id === 1)[0].value;
        break;
      case 2:
        val = tips.filter((tip) => tip.id === 2)[0].value;
        break;
      case 3:
        val = tips.filter((tip) => tip.id === 3)[0].value;
        break;
      case 4:
        val = tips.filter((tip) => tip.id === 4)[0].value;
        break;
      case 5:
        val = tips.filter((tip) => tip.id === 5)[0].value;
        break;
      case 6:
        val = tips.filter((tip) => tip.id === 6)[0].value;
        break;
      default:
        val = 0;
    }

    setCustom("");
    setTipValue(val);

    setClicked({
      first: +evt.target.id === 1 ? !clicked.first : false,
      second: +evt.target.id === 2 ? !clicked.second : false,
      third: +evt.target.id === 3 ? !clicked.third : false,
      fourth: +evt.target.id === 4 ? !clicked.fourth : false,
      fifth: +evt.target.id === 5 ? !clicked.fifth : false,
      sixth: +evt.target.id === 6 ? !clicked.sixth : false,
    });
  };

  return (
    <div className={container}>
      <div className={left}>
        <div>
          <h4 className={label}>Bill</h4>
          <Input
            data={inputs[0]}
            inputValue={val.bill}
            inputChangeValue={handleChange}
          />
        </div>

        <div>
          <h4 className={label}>Tip %</h4>
          <div className={section}>
            {tips.map((tip) => (
              <Tip
                key={tip.id}
                data={tip}
                inputClick={handleClick}
                checkClick={clicked}
                inputCustom={custom}
                inputSetCustom={handleCustomChange}
                inputFocus={handleCustomFocus}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className={label}>People</h4>
          <Input
            data={inputs[1]}
            inputValue={val.people}
            inputChangeValue={handleChange}
          />
        </div>
      </div>
      <div className={right}>
        <div className={total}>
          <div>
            <h6 className={totalLabel}>Tip total</h6>
            <p className={totalText}>/ person</p>
          </div>
          <p className={totalResult}>
            ${(val.bill * (tipValue / 100)).toFixed(2)}
          </p>
        </div>

        <div className={total}>
          <div>
            <h6 className={totalLabel}>Total</h6>
            <p className={totalText}>/ person</p>
          </div>
          <p className={totalResult}>
            $
            {(
              val.bill * (val.people < 1 ? 1 : val.people) +
              val.bill * (tipValue / 100)
            ).toFixed(2)}
          </p>
        </div>

        <Button
          reset={setVal}
          resetTips={setClicked}
          resetTipValue={setTipValue}
          resetCustom={setCustom}
        />
      </div>
    </div>
  );
};

export default Calculator;
