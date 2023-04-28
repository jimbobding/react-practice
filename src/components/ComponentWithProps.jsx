import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Yo = (props) => <h1>yo {props.age}</h1>;

const ComponentWithProps = (props) => {
  return (
    <>
      <h1 class="heading">{props.heading}</h1>

      {/* <Yo age={12}></Yo> */}

      <Container class="text-center">
        <Row>
          <Col>
            <Card class="stuff">
              <div class="card-body mx-auto">
                <p> my name is {props.name}</p>
                <p>
                  I live at {props.number} number, {props.address}
                </p>
                <p>I am studying{props.content2}</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ComponentWithProps.defaultProps = {
  heading: `REACT `,
  content2: `REACT which is a front end library developed by Facebook `,
  name: `Jimmy David`,
  number: 2,
  address: "mind yo beez wax",
};

export default ComponentWithProps;
