// Core
import React from "react";

import SkillsSet from "../SkillSet";
import WorksExpirienceSet from "../WorksExpirienceSet";

export default class ContentTopRow extends React.Component {
    render () {
        return (
            <div className = 'topRow'>
                <SkillsSet index = '01' title = 'Набор скилов' />
                <WorksExpirienceSet index = '02' title = 'Опыт работы' />
            </div>
        );
    }
}
