import { Table } from "reactstrap";
import postsData from "../PostsData.json";

const Posts = () => {
  const myD = postsData[0];
  const myKey = Object.keys(myD);
  return (
    <>
      <Table bordered striped variant="dark">
        <h1>Posts</h1>
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
