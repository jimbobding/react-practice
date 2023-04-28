import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

const Trainer = ({ name, age }) => {
  return (
    <>
      <Card>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
      </Card>
    </>
  );
};

export default Trainer;
