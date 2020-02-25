import React from 'react';
import SearchBar from './SearchBar';
// import Output from './Output';
import axios from 'axios';

export default class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    updateText = ({ target }) => {
        this.setState({ searchTerm: target.value });
    }

    searchFunction = ( event ) => {
        event.preventDefault();
        axios
        .get(`http://www.omdbapi.com/?s=${this.state.searchTerm}&apikey=6f50ac46`)
        .then(response => {
            console.log(response.data);
        });
    }

    render() {
        return (
            <div>
                <SearchBar name='searchbar' value={this.state.searchTerm} handleChange={this.updateText} onSubmit={this.searchFunction} />
                {/* <Output /> */}
            </div>
        )
    }
}
