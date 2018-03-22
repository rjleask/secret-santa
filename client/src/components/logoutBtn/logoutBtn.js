import React from "react";
let heroku = true;
let url = "http://localhost:3001/api/auth/logout";

class Logout extends React.Component {
  render() {
    return (
      <p>
        <a href={url}>
          <button className="btn btn-primary">Logout</button>
        </a>
      </p>
    );
  }
}
export default Logout;
