import React, { Component } from 'react'
import StarredInfluencerList from './StarredInfluencerList'
import Sorter from './Sorter'
import './RightSide.css'

class RightSide extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sort: ''
        }
    }
    

    sortMethod = (method) => {
        this.setState({
            sort: method
        })
    }




    render() {
      let {users} = this.props;
        return (
          <div className='rightSide'>
            <div className='topSide'>
                <h2><strong>Starred Influencers</strong></h2>
              <Sorter handler={this.sortMethod} />
            </div>
            <div className='bottomSide'>

            <StarredInfluencerList sortMethod={this.state.sort}  users={users} />
            </div>
          </div>
        );
    }
}

export default RightSide
