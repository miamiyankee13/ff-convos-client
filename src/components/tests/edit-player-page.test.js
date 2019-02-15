import React from 'react';
import { shallow } from 'enzyme';
import { EditPlayerPage } from '../edit-player-page';

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

describe('<EditPlayerPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        shallow(<EditPlayerPage dispatch={dispatch} />);
    });

    it('Dispatches fetchPlayers on mount', function() {
        const dispatch = jest.fn()
        shallow(<EditPlayerPage dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchPlayersAction);
    });
});