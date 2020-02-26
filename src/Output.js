import React from 'react';

export default function Output(props) {
    return (
        <fieldset>
            <p><strong>Title:</strong> {props.title}</p>
            <p><strong>Release Year:</strong> {props.year}</p>
            <p><strong>Type:</strong> {props.type}</p>
        </fieldset>
    )
}