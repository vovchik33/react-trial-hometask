// Core
import React from "react";

import SectionHeader from "../SectionHeader";
import SkillList from "../../common/SkillList";

// Data
import skillSetData from "../../../theme/assets/data/skillset";

export default class SkillsSection extends React.Component {
    render () {
        return (
            <section className = 'skillset'>
                <SectionHeader sectionNumber = '01' sectionTitle = 'Набор скилов' />
                <SkillList data = { skillSetData } />
            </section>
        );
    }
}
