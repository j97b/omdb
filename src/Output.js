import React from 'react';

export default function Output(props) {
    return (
        <fieldset>
            <img src={props.Poster} alt='NOPE'/>
            <p><strong>Title:</strong> {props.Title}</p>
            <p><strong>Release Year:</strong> {props.Year}</p>
            <button onClick={props.viewDetails}>view</button>
        </fieldset>
    )
}