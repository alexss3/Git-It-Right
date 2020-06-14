import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import Issue from '../issue/issue.component';

import { IssueListContainer } from './issue-list.styles';

const IssueList = ({ issues }) => {
    return (
        <IssueListContainer>
            <ListGroup.Item>
                <span className="counts">{issues.viewer.openIssues.totalCount} Open</span>
                <span className="counts">{issues.viewer.closedIssues.totalCount} Closed</span>
            </ListGroup.Item>
            {
                issues.viewer.openIssues.edges.map(issue => {
                    return (
                        <Issue key={issue.node.id} issue={issue} />
                    )
                })
            }
        </IssueListContainer>
    )
};

export default IssueList;