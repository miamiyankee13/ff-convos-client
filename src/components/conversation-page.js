import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class ConversationPage extends React.Component {
    render() {
        return (
            <section className="flex-convo" aria-live="polite">
                <p>Drew Brees</p>
                <p>QB #9</p>
                <p>Saints</p>
                <p>Conversation</p>
                <p>Conversation Form</p>
            </section>
        );
    }
}

export default requiresLogin()(connect()(ConversationPage));