import { useState, useEffect } from "react";
import supabase from "../utills/supabase";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = supabase.from("posts").select();
  console.log(API);

  useEffect(() => {
    async function getPosts() {
      const { data: posts, error } = await supabase.from("posts").select();

      if (error) {
        console.log(error.message);
      } else {
        setPosts(posts);
      }
    }

    getPosts();
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={`/view/${post.id}`}>
              {post.title} / {post.name} / {post.content} /
              {dayjs(post.created_at).format("YYYY-MM-DD")}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
