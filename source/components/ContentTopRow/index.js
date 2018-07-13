import React from 'react';
import SectionHeader from "../SectionHeader";
import SkillsSet from "../SkillSet";
import WorksExpirienceSet from "../WorksExpirienceSet";

export default class ContentTopRow extends React.Component {
    render() {
        return (
            <div className="topRow">
                <SkillsSet titleIndex="01" title="Набор скилов"/>
                <WorksExpirienceSet titleIndex="02" title="Опыт работы"/>
            </div>
        )
    }
}