import React from 'react';

export default function SearchBar(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input required type='text' value={props.value} onChange={props.handleChange} name={props.name} />
            <input type='submit' value='search' />
        </form>
    )
}