import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../utills/supabase";
import dayjs from "dayjs";

function View() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("posts")
        .select()
        .eq("id", parseInt(id))
        .single();

      if (error) {
        console.error("Error fetching post:", error);
      } else {
        setPost(data);
      }
    }

    fetchPost();
  }, [id]);

  console.log(id);

  if (!post) return <p>Loading</p>;

  return (
    <div className="mt-3">
      <h3>{post.title}</h3>
      <p>작성자: {post.name}</p>
      <p>{post.content}</p>
      <p>작성일: {dayjs(post.created_at).format("YYYY-MM-DD")}</p>
    </div>
  );
}

export default View;
