//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { PlayerOptions } from '../player-options';

describe('<PlayerOptions />', function() {
    it('Renders without crashing', function() {
        const players = ['Dan Marino', 'Ricky Williams'];
        shallow(<PlayerOptions players={players} />);
    });
});