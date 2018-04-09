import React from "react";
let heroku = true;
let url = "http://localhost:3001/api/auth/login";

class Login extends React.Component {
  render() {
    return (
      <a href={url}>
        <button className="btn btn-primary">Login</button>
      </a>
    );
  }
}
export default Login;
