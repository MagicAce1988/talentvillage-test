import React, { Component } from 'react'
import './App.css'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }

componentDidMount(){
  fetch("https://api.myjson.com/bins/w6vbo")
      .then(response => response.json()).then(users => this.setState({leftUsers: users.data}))
  fetch("https://api.myjson.com/bins/k7uck")
    .then(response => response.json()).then(users => this.setState({ rightUsers: users.data }))
  }

  moveUser = (id) => {
    let { leftUsers, rightUsers } = this.state;
    rightUsers.push(leftUsers.find(user => user.influencer_id === id));
    let temporaryUsers = leftUsers.filter(user => user.influencer_id !== id);
    leftUsers.splice(0, leftUsers.length, ...temporaryUsers)
    this.setState({
      leftUsers,
      rightUsers
    })
  }
  
  
  
  render() {
    if (this.state.leftUsers && this.state.rightUsers) {
    return (
      <div className="MyApp">
        <div className="Content">
          <div className='leftSideMain'><LeftSide users={this.state.leftUsers} moveUser={this.moveUser}/></div>
          <div className='rightSideMain'><RightSide users={this.state.rightUsers}/></div>
        </div>
      </div>
    );
    } else {
      return null
    }
  }
}

export default App
