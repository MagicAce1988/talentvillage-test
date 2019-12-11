import React from 'react'
import './Sorter.css'

function Sorter({handler}) {
    return (
      <div>
        <form>
          <select onChange={(event) => handler(event.target.value)}>
            <option value="EngagementAsc">Engagement (Low - High)</option>
            <option value="EngagementDesc">Engagement (High - Low)</option>
            <option value="FollowersAsc">Followers (Low - High)</option>
            <option value="FollowersDesc">Followers (High - Low)</option>
            <option value="AlphabetAsc">Alphabetically</option>
            <option value="AlphabetDesc">Alphabetically (Reverse Order)</option>
          </select>
        </form>
      </div>
    );
}

export default Sorter
