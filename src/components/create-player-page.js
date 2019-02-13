import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import CreatePlayerForm from './create-player-form';
import LoadingPage from './loading-page';

export class CreatePlayerPage extends React.Component {
    render() {
        //If loading, return loading page
        if (this.props.loading) {
            return <LoadingPage />
        }
        
        let message;
        if (this.props.feedback) {
            switch(this.props.feedback.success) {
                case true:
                    message = <p className="success">{this.props.feedback.message}</p>;
                    break;
                case false:
                    message = <p className="error">{this.props.feedback.message}</p>;
                    break;
                default:
                    message = '';
            }
        }
        
        return (
            <section aria-live="polite">
                <h2>Create a Player</h2>
                {message}
                <CreatePlayerForm />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    feedback: state.playersData.feedback
});

export default requiresLogin()(connect(mapStateToProps)(CreatePlayerPage));