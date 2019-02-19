//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { PlayerDropdown } from '../player-dropdown';

describe('<PlayerDropdown />', function() {
    it('Renders without crashing', function() {
        shallow(<PlayerDropdown />);
    });
});