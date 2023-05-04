import { Table } from "reactstrap";
import commentsData from "../CommentsData.json";

const Posts = () => {
  const myD = commentsData[0];
  const myKey = Object.keys(myD);
  return (
    <>
      <Table bordered striped variant="dark">
        <h1>Comments</h1>
        <thead>
          <tr>
            {myKey.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {commentsData.map((data, index) => (
            <tr key={index}>
              {myKey.map((key) => (
                <td>{data[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Posts;
