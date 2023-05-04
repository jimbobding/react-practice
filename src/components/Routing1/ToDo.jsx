import { Table } from "reactstrap";
// import { Card } from "reactstrap";
import toDoData from "../ToDoData.json";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

const ToDo = () => {
  const myD = toDoData[0];
  const myKey = Object.keys(myD);
  return (
    <>
      <h1>To Do</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card-container">
          {toDoData.map((data, index) => (
            <Card key={index} style={{ width: "50%", margin: "1rem" }}>
              <CardBody>
                <CardTitle>User Id: {data[myKey[0]]}</CardTitle>
                <CardText>Id: {data[myKey[1]]}</CardText>
                <CardText> Title: {data[myKey[2]]}</CardText>
                <CardText> completed: {data[myKey[3]]}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default ToDo;
