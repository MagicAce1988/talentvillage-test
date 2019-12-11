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
        return (
          <div className='rightSide'>
            <div className='topSide'>
                <h2><strong>Starred Influencers</strong></h2>
              <Sorter handler={this.sortMethod} />
            </div>

            <StarredInfluencerList sortMethod={this.state.sort} />
          </div>
        );
    }
}

export default RightSide
