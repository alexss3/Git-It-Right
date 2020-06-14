import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './login.page';

describe('<LoginPage />', () => {

    it('should render the LoginPage', () => {
        const wrapper = shallow(<LoginPage />);          
        expect(wrapper.length).toEqual(1);
    });
});
