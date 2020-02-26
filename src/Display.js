import React from 'react';
import SearchBar from './SearchBar';
import Output from './Output';
import axios from 'axios';

export default class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            data: []
        }
    }

    updateText = ({ target }) => {
        this.setState({ searchTerm: target.value });
    }

    searchFunction = (event) => {
        event.preventDefault();
        axios
            .get(`http://www.omdbapi.com/?s=${this.state.searchTerm}&apikey=6f50ac46`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    data: response.data.Search,
                });
            });

    };


    render() {
        const outputs = this.state.data.map(film =>
            <Output title={film.Title} year={film.Year} type={film.Type} poster={film.Poster} />)

        return (
            <div>
                <header>
                    <SearchBar name='searchbar' value={this.state.searchTerm} handleChange={this.updateText} onSubmit={this.searchFunction} />
                </header>
                <main>
                    {outputs}
                </main>
            </div>
        )
    }
}
