import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchPlayers } from '../actions/players';

export class PlayersPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPlayers());
    }
    
    render() {
        return (
            <section aria-live="polite">
                <p>Players Tracked: 0</p>
                <p>Player Dropdown</p>
                <div className="flex-players">
                    <div className="player">
                        <p>Drew Brees</p>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.playersData.loading,
        players: state.playersData.players
    }
}

export default requiresLogin()(connect(mapStateToProps)(PlayersPage));