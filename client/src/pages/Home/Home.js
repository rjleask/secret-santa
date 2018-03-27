import React, { Component } from "react";
import Login from "../../components/loginBtn";
import Logout from "../../components/logoutBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {
    cookie: false,
    username: ""
  };
  componentDidMount() {
    this.cookieCheck();
  }
  cookieCheck() {
    if (document.cookie.length > 90) {
      this.setState({ cookie: true });
      this.getUserInfo();
    } else {
      this.setState({ cookie: false });
    }
  }

  getUserInfo = () => {
    API.getUserInfo()
      .then(res => {
        this.setState({
          username: res.data.username
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    if (this.state.cookie === false) {
      return (
        <div>
          <h2>Santa!!!!!!</h2>
          <Login />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Santa!!!!!!</h2>
          <Logout />
        </div>
      );
    }
  }
}

export default Home;
