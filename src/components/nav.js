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
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <ul className="flex-nav" aria-live="polite">
                <li className="nav-item"><Link to="/players">My Players</Link></li>
                <li className="nav-item"><Link to="/create">Create Player</Link></li>
                <li className="nav-item"><Link to="/edit">Edit Player</Link></li>
                <li className="nav-item"><Link to="/" onClick={this.logOut}>Log Out</Link></li>
            </ul>
        );
    }
}

export default connect()(Nav);