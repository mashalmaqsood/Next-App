import Link from "next/link";
import React from "react";
import { sort } from 'fast-sort';

type User = {
  id: number;
  name: string;
  email: string;
};
type Props = {
 sortOrder : string
}

const UserTable = async ({sortOrder} :Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sortedData = sort(users).asc(sortOrder === "email" ? user => user.email : user => user.name)
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            {" "}
            <Link href="http://localhost:3000/users?sortOrder=name">Name</Link>
          </th>
          <th>
            {" "}
            <Link href="http://localhost:3000/users?sortOrder=email">
              Email
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
