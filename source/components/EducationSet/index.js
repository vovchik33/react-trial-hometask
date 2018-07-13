// Core
import React from "react";

import SectionHeader from "../SectionHeader";

// Data
import educationSetData from "../../theme/assets/data/education";

const EduPlace = (props) => {
    return (
        <div className = 'eduspace'>
            <span className = 'period'>{props.period}</span>
            <span className = 'eduspace'>{props.eduspace}</span>
            <span className = 'degree'>{props.degree}</span>
        </div>
    );
};

const Education = (props) => {
    return (
        <>
            {props.data.map((item) => {
                return (
                    <EduPlace
                        degree = { item.degree }
                        eduspace = { item.eduspace }
                        key = { item.id }
                        period = { item.period }
                    />
                );
            })}
        </>
    );
};

export default class EducationSet extends React.Component {
    render () {
        return (
            <section className = 'education'>
                <SectionHeader sectionNumber = '04' sectionTitle = 'Образование' />
                <Education data = { educationSetData } />
            </section>
        );
    }
}
