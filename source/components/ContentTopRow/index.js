import React from 'react';
import SectionHeader from "../SectionHeader";
import SkillsSet from "../SkillSet";

export default class ContentTopRow extends React.Component {
    render() {
        return (
            <div className="topRow">
                <SkillsSet titleIndex="01" title="Набор скилов"/>
                <SectionHeader sectionNumber="02" sectionTitle="Опыт работы"/>
            </div>
        )
    }
}