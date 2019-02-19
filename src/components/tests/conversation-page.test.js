//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { ConversationPage } from '../conversation-page';

// Mock the async fetchCurrentPlayer action
const mockFetchCurrentPlayerAction = {
    type: 'FETCH_CURRENT_PLAYER'
};
jest.mock('../../actions/players', () => Object.assign({},
    require.requireActual('../../actions/players'),
    {
        fetchCurrentPlayer: jest.fn().mockImplementation(() => {
            return mockFetchCurrentPlayerAction;
        })
    }
));

describe('<ConversationPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn();
        const mockData = {
            params: {
                id: '1221414'
            }
        }
        shallow(<ConversationPage match={mockData} dispatch={dispatch} />);
    });

    it('Dispatches fetchCurrentPlayer on mount', function() {
        const dispatch = jest.fn();
        const mockData = {
            params: {
                id: '1221414'
            }
        }
        shallow(<ConversationPage match={mockData} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchCurrentPlayerAction);
    });
});