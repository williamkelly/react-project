import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p>I'm name is {props.name} and i'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
        //return <p>I'm a person! and i'm {Math.floor(Math.random() * 30)} years old.</p>
        )
}

export default person;