// Core
import React from "react";

import EducationSet from "../EducationSet";
import ContactsSet from "../ContactsSet";

export default class ContentBottomRow extends React.Component {
    render () {
        return (
            <div className = 'bottomRow'>
                <ContactsSet index = '03' title = 'Контакты' />
                <EducationSet index = '04' title = 'Образование' />
            </div>
        );
    }
}
