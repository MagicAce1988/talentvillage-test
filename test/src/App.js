import React, { Component } from "react";
import "./App.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/w6vbo")
      .then(response => response.json())
      .then(users => this.setState({ leftUsers: users.data }));
    fetch("https://api.myjson.com/bins/k7uck")
      .then(response => response.json())
      .then(users => this.setState({ rightUsers: users.data }));
  }

  moveUser = id => {
    let { leftUsers, rightUsers } = this.state;
    rightUsers.push(leftUsers.find(user => user.influencer_id === id));
    this.setState({
      leftUsers,
      rightUsers
    });
  };

  removeUser = id => {
    let { rightUsers } = this.state;
    let temporaryUsers = rightUsers.filter(user => user.influencer_id !== id);
    rightUsers.splice(0, rightUsers.length, ...temporaryUsers);
    this.setState({
      rightUsers: rightUsers
    });
  };

  render() {
    
    if (this.state.leftUsers && this.state.rightUsers) {

      let users = this.state.leftUsers;

      let filteredUsers = users.filter((user) => !this.state.rightUsers.includes(user));

      return (
        <div className="MyApp">
          <div className="Content">
            <div className="leftSideMain">
              <LeftSide users={filteredUsers} moveUser={this.moveUser} />
            </div>
            <div className="rightSideMain">
              <RightSide
                users={this.state.rightUsers}
                removeUser={this.removeUser}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
