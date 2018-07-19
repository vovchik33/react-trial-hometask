// Core
import React from "react";

import SectionHeader from "../SectionHeader";
import EduPlaceList from "../../common/EduPlaceList";

// Data
import educationSetData from "../../../theme/assets/data/education";

export default class EducationSection extends React.Component {
    render () {
        return (
            <section className = 'education'>
                <SectionHeader sectionNumber = '04' sectionTitle = 'Образование' />
                <EduPlaceList data = { educationSetData } />
            </section>
        );
    }
}
