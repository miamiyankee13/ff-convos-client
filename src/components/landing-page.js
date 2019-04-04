//Import dependencies & modules
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import './styles/landing-page.css';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.goToLogin = this.goToLogin.bind(this);
    }

    //Google analytics tracking
    componentDidMount() {
        ReactGA.pageview('/landing-page');
    }

    //Route to login page
    goToLogin(event) {
        event.preventDefault();
        this.props.history.push(`/login`);
    }

    render() {
        //If logged in, route to players page
        if (this.props.loggedIn) {
            return <Redirect to="/players" />;
        }

        return (
            <section className="home" aria-live="polite">
                <p>
                    FF Convos allows you to keep track of fantasy football players through conversations.
                </p>
                <br />
                <p>
                    Fantasy football has steadily grown into somewhat of a phenomenon. In our opinion, it is
                    not slowing down any time soon. These days, the amount of resources that provide information
                    on fantasy football can be overwhelming. 
                </p>
                <br />
                <p>
                    Aside from analytics, we believe that the most 
                    useful pieces of information out there are thought-provoking conversations. Our goal at FF 
                    Convos is to provide a simple platform where these conversations can take place!
                </p>
                <br />
                <button onClick={this.goToLogin}>Go to Login</button>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);