import { useState } from "react";
import usePosts from "./hooks/usePosts";
const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="alert alert-danger">{error.message}</p>;
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => setUserId(parseInt(e.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
