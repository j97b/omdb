import React from 'react';
import Output from './Output';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    componentDidMount = () => {
        axios
            .get(`http://www.omdbapi.com/?s=${this.props.match.params.query}&apikey=6f50ac46`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    data: response.data.Search
                });
            });

    };

    viewDetails = (id) => {
        this.props.history.push(`/details/${id}`);
    }


    render() {
        const outputs = this.state.data.map(film =>
            <Output {...film} viewDetails={() => this.viewDetails(film.imdbID)}/>)

        return (
            <div className='flex-container'>
                {outputs}
            </div>
        )
    }
}
