//Import dependencies & modules
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './styles/nav.css';

export class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
    }

    //Clear authentication
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    //Scroll content to top
    scrollTop() {
        document.getElementsByClassName('flex-bottom')[0].scrollTop=0;
    }

    render() {
        return (
            <ul className="flex-nav" aria-live="polite">
                <li className="nav-item"><Link to="/players" onClick={this.scrollTop}>My Players</Link></li>
                <li className="nav-item"><Link to="/create" onClick={this.scrollTop}>Create Player</Link></li>
                <li className="nav-item"><Link to="/edit" onClick={this.scrollTop}>Edit Player</Link></li>
                <li className="nav-item"><Link to="/" onClick={this.logOut}>Log Out</Link></li>
            </ul>
        );
    }
}

export default connect()(Nav);