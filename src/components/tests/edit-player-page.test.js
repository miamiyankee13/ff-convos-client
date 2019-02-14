import React from 'react';
import { shallow } from 'enzyme';
import { EditPlayerPage } from '../edit-player-page';

describe('<EditPlayerPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        shallow(<EditPlayerPage dispatch={dispatch} />);
    });
});