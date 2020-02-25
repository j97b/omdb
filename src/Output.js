import React from 'react';

export default function Output(props) {
    return (
        <fieldset>
            <h3>Title: {props.title}</h3>
            <h3>Release Year: {props.year}</h3>
            <h3>Cast: {props.actors}</h3>
            <h3>Rated: {props.rated}</h3>
            <h3>Score: {props.metascore}</h3>
            <h3>Plot: {props.plot}</h3>
        </fieldset>
    )
}