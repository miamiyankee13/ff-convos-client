import React from 'react';

export default class PlayersPage extends React.Component {
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