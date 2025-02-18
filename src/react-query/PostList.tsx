import { useState } from "react";
import usePost from "./hooks/usePost";

const PostList = () => {
  const [userID, setUserID] = useState<number>();
  const { data: posts, error, isLoading } = usePost(userID);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUserID(parseInt(event.target.value))}
        value={userID}
        className="form selct mb3"
      >
        <option value={""}></option>
        <option value={"1"}>User 1</option>
        <option value={"2"}>User 2</option>
        <option value={"3"}>User 3</option>
      </select>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
