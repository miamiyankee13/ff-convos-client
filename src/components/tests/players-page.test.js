//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { PlayersPage } from '../players-page';

// Mock the async fetchPlayers & fetchUserPlayers actions
const mockFetchPlayersAction = {
    type: 'FETCH_PLAYERS'
};

const mockFetchUserPlayersAction = {
    type: 'FETCH_USER_PLAYERS'
}

jest.mock('../../actions/players', () => Object.assign({},
    require.requireActual('../../actions/players'),
    {
        fetchPlayers: jest.fn().mockImplementation(() => {
            return mockFetchPlayersAction;
        }),
        fetchUserPlayers: jest.fn().mockImplementation(() => {
            return mockFetchUserPlayersAction;
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

    it('Dispatches fetchPlayers & fetchUserPlayers on mount', function() {
        const dispatch = jest.fn()
        const userPlayers = [
            { name: 'Dan Marino' },
            { name: 'Ricky Williams' }
        ];
        shallow(<PlayersPage userPlayers={userPlayers} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchPlayersAction);
        expect(dispatch).toHaveBeenCalledWith(mockFetchUserPlayersAction);
    });
});