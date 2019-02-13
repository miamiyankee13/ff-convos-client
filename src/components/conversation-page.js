import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import LoadingPage from './loading-page';
import { fetchCurrentPlayer, clearCurrentPlayer, addCommentToPlayer, removeCommentFromPlayer} from '../actions/players';

export class ConversationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchCurrentPlayer(this.props.match.params.id))
    }

    componentWillUnmount() {
        this.props.dispatch(clearCurrentPlayer());
    }

    handleChange(event) {
        this.setState({
            textValue: event.target.value
        });
    }

    addComment(event) {
        event.preventDefault();
        const player = this.props.player;
        const content = this.state.textValue;
        const author = this.props.currentUser;
        if (content === '' || content === ' ') {
            alert('Comment is blank. Please add some content')
            return
        }
        this.props.dispatch(addCommentToPlayer(player._id, content, author))
            .then(() => this.props.dispatch(fetchCurrentPlayer(player._id)));
        this.setState({
            textValue: ''
        });
    }

    removeComment(event) {
        event.preventDefault();
        const player = this.props.player;
        const index = event.target.getAttribute('data-index');
        const comment = this.props.player.comments[index];
        this.props.dispatch(removeCommentFromPlayer(player._id, comment._id))
            .then(() => this.props.dispatch(fetchCurrentPlayer(player._id)));
    }
    
    render() {
        //If loading, return loading page
        if (this.props.loading) {
            return <LoadingPage />
        }

        //If error, return error
        if (this.props.error) {
            return <p className="error">{this.props.error}</p>
        }
        //If no player, return null
        if (!this.props.player) {
            return null;
        }

        //Create JSX for comments
        const comments = this.props.player.comments.map((comment, index) => {
            let removeButton;
            if (this.props.currentUser === comment.author) {
                removeButton = <button data-index={index} onClick={this.removeComment}>Remove</button>;
            } else {
                removeButton = '';
            }

            let date = new Date(comment.created);
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let time = date.toLocaleTimeString();

            return (
                <div key={`comment-${index}`}>
                    <br />
                    <p className="comment-content"><em>{comment.content}</em></p>
                    <p><small>Posted by {comment.author}</small></p>
                    <p><small>{month}/{day} @ {time}</small></p>
                    {removeButton}
                </div>
            );
        });

        return (
            <section className="flex-convo" aria-live="polite">
                <h2>{this.props.player.name}</h2>
                <p>{this.props.player.position} {this.props.player.number} | {this.props.player.team}</p>
                <div>
                    <h4>Player Conversation</h4>
                    {comments}
                    <br />
                    <label htmlFor="add-comment">Add Comment</label>
                    <textarea
                    id="add-comment"
                    name="add-comment"
                    rows="4"
                    cols="30"
                    value={this.state.textValue}
                    onChange={this.handleChange}
                    >
                    </textarea>
                    <button onClick={this.addComment}>Add Comment</button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.playersData.loading,
    error: state.playersData.error,
    player: state.playersData.currentPlayer,
    currentUser: state.auth.currentUser.username
});

export default requiresLogin()(connect(mapStateToProps)(ConversationPage));