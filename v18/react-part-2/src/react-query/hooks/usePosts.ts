import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = (userId: number | undefined) => {
  const fetchPost = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId,
        },
      })
      .then((res) => res.data);
  };
  return useQuery<Post[]>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: fetchPost,
    staleTime: 1 * 60 * 1000, //1m
  });
};

export default usePosts;
