import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.goToRegistration = this.goToRegistration.bind(this);
    }

    goToRegistration(event) {
        event.preventDefault();
        this.props.history.push(`/register`);
    }
    
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/players" />;
        }
        
        return (
            <section aria-live="polite">
                <p>Login Form</p>
                <button onClick={this.goToRegistration}>Register</button>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);