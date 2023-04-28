import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";
import MyComponent from "./components/MyComponent";
import Trainer from "./components/Trainer";
import PropComp from "./components/PropComp";
import ComponentWithProps from "./components/ComponentWithProps";
import Counter from "./components/Counter";
import Convertor from "./components/Convertor";
import Cat from "./components/Cat";
import Login from "./components/Login";
import CarComponent from "./components/CarComponent";
import NewCounter from "./components/NewCounter";
import trainers from "./trainers.json";

const App = () => {
  return (
    <>
      {/* {trainers.map(({ name, age, id }) => (
        <Trainer key={id} name={name} age={age} />
      ))} */}

      <NewCounter />
    </>
  );
};
export default App;
