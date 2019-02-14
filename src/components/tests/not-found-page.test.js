import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../not-found-page';

describe('<NotFoundPage />', function() {
    it('Renders without crashing', function() {
        shallow(<NotFoundPage />);
    });
});