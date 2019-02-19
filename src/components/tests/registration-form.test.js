//Import dependencies & modules
import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationForm} from '../registration-form';

describe('<RegistrationForm />', function() {
    it('Renders without crashing', function() {
        const handleSubmit = jest.fn();
        shallow(<RegistrationForm handleSubmit={handleSubmit} />);
    });
});