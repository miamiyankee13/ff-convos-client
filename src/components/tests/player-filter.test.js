import React from 'react';
import { shallow } from 'enzyme';
import { PlayerFilter } from '../player-filter';

describe('<PlayerFilter />', function() {
    it('Renders without crashing', function() {
        shallow(<PlayerFilter />);
    });
});