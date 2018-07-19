// Core
import React from "react";

import SectionHeader from "../SectionHeader";
import ContactList from "../../common/ContactList";

// Data
import contactSetData from "../../../theme/assets/data/contacts";

export default class ContactsSection extends React.Component {
    render() {
        return (
            <section className='contacts'>
                <SectionHeader sectionNumber='03' sectionTitle='Контакты' />
                <ContactList data={contactSetData} />
            </section>
        );
    }
}
