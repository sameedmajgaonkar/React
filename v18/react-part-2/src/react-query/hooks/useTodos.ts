import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService from "../services/todoService";

const useTodos = () => {
  return useQuery({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
  });
};

export default useTodos;

//  PAGINATION
// import axios from "axios";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";

// export interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// interface TodoQuery {
//   pageNumber: number;
//   pageSize: number;
// }
// const useTodos = (query: TodoQuery) => {
//   const fetchTodos = () => {
//     return axios
//       .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
//         params: {
//           _start: (query.pageNumber - 1) * query.pageSize,
//           _limit: query.pageSize,
//         },
//       })
//       .then((res) => res.data);
//   };

//   return useQuery({
//     queryKey: ["todos", query],
//     queryFn: fetchTodos,
//     placeholderData: keepPreviousData,
//   });
// };

// export default useTodos;
