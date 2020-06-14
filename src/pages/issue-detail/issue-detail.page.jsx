import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

import { queries } from '../../graphql/queries';

import IssueDetails from '../../components/issue-details/issue-details.component';

const IssueDetailPage = ({ match, token }) => {

    const poll = process.env.REACT_APP_POLL_INTERVAL;

    return (
        <div>
            <Query 
                query={queries.GET_ISSUE_DETAIL} 
                variables={{
                    id: match.params.id 
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
                    if (error) return `Error: ${error.message}`;
                    
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

export default withRouter(IssueDetailPage);