import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

const myName = {
  firstname: "Jimmy",
  secondname: "David",
  address: "mind yo beez wax",
};

const Cat = () => (
  <>
    <Container>
      <Row>
        <Col>
          <Card>
            <div className="card-body">
              <div>
                my name is {myName.firstname}
                {myName.secondname}
              </div>
              <div>I live at {myName.address}</div>
              <div></div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default Cat;
