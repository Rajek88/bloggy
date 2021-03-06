import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "./firebase";
// import styled from "styled-components";

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
        // console.log("Posts :: ", posts);
        setPosts(posts);
      });
  }, []);
  return (
    <div className="home">
      <h1>Blog</h1>
      {/* <div id="blog-by">Author : Rajendra</div> */}
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
