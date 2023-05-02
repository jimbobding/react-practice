import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import "./App.css";
import MyComponent from "./components/MyComponent";
import Trainer from "./components/Trainer";
import PropComp from "./components/PropComp";
import ComponentWithProps from "./components/ComponentWithProps";
import Counter from "./components/Counter";
import Convertor from "./components/Convertor";
import Clock from "./components/Clock";
import Login from "./components/Login";
import CarComponent from "./components/CarComponent";
import NewCounter from "./components/NewCounter";
import Practice from "./components/Practice";
import AnotherComponent from "./components/AnotherComponent";
import trainers from "./trainers.json";
import Game from "./components/Game";
import Parse from "./components/Parse";

const App = () => {
  return (
    <>
      {/* {trainers.map(({ name, age, id }) => (
        <Trainer key={id} name={name} age={age} />
      ))} */}
      {/* <Practice /> */}
      {/* <MyComponent />
      <Clock />
      <Parse /> */}
      <Game />
      {/* <Login /> */}
    </>
  );
};
export default App;
