import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { IssueContainer } from './issue.styles';

const Issue = ({ issue }) => {

    const { path } = useRouteMatch();
    let history = useHistory();

    return (
        <IssueContainer>
            <span className="title">
                <a 
                    href={issue.node.repository.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="repo"
                >
                {issue.node.repository.nameWithOwner}
                </a> 
                <span 
                    onClick={() => history.push(`${path}/${issue.node.id}`)} 
                    className="issue-link"
                >
                {issue.node.title}
                </span>
            </span>
            <span className="opened-details">#{issue.node.number} opened on {issue.node.createdAt} by {issue.node.author.login}</span>
        </IssueContainer>
    )
}

export default Issue;