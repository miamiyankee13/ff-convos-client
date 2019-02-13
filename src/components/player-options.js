import React from 'react';
import { connect } from 'react-redux'

export class PlayerOptions extends React.Component {
    render() {
        //Create JSX options for players
        const playerOptions = this.props.players.map((player, index) => {
            return <option key={`player-${index}`} value={index}>{player.name}</option>
        });

        return playerOptions
    }
}

const mapStateToProps = state => ({
    players: state.playersData.players
});

export default connect(mapStateToProps)(PlayerOptions);