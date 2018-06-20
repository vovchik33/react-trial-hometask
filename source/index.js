// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

const start = (
    <h1
        style = { {
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            minHeight:       '100vh',
            backgroundColor: 'slateblue',
            fontSize:        28,
            fontWeight:      700,
            color:           'snow',
            userSelect:      'none',
        } }>
        Стартовая точка
    </h1>
);

ReactDOM.render(start, document.getElementById('app'));
