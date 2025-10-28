import { useState, useEffect } from "react";
import supabase from "../utills/supabase";
import dayjs from "dayjs";
import { Link, NavLink } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts, error } = await supabase.from("posts").select();

      if (error) {
        console.error("Error fetching posts:", error);
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
        {posts.map((post, i) => (
          <NavLink to="/view">
            <li key={i}>
              {post.title} / {post.name} / {post.content} /
              {dayjs(post.created_at).format("YYYY-MM-DD")}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default App;
