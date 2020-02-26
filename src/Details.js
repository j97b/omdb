import React from 'react';
import axios from 'axios';

export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.history.location.pathname.slice(9),
            data: []
        }
    }

    componentDidMount = (event) => {
        axios
        .get(`http://www.omdbapi.com/?i=${this.state.id}&apikey=6f50ac46`)
        .then(response => {
            console.log(response.data);
            this.setState({ 
                data: response.data
            });
        });
    }

    render() {
        return (
            <div>
                <img src={this.state.data.Poster} alt='NOPE' />
                <p><strong>Title: </strong>{this.state.data.Title}</p>
                <p><strong>Release Date: </strong>{this.state.data.Released}</p>
                <p><strong>Cast: </strong>{this.state.data.Actors}</p>
                <p><strong>Genre: </strong>{this.state.data.Genre}</p>
                <p><strong>Runtime: </strong>{this.state.data.Runtime}</p>
                <p><strong>Rated: </strong>{this.state.data.Rated}</p>
                <p><strong>Metascore: </strong>{this.state.data.Metascore}</p>
                <p><strong>Plot: </strong>{this.state.data.Plot}</p>
            </div>
        )
    }
}