// Core
import React from 'react';

import Skill from './Skill';

export default (props) => {
    const { data } = props;
    const skillListJSX = data.map((item) => {
        const { id, title, points } = item;
        return (
            < Skill
                key={id}
                title={title}
                points={points}
            />
        );
    });

    return (
        <>{skillListJSX}</>
    );
};
