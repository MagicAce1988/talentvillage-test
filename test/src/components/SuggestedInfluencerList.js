import React, { Component } from "react";
import SuggestedInfluencer from "./SuggestedInfluencer";

class SuggestedInfluencerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listOfInfluencers: []
        }
    }

    componentDidMount(){
        let {users}=this.props;
        this.setState({listOfInfluencers: users})
    }
 

    render() {

        let userList = this.state.listOfInfluencers;
        let {moveUser}=this.props;

        return (
            <div className="group">
                {userList.map((user, i) => (
                    <SuggestedInfluencer
                        key={i}
                        id={user.influencer_id}
                        name={user.influencer_full_name}
                        instagram={user.influencer_instagram_username}
                        picture={user.influencer_instagram_profile_image}
                        moveUser={moveUser}
                    />
                ))}
            </div>
        );
    }
}

export default SuggestedInfluencerList;
