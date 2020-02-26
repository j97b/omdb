import React from 'react';

export default class Details extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.poster} />
                <p><strong>Title: </strong>{this.props.title}</p>
                <p><strong>Release Date: </strong>{this.props.releaseDate}</p>
                <p><strong>Cast: </strong>{this.props.cast}</p>
                <p><strong>Genre: </strong>{this.props.genre}</p>
                <p><strong>Runtime: </strong>{this.props.runtime}</p>
                <p><strong>Rated: </strong>{this.props.rated}</p>
                <p><strong>Metascore: </strong>{this.props.metascore}</p>
                <p><strong>Plot: </strong>{this.props.plot}</p>
            </div>
        )
    }
}