import React from 'react';
import Classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    switch ( props.inputtype ) {
        case ('input'):
            inputElement = <input className={Classes.InputElement} {...props} />
            break;
        case ('textarea'):
            inputElement = <textarea {...props} />
            break;
        default:
            inputElement = <input {...props} />
    }

    return (
        <div>
            <label className={Classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;
