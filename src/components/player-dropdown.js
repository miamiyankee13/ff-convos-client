import React from 'react';
import { connect } from 'react-redux';
import { addPlayerToUser, fetchUserPlayers } from '../actions/players';
import PlayerOptions from './player-options';

export class PlayerDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionValue: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.trackPlayer = this.trackPlayer.bind(this);
    }

    handleChange(event) {
        this.setState({
            optionValue: event.target.value
        });
    }

    trackPlayer(event) {
        event.preventDefault();
        const index = this.state.optionValue;
        const player = this.props.players[index];
        const playerExists = this.props.userPlayers.find(element => element._id === player._id);
        if (playerExists) {
            alert('You are already tracking this player');
            return
        }
        this.props.dispatch(addPlayerToUser(player._id))
            .then(() => this.props.dispatch(fetchUserPlayers()));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.trackPlayer}>
                    <label htmlFor="player-select">Track Player</label>
                    <select id="player-select" name="player-select" onChange={this.handleChange}>
                    <option value="">--Select a Player--</option>
                    <PlayerOptions />
                    </select>
                    <button type="submit">Track Player</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    players: state.playersData.players,
    userPlayers: state.playersData.userPlayers
})

export default connect(mapStateToProps)(PlayerDropdown);