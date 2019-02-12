import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class CreatePlayerPage extends React.Component {
    render() {
        return (
            <section aria-live="polite">
                <h2>Create a Player</h2>
                <p>Create Player Form</p>
            </section>
        );
    }
}

export default requiresLogin()(connect()(CreatePlayerPage));