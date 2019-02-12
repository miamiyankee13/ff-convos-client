import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';

export class Header extends React.Component {
    render() {
        
        let navigation;
        if (this.props.loggedIn) {
            navigation = (
                <nav>
                    <Nav />
                </nav>
            );
        } else {
            navigation = ''
        }

        return (
            <header role="banner" className="flex-top">
                <h1>FF Convos</h1>
                {navigation}
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);