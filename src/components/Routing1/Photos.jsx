import { Table } from "reactstrap";
// import { Card } from "reactstrap";
import photosData from "../PhotosData.json";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

const Photos = () => {
  const myD = photosData[0];
  const myKey = Object.keys(myD);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="photo-container">
          {photosData.map((data, index) => (
            <Card key={index} style={{ width: "50%", margin: "1rem" }}>
              <CardBody>
                <CardTitle>Album Id: {data[myKey[0]]}</CardTitle>
                <CardText>Id: {data[myKey[1]]}</CardText>
                <CardTitle>Title: {data[myKey[2]]}</CardTitle>
                <CardText> URL: {data[myKey[3]]}</CardText>
                <CardText> Thumbnail: {data[myKey[4]]}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default Photos;
