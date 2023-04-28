import { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

const CarComponent = () => {
  const [brand, setBrand] = useState("Audi");
  const [model, setModel] = useState("TT");
  const [colour, setColour] = useState("Black");
  const [year, setYear] = useState("2019");

  return (
    <>
      <Container className="car-heading">
        <Row>
          <Col class="car-heading">
            <h2>Car Brand</h2>
            <p>{brand}</p>
            <h2>Car Model</h2>
            <p>{model}</p>
            <h2>Car Colour</h2>
            <p>{colour}</p>
            <h2>Car Year</h2>
            <p>{year}</p>
          </Col>
        </Row>
      </Container>

      <form>
        <Container>
          <Row>
            <Col>
              <Card>
                <div class="card-body">
                  <p>{brand}</p>
                  <label> Brand:</label>

                  <input
                    name="brand"
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </Card>
            </Col>
          </Row>
          <Row></Row>
          <Row>
            <Col>
              <Card>
                <div class="card-body">
                  <label> Colour:</label>

                  <input
                    name="colour"
                    type="text"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                  />
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <div class="card-body">
                  <label> Year:</label>
                  <input
                    name="year"
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
};

export default CarComponent;
