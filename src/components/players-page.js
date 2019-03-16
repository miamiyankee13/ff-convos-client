//Import dependencies & modules
import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import LoadingPage from './loading-page'
import PlayerDropdown from './player-dropdown';
import PlayerFilter from './player-filter';
import { fetchPlayers, fetchUserPlayers, removePlayerFromUser } from '../actions/players';
import './styles/players-page.css';

export class PlayersPage extends React.Component {
    constructor(props) {
        super(props);

        this.untrackPlayer = this.untrackPlayer.bind(this);
        this.viewConvo = this.viewConvo.bind(this);
    }
    
    //Fetch players & fetch user players
    componentDidMount() {
        this.props.dispatch(fetchPlayers());
        this.props.dispatch(fetchUserPlayers());
        document.getElementsByClassName('flex-top')[0].scrollTop=0;
    }

    //Untrack player & fetch user players
    untrackPlayer(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const player = this.props.userPlayers[index];
        this.props.dispatch(removePlayerFromUser(player._id))
            .then(() => this.props.dispatch(fetchUserPlayers()));
    }

    //Route to conversation page
    viewConvo(event) {
        event.preventDefault();
        const index = event.target.getAttribute('data-index');
        const player = this.props.userPlayers[index];
        this.props.history.push(`/players/${player._id}`);
    }
    
    render() {
        //If loading, return loading page
        if (this.props.loading) {
            return <LoadingPage />
        }

        //Sort user players alphabetically
        this.props.userPlayers.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        //Create JSX for user players
        const userPlayers = this.props.userPlayers.map((player, index) => {
            return (
                <div key={`player-${index}`} className="player">
                    <h2 className="player-name">{player.name}</h2>
                    <p className="player-info">{player.position} #{player.number} | {player.team}</p>
                    <button data-index={index} onClick={this.viewConvo}>Conversation</button>
                    <button data-index={index} onClick={this.untrackPlayer}>Untrack</button>
                </div>
            )
        });

        //Return component
        return (
            <section aria-live="polite">
                <div className="flex-forms">
                    <PlayerDropdown />
                    <PlayerFilter />
                </div>
                <br />
                <h3>Players Tracked: {userPlayers.length}</h3>
                <div className="flex-players">
                    {userPlayers}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.playersData.loading,
    userPlayers: state.playersData.userPlayers 
});

export default requiresLogin()(connect(mapStateToProps)(PlayersPage));