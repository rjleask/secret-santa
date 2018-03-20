import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Santa!!!!!!</h2>
        <form>
          <label>Username</label>
          <input type="text" name="username" placeholder="jimmyg@aol.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Name</label>
          <input type="text" name="name" placeholder="Jimmy" />
        </form>
      </div>
    );
  }
}

export default Home;
