//Import dependencies & modules
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);

        this.goBackToLogin = this.goBackToLogin.bind(this);
    }

    //Route to login page
    goBackToLogin(event) {
        event.preventDefault();
        this.props.history.push(`/login`);
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/players" />;
        }

        return (
            <section aria-live="polite">
                <RegistrationForm />
                <button onClick={this.goBackToLogin}>Back to Login</button>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);