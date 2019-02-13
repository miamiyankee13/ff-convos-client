import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchPlayers } from '../actions/players';

export class EditPlayerPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPlayers())
    }
    
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