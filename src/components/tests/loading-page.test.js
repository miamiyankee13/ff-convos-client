import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../loading-page';

describe('<LoadingPage />', function() {
    it('Renders without crashing', function() {
        shallow(<LoadingPage />);
    });
});