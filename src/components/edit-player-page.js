import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class EditPlayerPage extends React.Component {
    render() {
        return (
            <section aria-live="polite">
                <h2>Edit a Player</h2>
                <p>Edit Player Form</p>
            </section>
        );
    }
}

export default requiresLogin()(connect()(EditPlayerPage));