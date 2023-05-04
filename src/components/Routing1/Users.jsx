import { Table } from "reactstrap";
import { Card } from "reactstrap";
import usersData from "../UsersData.json";

const Users = () => {
  const myD = usersData[0];
  const myKey = Object.keys(myD);

  return (
    <>
      <h1>Users</h1>
      <Table bordered striped variant="dark">
        <thead>
          <tr>
            {myKey.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersData.map((data, index) => {
            const { address, company, ...rest } = data;
            return (
              <tr key={index}>
                {myKey.map((key) => (
                  <td key={key}>
                    {key === "address" ? (
                      <div>
                        <p>{address.street}</p>
                        <p>{address.suite}</p>
                        <p>{address.city}</p>
                        <p>{address.zipcode}</p>
                      </div>
                    ) : key === "company" ? (
                      <div>
                        <p>{company.name}</p>
                        <p>{company.catchPhrase}</p>
                        <p>{company.bs}</p>
                      </div>
                    ) : (
                      rest[key]
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
