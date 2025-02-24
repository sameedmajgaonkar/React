import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, isLoading, isFetching, error } = useTodos();

  if (error) return <p className="alert alert-danger">{error.message}</p>;

  if (isLoading || isFetching) return <p>Loading...</p>;
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

// PAGINATION
// import { useState } from "react";
// import useTodos from "../hooks/useTodos";

// const TodoList = () => {
//   const pageSize = 10;
//   const [pageNumber, setPageNumber] = useState(1);
//   const {
//     data: todos,
//     isLoading,
//     isFetching,
//     error,
//   } = useTodos({ pageNumber, pageSize });

//   if (error) return <p className="alert alert-danger">{error.message}</p>;

//   if (isLoading || isFetching) return <p>Loading...</p>;
//   return (
//     <>
//       <ul className="list-group">
//         {todos?.map((todo) => (
//           <li className="list-group-item" key={todo.id}>
//             {todo.title}
//           </li>
//         ))}
//       </ul>

//       <button
//         disabled={pageNumber == 1}
//         className="btn btn-primary"
//         onClick={() => setPageNumber(pageNumber - 1)}
//       >
//         Prev
//       </button>
//       <button
//         className="btn btn-primary ms-2"
//         onClick={() => setPageNumber(pageNumber + 1)}
//       >
//         Next
//       </button>
//     </>
//   );
// };

// export default TodoList;
