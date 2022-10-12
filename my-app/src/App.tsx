import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Home } from "./Routes/Home/home";
// import { Login } from "./Routes/Login/login";
import { Posts } from "./Routes/Posts/posts";

function App() {
  return (
    <Router>
      <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        <Routes>
          <Route path="posts" element={<Posts/>}/>
          <Route index element={<Home/>}/>
          {/* <Route path="login" element={<Login/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
