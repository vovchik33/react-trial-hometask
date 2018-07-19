// Core
import React from 'react';

import Contact from "./Contact";

export default (props) => {
    const { data } = props;
    const contactListJSX = data.map((item) => {
        const { id, action, address } = item;
        return (
            <Contact
                key={id}
                action={action}
                address={address}
            />
        )
    });

    return (
        <>{contactListJSX}</>
    );
};
