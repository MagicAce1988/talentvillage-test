import React from 'react'
import '../cssfiles/Sorter.css'
import {connect} from 'react-redux';
import {setSortMethod} from '../../redux/setSortMethod/actions';

const mapDispatchToProps = dispatch => {
      return {
        setSortMethod: event => dispatch(setSortMethod(event.target.value))
      }
  }

function Sorter(props) {
  const {setSortMethod} = props
  
    return (
      <div>
        <form>
          <select onChange={setSortMethod}>
            <option value="AlphabetAsc">Alphabetically</option>
            <option value="AlphabetDesc">Alphabetically (Reverse Order)</option>
            <option value="EngagementAsc">Engagement (Low - High)</option>
            <option value="EngagementDesc">Engagement (High - Low)</option>
            <option value="FollowersAsc">Followers (Low - High)</option>
            <option value="FollowersDesc">Followers (High - Low)</option>
            
          </select>
        </form>
      </div>
    );
}

export default connect(null,mapDispatchToProps)(Sorter)
