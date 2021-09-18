import {
  container,
  left,
  label,
  section,
  right,
} from "./Calculator.module.css";
import Input from "../Input/Input";
import Tip from "../Tip/Tip";
import { v4 as uuid } from "uuid";

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
      id: uuid(),
      type: "main",
      value: 5,
    },
    {
      id: uuid(),
      type: "main",
      value: 10,
    },
    {
      id: uuid(),
      type: "main",
      value: 15,
    },
    {
      id: uuid(),
      type: "main",
      value: 25,
    },
    {
      id: uuid(),
      type: "main",
      value: 50,
    },
    {
      id: uuid(),
      type: "custom",
      value: "custom",
    },
  ];

  return (
    <div className={container}>
      <div className={left}>
        <div>
          <h4 className={label}>Bill</h4>
          <Input data={inputs[0]} />
        </div>

        <div>
          <h4 className={label}>Tip %</h4>
          <div className={section}>
            {tips.map((tip) => (
              <Tip key={tip.id} data={tip} />
            ))}
          </div>
        </div>

        <div>
          <h4 className={label}>People</h4>
          <Input data={inputs[1]} />
        </div>
      </div>
      <div className={right}>
        <h4>Bill</h4>
        <h4>Bill</h4>
      </div>
    </div>
  );
};

export default Calculator;
