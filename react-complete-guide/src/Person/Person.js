import React from 'react';
const person = (props) => {
    return (
        <div>
            <p>I'm name is {props.name} and i'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
        //return <p>I'm a person! and i'm {Math.floor(Math.random() * 30)} years old.</p>
        )
}

export default person;