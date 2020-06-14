import React from 'react';
import { MockedProvider } from "@apollo/react-testing";
import { create, act } from 'react-test-renderer';

import { queries } from '../../graphql/queries';
import Issues from './issues.component';


const mocks = [
    {
      request: {
        query: queries.GET_USER_ISSUES
      },
      result: {
        data: {
            viewer: {
                openIssues: {
                    totalCount: 10,
                    edges: {
                        node: {  
                            id: '1',
                            title: 'Issue Test',
                            bodyHTML: '<p>Test</p>',
                            closed: false,
                            number: 123,
                            createdAt: Date.now().toString(),
                            author: {
                                login: 'username'
                            },
                            repository: {
                                nameWithOwner: 'owner/repo',
                                url: 'github.com'
                            }
                        }
                    }
                },                    
                closedIssues: {
                    totalCount: 0,
                    edges: {
                        
                    }
                }
            }
        }
    }
}];

act(() => {
    describe('Test Issues component', () => {

        it('should render the issues component with client property', () => {

            let component;
            
            act(() => {
                component = create(
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <Issues />
                    </MockedProvider>
                );
            });

            const tree = component.toTree();
            expect(component).toBeDefined();
            expect(tree.rendered.props).toHaveProperty('client');
        });
    });
});

