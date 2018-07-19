// Core
import React from "react";

import EducationSection from "../../sections/EducationSection";
import ContactsSection from "../../sections/ContactsSection";

export default class ContentBottomRow extends React.Component {
    render () {
        return (
            <div className = 'bottomRow'>
                <ContactsSection index = '03' title = 'Контакты' />
                <EducationSection index = '04' title = 'Образование' />
            </div>
        );
    }
}
