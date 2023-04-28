import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const NewCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const click = (e) => {
    const getHistory = Number.parseInt(e.target.innerText);
    console.log(count, "+", getHistory, "=", count + getHistory);
    setCount((count) => count + getHistory);
    const result = count + getHistory;
    setHistory([`${count} + ${getHistory} + ${result}`, ...history]);
  };

  console.log(history);
  console.log(count);

  return (
    <>
      <Container>
        <Card className="counter-card">
          <Row>
            <input value={count} />
          </Row>
          <Row>
            {" "}
            <button onClick={click}>1</button>
          </Row>
          <Row>
            {" "}
            <button onClick={click}> 5</button>
          </Row>
          <Row>
            {" "}
            <button onClick={click}> 0</button>
          </Row>
          <Row>
            {" "}
            <button onClick={click}> -1</button>
          </Row>
          <Row>
            {" "}
            <button onClick={click}> -5 </button>
          </Row>
        </Card>
        <Card>
          {history.map((h, i) => (
            <p key={i}>{h}</p>
          ))}
        </Card>
      </Container>
    </>
  );
};

export default NewCounter;
