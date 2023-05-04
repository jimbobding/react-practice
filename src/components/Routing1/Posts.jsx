import { Table } from "reactstrap";
import { Card } from "reactstrap";
import postsData from "../PostsData.json";

const Posts = () => {
  const myD = postsData[0];
  const myKey = Object.keys(myD);
  return (
    <>
      <h1>Posts</h1>
      <Table bordered striped variant="dark">
        <thead>
          <tr>
            {myKey.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {postsData.map((data, index) => (
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
