import React from 'react';
import SearchBar from './SearchBar';
import Output from './Output';
import axios from 'axios';

export default class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            data: '',
            outOf100: ''
        }
    }

    updateText = ({ target }) => {
        this.setState({ searchTerm: target.value });
    }

    searchFunction = ( event ) => {
        event.preventDefault();
        axios
        .get(`http://www.omdbapi.com/?t=${this.state.searchTerm}&apikey=6f50ac46`)
        .then(response => {
            console.log(response.data);
            this.setState({ 
                data: response.data,
                outOf100: '/100'
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar name='searchbar' value={this.state.searchTerm} handleChange={this.updateText} onSubmit={this.searchFunction} />
                <Output title={this.state.data.Title} year={this.state.data.Year} cast={this.state.data.Actors}
                genre={this.state.data.Genre} rated={this.state.data.Rated} metascore={this.state.data.Metascore} outOf100={this.state.outOf100} plot={this.state.data.Plot}/> 
            </div>
        )
    }
}
