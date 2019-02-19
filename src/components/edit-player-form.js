import React from 'react';
import { connect } from 'react-redux';
import { editPlayer } from '../actions/players';
import PlayerOptions from './player-options';

export class EditPlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerValue: '',
            nameValue: '',
            positionValue: '',
            numberValue: '',
            teamValue: ''
        };

        this.handlePlayerChange = this.handlePlayerChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayerChange(event) {
        this.setState({
            playerValue: event.target.value
        });
    }

    handleNameChange(event) {
        this.setState({
            nameValue: event.target.value
        });
    }

    handlePositionChange(event) {
        this.setState({
            positionValue: event.target.value
        });
    }

    handleNumberChange(event) {
        this.setState({
            numberValue: event.target.value
        })
    }

    handleTeamChange(event) {
        this.setState({
            teamValue: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const index = this.state.playerValue;
        const player = this.props.players[index];
        const name = this.state.nameValue;
        const position = this.state.positionValue;
        const number = this.state.numberValue.toString();
        const team = this.state.teamValue;
        this.props.dispatch(editPlayer(player._id, name, position, number, team));
    }

    render() {
        return (
            <form className="edit-player-form" onSubmit={this.handleSubmit}>
            <label htmlFor="player-edit">Player to Edit</label>
            <select 
                id="player-edit" 
                name="player-edit" 
                value={this.state.playerValue} 
                onChange={this.handlePlayerChange} 
                required
            >
                <option value="">--Select Player--</option>
                <PlayerOptions />
            </select>
            
            <label htmlFor="name-edit">Name</label>
                <input 
                    type="text" 
                    id="name-edit" 
                    name="name-edit" 
                    value={this.state.nameValue}
                    onChange={this.handleNameChange}
                    required
                />

                <label htmlFor="position-edit">Position</label>
                <select 
                    id="position-edit" 
                    name="position-edit"
                    value={this.state.positionValue}
                    onChange={this.handlePositionChange} 
                    required
                >
                    <option value="">--Select Position--</option>
                    <option value="QB">QB</option>
                    <option value="RB">RB</option>
                    <option value="WR">WR</option>
                    <option value="TE">TE</option>
                </select>

                <label htmlFor="number-edit">Number</label>
                <input 
                    type="number" 
                    id="number-edit" 
                    name="number-edit" 
                    value={this.state.numberValue}
                    onChange={this.handleNumberChange}
                    required
                />

                <label htmlFor="team-edit">Team</label>
                <input 
                    type="text" 
                    id="team-edit" 
                    name="team-edit" 
                    value={this.state.teamValue}
                    onChange={this.handleTeamChange}
                    required
                />
                <br />
                <button type="submit">Edit Player</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    players: state.playersData.players
});

export default connect(mapStateToProps)(EditPlayerForm);