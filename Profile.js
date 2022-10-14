import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state from "../../redux/state";

const Profile = (props) => {

    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likeCounter: '15'},
        {id: 2, message: 'It is my first post', likeCounter: '20'}
    ]*/

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;