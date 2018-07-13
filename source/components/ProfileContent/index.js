import React from 'react';
import ContentTopRow from "../ContentTopRow";
import ContentBottomRow from "../ContentBottomRow";

export class ProfileContent extends React.Component {
    render() {
        return (
            <div className="content">
                <ContentTopRow/>
                <ContentBottomRow/>
            </div>
        )
    }
}