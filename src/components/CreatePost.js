import React, { useState } from "react";
import { firestore } from "../firebase";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title : ", title);
    console.log("Brief : ", subtitle);
    console.log("Content : ", content);

    firestore.collection("posts").add({
      title: title,
      subtitle: subtitle,
      content: content,
      createdAt: new Date(),
    });
  };

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-field">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Brief</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="create-post-btn">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
