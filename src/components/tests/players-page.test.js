import React from 'react';
import { shallow } from 'enzyme';
import { PlayersPage } from '../players-page';

describe('<PlayersPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        const userPlayers = [
            { name: 'Dan Marino' },
            { name: 'Ricky Williams' }
        ];
        shallow(<PlayersPage userPlayers={userPlayers} dispatch={dispatch} />);
    });
});