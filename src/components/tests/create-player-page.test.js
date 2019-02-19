//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { CreatePlayerPage } from '../create-player-page';

describe('<CreatePlayerPage />', function() {
    it('Renders without crashing', function() {
        shallow(<CreatePlayerPage />);
    });
});