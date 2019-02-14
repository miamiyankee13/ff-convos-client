import React from 'react';
import { shallow } from 'enzyme';
import { ConversationPage } from '../conversation-page';

describe('<ConversationPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        const mockData = {
            params: {
                id: '1221414'
            }
        }
        shallow(<ConversationPage match={mockData} dispatch={dispatch} />);
    });
});