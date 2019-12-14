import React, { Component } from "react";
import "./App.css";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftUsers: [],
      rightUsers: []
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      let [{ data: leftUsers }, { data: rightUsers }] = await Promise.all([
        fetch("https://api.myjson.com/bins/w6vbo").then(response =>
          response.json()
        ),
        fetch("https://api.myjson.com/bins/k7uck").then(response => response.json())
      ]);
      // let {data :leftUsers}=await fetch("https://api.myjson.com/bins/w6vbo")
      //   .then(response => response.json())

      // let {data: rightUsers} = await fetch("https://api.myjson.com/bins/k7uck")
      //   .then(response => response.json())

      this.setState({
        leftUsers,
        rightUsers
      });
    }, 3000);
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
    let users = this.state.leftUsers || [];

    let filteredUsers = users.filter(
      user => !this.state.rightUsers.includes(user)
    );

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
  }
}

export default App;
