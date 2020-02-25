import React from 'react';

export default function SearchBar(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type='text' value={props.value} onChange={props.handleChange} name={props.name} />
            <input type='submit' value='search' />
        </form>
    )
}