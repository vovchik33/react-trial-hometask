import React from 'react';
import { hot } from 'react-hot-loader';
import ProfileHeader from "../../components/ProfileHeader";
import {ProfileContent} from "../../components/ProfileContent";

@hot(module)
export default class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <ProfileHeader/>
                <ProfileContent/>
            </div>
        )
    }
}