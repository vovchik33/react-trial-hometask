// Core
import React from "react";

import SectionHeader from "../SectionHeader";

// Data
import contactSetData from "../../theme/assets/data/contacts";

const Contact = (props) => {
    return (
        <div className = 'contact'>
            <span className = 'action'>{props.action}</span>
            <span className = 'address'>{props.address}</span>
        </div>
    );
};

const Contacts = (props) => {
    return (
        <>
            {props.data.map((item) => {
                return (
                    <Contact
                        action = { item.action }
                        address = { item.address }
                        key = { item.id }
                    />
                );
            })}
        </>
    );
};

export default class ContactsSet extends React.Component {
    render () {
        return (
            <section className = 'contacts'>
                <SectionHeader sectionNumber = '03' sectionTitle = 'Контакты' />
                <Contacts data = { contactSetData } />
            </section>
        );
    }
}
