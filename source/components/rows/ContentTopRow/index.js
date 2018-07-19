// Core
import React from "react";

import SkillsSection from "../../sections/SkillsSection";
import WorksExpirienceSection from "../../sections/WorksExpirienceSection";

export default class ContentTopRow extends React.Component {
    render () {
        return (
            <div className = 'topRow'>
                <SkillsSection index = '01' title = 'Набор скилов' />
                <WorksExpirienceSection index = '02' title = 'Опыт работы' />
            </div>
        );
    }
}
