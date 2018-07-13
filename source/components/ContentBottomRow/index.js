import React from 'react';
import SectionHeader from "../SectionHeader";

export default class ContentBottomRow extends React.Component {
    render() {
        return (
            <div className="bottomRow">

                <SectionHeader sectionNumber="03" sectionTitle="Контакты"/>
                <SectionHeader sectionNumber="02" sectionTitle="Образование"/>
            </div>
        )
    }
}