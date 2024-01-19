import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePost = () =>
  useQuery<Post[], Error>({
    queryKey: ["Post"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1minute
  });

export default usePost;
