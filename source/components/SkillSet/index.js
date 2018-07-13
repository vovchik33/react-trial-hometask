// Core
import React from "react";

import SectionHeader from "../SectionHeader";

// Data
import skillSetData from "../../theme/assets/data/skillset";

const Point = (props) => {
    return props.isActive ? <li /> : <li className = 'inactive' />;
};

const Mark = (props) => {
    const stars = [];

    for (let i = 0; i < props.maxValue; i++) {
        stars.push(i < props.realValue);
    }

    return (
        <ul>
            {stars.map((active, index) => {
                return <Point isActive = { active } key = { index } />;
            })}
        </ul>
    );
};

const Skill = (props) => {
    return (
        <div className = 'skill'>
            <span>{props.title}</span>
            <Mark maxValue = { 10 } realValue = { props.points } />
        </div>
    );
};

const Skills = (props) => {
    return (
        <>
            {props.data.map((item) => {
                return (
                    <Skill
                        key = { item.id }
                        points = { item.points }
                        title = { item.title }
                    />
                );
            })}
        </>
    );
};

export default class SkillsSet extends React.Component {
    render () {
        return (
            <section className = 'skillset'>
                <SectionHeader sectionNumber = '01' sectionTitle = 'Набор скилов' />
                <Skills data = { skillSetData } />
            </section>
        );
    }
}
