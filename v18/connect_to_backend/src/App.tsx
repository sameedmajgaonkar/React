import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/userService";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Sameed" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}

      {isLoading && <div className="spinner-border"></div>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item  d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger mx-2"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// const fetchUsers = async () => {
//   try {
//     const response = await axios.get<User[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setUsers(response.data);
//   } catch (error) {
//     setError((error as AxiosError).message);
//   }
// };
// fetchUsers();
// get -> Promise -> success (response) / failure (error)

//  <input ref={ref} type="text" className="form-control" />
/* <select
className="form-select"
onChange={(e) => setCategory(e.target.value)}
>
<option value=""></option>
<option value="Clothing">Clothing</option>
<option value="Electronics">Electronics</option>
</select>
<ProductList category={category} /> */

//   const ref = useRef<HTMLInputElement>(null);
//   useEffect(() => {
//     if (ref.current) ref.current.focus();
//   });
//   // Will run only once when the component is rendered
//   // const [products, setProducts] = useState<string[]>([]);
//   // useEffect(() => {
//   //   console.log("Fetching Products");
//   //   setProducts(["Clothing", "Electronics"]);
//   // }, []); // Empty array means this effect runs only once on mount and unmount
//   const [category, setCategory] = useState("");

//   const connect = () => console.log("Connecting");
//   const disconnect = () => console.log("Disconnecting");

//   useEffect(() => {
//     connect();
//     return () => disconnect();
//   });
