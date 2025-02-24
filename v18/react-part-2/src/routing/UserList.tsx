import { Link } from "react-router";

const UserList = () => {
  const users = [
    { id: 1, name: "Sameed" },
    {
      id: 2,
      name: "Subhan",
    },
    { id: 3, name: "Aviraj" },
  ];
  return (
    <div className="container-fluid">
      <h4 className="text-center text-body-secondary mt-2">Users</h4>
      <ul className="list-group p-2 ">
        {users.map((user) => (
          <li key={user.id} className="list-group-item text-center">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
