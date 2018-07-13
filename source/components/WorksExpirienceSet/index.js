// Core
import React from "react";

import SectionHeader from "../SectionHeader";

// Data
import workSetData from "../../theme/assets/data/experience";

const Work = (props) => {
    return (
        <div className = 'workplace'>
            <div className = 'leftColumn'>
                <span className = 'period'>{props.period}</span>
                <span className = 'position'>{props.position}</span>
            </div>
            <div className = 'rightColumn'>
                <span className = 'location'>{props.location}</span>
                <span className = 'company'>{props.company}</span>
            </div>
        </div>
    );
};

const Works = (props) => {
    return (
        <>
            {props.data.map((item) => {
                return (
                    <Work
                        company = { item.company }
                        key = { item.id }
                        location = { item.location }
                        period = { item.period }
                        position = { item.position }
                    />
                );
            })}
        </>
    );
};

export default class WorksExpirienceSet extends React.Component {
    render () {
        return (
            <section className = 'worksset'>
                <SectionHeader sectionNumber = '02' sectionTitle = 'Опыт работы' />
                <Works data = { workSetData } />
            </section>
        );
    }
}
