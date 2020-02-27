import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default function Output(props) {
    return (
        <Card className='card'>
            <Card.Img onClick={props.viewDetails} class='poster' variant='top' src={props.Poster} alt='NOPE' />
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item className='list'>
                        <strong>Title: </strong> {props.Title}
                    </ListGroup.Item>
                    <ListGroup.Item className='list'>
                        <strong>Year: </strong> {props.Year}
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}