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
                <li className="nav-item">
                    <Link 
                        to="/players" 
                        onClick={this.scrollTop} 
                        className="fas fa-users fa-2x" 
                        title="My Players">
                        <span className="sr-only">My Players</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/create" 
                        onClick={this.scrollTop}
                        className="fas fa-plus-circle fa-2x"
                        title="Create Player">
                        <span className="sr-only">Create Player</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/edit" 
                        onClick={this.scrollTop}
                        className="fas fa-edit fa-2x"
                        title="Edit Player">
                        <span className="sr-only">Edit Player</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/" 
                        onClick={this.logOut}
                        className="fas fa-sign-out-alt fa-2x">
                        <span className="sr-only">Log Out</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default connect()(Nav);