import React from 'react';
import { shallow } from 'enzyme';
import { PlayersPage } from '../players-page';

// Mock the async fetchPlayers action
const mockFetchPlayersAction = {
    type: 'FETCH_PLAYERS'
};
jest.mock('../../actions/players', () => Object.assign({},
    require.requireActual('../../actions/players'),
    {
        fetchPlayers: jest.fn().mockImplementation(() => {
            return mockFetchPlayersAction;
        })
    }
));

describe('<PlayersPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        const userPlayers = [
            { name: 'Dan Marino' },
            { name: 'Ricky Williams' }
        ];
        shallow(<PlayersPage userPlayers={userPlayers} dispatch={dispatch} />);
    });

    it('Dispatches fetchPlayers on mount', function() {
        const dispatch = jest.fn()
        const userPlayers = [
            { name: 'Dan Marino' },
            { name: 'Ricky Williams' }
        ];
        shallow(<PlayersPage userPlayers={userPlayers} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchPlayersAction);
    });
});