// Core
import React from "react";

import SectionHeader from "../SectionHeader";
import WorkList from "../../common/WorkList";

// Data
import workSetData from "../../../theme/assets/data/experience";

export default class WorksExpirienceSet extends React.Component {
    render() {
        return (
            <section className='worksset'>
                <SectionHeader sectionNumber='02' sectionTitle='Опыт работы' />
                <WorkList data={workSetData} />
            </section>
        );
    }
}
