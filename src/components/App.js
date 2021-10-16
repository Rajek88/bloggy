import { Switch, Route } from "react-router-dom";
import { Navbar, CreatePost, Home, PostDetails } from "./";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:postId" component={PostDetails} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
