//Import dependencies & modules
import React from 'react';
import { connect } from 'react-redux';
import { createPlayer } from '../actions/players';

export class CreatePlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            positionValue: '',
            numberValue: '',
            teamValue: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Track value of name
    handleNameChange(event) {
        this.setState({
            nameValue: event.target.value
        });
    }

    //Track value of position
    handlePositionChange(event) {
        this.setState({
            positionValue: event.target.value
        });
    }

    //Track value of number
    handleNumberChange(event) {
        this.setState({
            numberValue: event.target.value
        })
    }

    //Track value of team
    handleTeamChange(event) {
        this.setState({
            teamValue: event.target.value
        });
    }

    //Create player
    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.nameValue;
        const position = this.state.positionValue;
        const number = this.state.numberValue
        const team = this.state.teamValue;
        this.props.dispatch(createPlayer(name, position, number, team));
    }

    render() {
        return (
            <form className="create-player-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.nameValue}
                    onChange={this.handleNameChange}
                    required
                />

                <label htmlFor="position">Position</label>
                <select 
                    id="position" 
                    name="position"
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

                <label htmlFor="number">Number</label>
                <input 
                    type="number" 
                    id="number" 
                    name="number" 
                    value={this.state.numberValue}
                    onChange={this.handleNumberChange}
                    required
                    min="0"
                />

                <label htmlFor="team">Team</label>
                <input 
                    type="text" 
                    id="team" 
                    name="team" 
                    value={this.state.teamValue}
                    onChange={this.handleTeamChange}
                    required
                />
                <br />
                <button type="submit">Create Player</button>
            </form>
        );
    }
}

export default connect()(CreatePlayerForm);