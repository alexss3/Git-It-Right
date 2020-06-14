import React from 'react';
import { Query } from 'react-apollo';

import IssueList from '../issue-list/issue-list.component';
import { IssuesContainer } from './issues.styles';

import { queries } from '../../graphql/queries';


const Issues = ({ token }) => {

    const poll = 10000;

    return (
        <IssuesContainer>
            <h1>Open Issues</h1> 
            <Query 
                query={queries.GET_USER_ISSUES} 
                context={{
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }}
                pollInterval={poll}
                fetchPolicy="network-only"
            >
            {
                ({loading, error, data}) => {
                    if(loading) return 'Loading...';
                    if(error) return error.message;

                    return (
                        <IssueList issues={data} />
                    )
                }
            }
            </Query>
        </IssuesContainer>
    )
}

export default Issues;