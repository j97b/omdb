import React from 'react';

export default function Output(props) {
    return (
        <fieldset>
            <p><strong>Title:</strong> {props.title}</p>
            <p><strong>Release Year:</strong> {props.year}</p>
            <p><strong>Cast:</strong> {props.cast}</p>
            <p><strong>Genre:</strong> {props.genre}</p>
            <p><strong>Rated:</strong> {props.rated}</p>
            <p><strong>Score:</strong> {props.metascore}</p>
            <p><strong>Plot:</strong> {props.plot}</p>
        </fieldset>
    )
}