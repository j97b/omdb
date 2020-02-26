import React from 'react';

export default function Output(props) {
    return (
        <fieldset>
            <img src={props.poster} alt='NOPE'/>
            <p><strong>Title:</strong> {props.title}</p>
            <p><strong>Release Year:</strong> {props.year}</p>
            <button>view</button>
        </fieldset>
    )
}