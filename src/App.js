import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

import Posts from "./components/Routing1/Posts";
import Home from "./components/Routing1/Home";
import Comments from "./components/Routing1/Comments";
import Nav from "./components/Routing1/Nav";
// import Contact from "./components/Routing/Contact";

// import MyComponent from "./components/MyComponent";
// import Trainer from "./components/Trainer";
// import PropComp from "./components/PropComp";
// import ComponentWithProps from "./components/ComponentWithProps";
// import Counter from "./components/Counter";
// import Convertor from "./components/Convertor";
// import Clock from "./components/Clock";
// import Login from "./components/Login";
// import CarComponent from "./components/CarComponent";
// import NewCounter from "./components/NewCounter";
// import Practice from "./components/Practice";
// import AnotherComponent from "./components/AnotherComponent";
// import trainers from "./trainers.json";
// import Game from "./components/Game";
// import Parse from "./components/Parse";
// import Shopping from "./components/Shopping";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
      </BrowserRouter>
    </>
  );
};
export default App;
