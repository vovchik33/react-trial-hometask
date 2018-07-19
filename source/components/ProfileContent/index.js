// Core
import React from "react";

import ContentTopRow from "../rows/ContentTopRow";
import ContentBottomRow from "../rows/ContentBottomRow";
import FooterRow from "../rows/FooterRow";

export class ProfileContent extends React.Component {
    render () {
        return (
            <div className = 'content'>
                <ContentTopRow />
                <ContentBottomRow />
                <FooterRow />
            </div>
        );
    }
}
