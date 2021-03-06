import React, { useState } from "react";
import { Redirect } from "react-router";
import { firestore } from "../firebase";
import { useFormInput } from "../hooks";

const CreatePost = () => {
  const title = useFormInput("");
  const subtitle = useFormInput("");
  const content = useFormInput("");
  const [redir, setRedir] = useState({
    redirect: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Title : ", title);
    // console.log("Brief : ", subtitle);
    // console.log("Content : ", content);

    firestore.collection("posts").add({
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
      createdAt: new Date(),
    });

    setRedir({
      redirect: true,
    });
  };

  return (
    <div className="create-post">
      {/* after submission of form set redir as true nad redirect to home page */}
      {redir.redirect ? <Redirect push to="/" /> : null}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-field">
          <label>Title</label>
          {/* using spread operator to extract the value and onChange function from object returned by our own custom hook */}
          <input type="text" {...title} />
        </div>
        <div className="form-field">
          <label>Brief</label>
          <input type="text" {...subtitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea type="text" {...content}></textarea>
        </div>
        <button type="submit" className="create-post-btn">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
