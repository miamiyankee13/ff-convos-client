//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { EditPlayerForm } from '../edit-player-form';

describe('<EditPlayerForm />', function() {
    it('Renders without crashing', function() {
        shallow(<EditPlayerForm />);
    });
});