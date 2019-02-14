import React from 'react';
import { shallow } from 'enzyme';
import { CreatePlayerForm } from '../create-player-form';

describe('<CreatePlayerForm />', function() {
    it('Renders without crashing', function() {
        shallow(<CreatePlayerForm />);
    });
});