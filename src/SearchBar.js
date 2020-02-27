import React from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';

export default function SearchBar(props) {
    return (
        <Form inline onSubmit={props.onSubmit}>
            <FormControl className='searchbar' required placeholder='Search for movies, films, motion pictures etc' type='text' value={props.value} onChange={props.handleChange} name={props.name} />
            <Button type='submit'>Search</Button>
        </Form>
    )
}