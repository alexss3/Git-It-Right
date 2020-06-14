import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from 'react-apollo';

import { queries } from '../../graphql/queries';

import IssueDetails from '../../components/issue-details/issue-details.component';

const IssueDetailPage = ({ token }) => {

    const poll = 10000;

    const { id } = useParams();

    return (
        <div>
            <Query 
                query={queries.GET_ISSUE_DETAIL} 
                variables={{
                    id
                }}
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
                    if (loading) return 'Loading...';
                    if (error) return error.message;
                    
                    const issue = data.node;
                    return (
                        <IssueDetails issue={issue} token={token} />
                    )
                }
            }
            </Query>
        </div>
    )
};

export default IssueDetailPage;