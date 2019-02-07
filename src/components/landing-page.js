import React from 'react';

export default class LandingPage extends React.Component {
    render() {
        return (
            <section className="home" aria-live="polite">
                <p>
                    FF Convos allows you to keep track of fantasy football players through conversations.
                </p>
                <p>
                    Fantasy football has steadily grown into somewhat of a phenomenon. In our opinion, it is
                    not slowing down any time soon. These days, the amount of resources that provide information
                    on fantasy football can be overwhelming. Aside from analytics, we believe that the most 
                    useful pieces of information out there are thought-provoking conversations. Our goal at FF 
                    Convos is to provide a simple platform where these conversations can take place!
                </p>
            </section>
        );
    }
}