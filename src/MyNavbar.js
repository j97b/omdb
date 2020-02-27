import React from 'react';
import logo from './omdb.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

export default class MyNavbar extends React.Component {

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

    handleSubmit = (e) => {
        e.preventDefault();
        window.location = `/movies/${this.state.searchTerm}`;
    }

    viewDetails = (id) => {
        this.props.history.push(`/details/${id}`);
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">
                        <img className='logo' src={logo} alt='omdb' />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <SearchBar name='searchbar' value={this.state.searchTerm} handleChange={this.updateText} onSubmit={this.handleSubmit} />
                </Navbar>

            </div>
        )
    }
}