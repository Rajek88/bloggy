import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../firebase";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        setPost(snapshot.data());
      });
  }, [postId]);
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <h3>{post.subtitle}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
