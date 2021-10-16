import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "./firebase";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            //   we need to grab the id separately
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("Posts :: ", posts);
        setPosts(posts);
      });
  }, []);
  return (
    <div className="home">
      <h1>Tech blog</h1>
      <div id="blog-by">Rajendra</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
