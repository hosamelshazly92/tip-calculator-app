import { container, top, bottom, image } from "./App.module.css";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className={container}>
      <div className={top}>
        <img
          className={image}
          src="https://res.cloudinary.com/ux-ui-designer/image/upload/v1631973900/Assets/logo_j8qz2i.svg"
          alt="main logo"
        />
      </div>
      <div className={bottom}>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
