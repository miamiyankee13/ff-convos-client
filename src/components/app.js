import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './landing-page';
import LoginPage from './login-page';
import RegistrationPage from './registration-page';
import PlayersPage from './players-page';
import ConversationPage from './conversation-page';
import AddPlayerPage from './add-player-page';
import EditPlayerPage from './edit-player-page';
import NotFoundPage from './not-found-page';

export default class App extends React.Component {
    render() {
        return (
            <div className="flex-container">
                <h1>HEADER</h1>
                <div className="flex-bottom">
                    <main className="flex-main">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/register" component={RegistrationPage} />
                            <Route exact path="/players" component={PlayersPage} />
                            <Route exact path="/players/:id" component={ConversationPage} />
                            <Route exact path="/add" component={AddPlayerPage} />
                            <Route exact path="/edit" component={EditPlayerPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                    <footer className="flex-footer">
                        <p><small>Copyright &copy; 2019 Anthony D'Amico</small></p>
                    </footer>
                </div>
            </div>
        );
    }
}