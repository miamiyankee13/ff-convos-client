//Import dependencies & modules
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './header';
import LandingPage from './landing-page';
import LoginPage from './login-page';
import RegistrationPage from './registration-page';
import PlayersPage from './players-page';
import ConversationPage from './conversation-page';
import CreatePlayerPage from './create-player-page';
import EditPlayerPage from './edit-player-page';
import NotFoundPage from './not-found-page';
import { refreshAuthToken } from '../actions/auth';
import ReactGA from 'react-ga';
import './styles/app.css';

export class App extends React.Component {

    //Initialize google analytics tracking
    componentDidMount() {
        ReactGA.initialize('UA-137740948-1');
    }
    
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    //Stop periodic refresh
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    //Refresh auth token periodically
    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    //Clear auth token refresh
    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }
    
    render() {
        return (
            <div className="flex-container">
                <Header />
                <div className="flex-bottom">
                    <main className="flex-main">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/register" component={RegistrationPage} />
                            <Route exact path="/players" component={PlayersPage} />
                            <Route exact path="/players/:id([0-9a-fA-F]{24})" component={ConversationPage} />
                            <Route exact path="/create" component={CreatePlayerPage} />
                            <Route exact path="/edit" component={EditPlayerPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                    <footer className="flex-footer">
                        <p><strong><small>Copyright &copy; 2019 Anthony D'Amico</small></strong></p>
                        <small><a href="https://github.com/miamiyankee13/ff-convos-client">View on GitHub</a></small>
                    </footer>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));