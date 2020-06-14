import React from 'react';
import { shallow, render } from 'enzyme';

import NotFoundPage from './not-found.page';

describe('<NotFoundPage />', () => {

    it('should render the NotFoundPage and contain "404 - Page not found"', () => {
        const wrapper = render(<NotFoundPage />);
        expect(wrapper.text()).toContain('404 - Page not found');
    });
});
