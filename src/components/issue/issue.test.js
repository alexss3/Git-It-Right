import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Issue from './issue.component';

describe('<Issue />', () => {

    const issue = {
        node: {
            id: '1234',
            number: '1',
            createdAt: '1970-01-01 00:00:00',
            repository: {
                url: 'github.com',
                nameWithOwner: 'owner/repo'
            },
            author: {
                login: 'user'
            }
        }
    }

    it('should render an Issue', () => {
    
        const wrapper = shallow(
            <MemoryRouter>
                <Issue issue={issue} />
            </MemoryRouter>
        );
            
    
        expect(wrapper.length).toEqual(1);
    });
});
