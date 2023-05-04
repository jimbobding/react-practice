import { Table } from "reactstrap";
// import { Card } from "reactstrap";
import albumsData from "../AlbumsData.json";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

const Albums = () => {
  const myD = albumsData[0];
  const myKey = Object.keys(myD);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card-container">
          {albumsData.map((data, index) => (
            <Card key={index} style={{ width: "50%", margin: "1rem" }}>
              <CardBody>
                <CardTitle>User Id: {data[myKey[0]]}</CardTitle>
                <CardText>Id: {data[myKey[1]]}</CardText>
                <CardText> Title: {data[myKey[2]]}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default Albums;
