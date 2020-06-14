import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { mutations } from '../../graphql/queries';

import Comment from '../comment/comment.component';

import { IssueDetailContainer } from './issue-details.styles';


const IssueDetails = ({ issue, token, history }) => {

    const firstComment = {
        author: issue.author,
        publishedAt: issue.publishedAt,
        body: issue.bodyHTML
    };

    return (
        <IssueDetailContainer>
            <h1>Issue #{issue.number} - {issue.title}</h1>
            <Row>
                <Col sm={8} className="issue-info">
                    <span><strong>Repo: </strong>{issue.repository.nameWithOwner}</span>
                    <span><strong>Status: </strong>{issue.closed ? 'CLOSED' : 'OPEN'}</span>
                </Col>
                <Col sm={4} className="close-container">
                {
                    issue.closed ? (
                        <div>
                            <Mutation 
                                mutation={mutations.REOPEN_ISSUE} 
                                context={{
                                    headers: {
                                        authorization: `Bearer ${token}`
                                    }
                                }}
                                onCompleted={() => {
                                    history.push('/issues');
                                }}
                            >
                            {
                                reopenIssue => (
                                    <Button 
                                        variant="success" 
                                        onClick={() => reopenIssue({variables: {id: issue.id}})}
                                    >
                                    Reopen Issue
                                    </Button>
                                )
                            }
                            </Mutation>
                        </div>
                    ) : (
                        <div>
                            <Mutation 
                                mutation={mutations.CLOSE_ISSUE} 
                                context={{
                                    headers: {
                                        authorization: `Bearer ${token}`
                                    }
                                }}
                                onCompleted={() => {
                                    history.push('/issues');
                                }}
                            >
                            {
                                closeIssue => (
                                    <Button 
                                        variant="danger" 
                                        onClick={() => closeIssue({variables: {id: issue.id}})}
                                    >
                                    Close Issue
                                    </Button>
                                )
                            }
                            </Mutation>
                        </div>
                    )
                }
                    
                </Col>
            </Row>
            <Comment comment={firstComment}/>
            {
                issue.comments.edges.map(({ node }) => <Comment key={node.id} comment={node} />)
            }
        </IssueDetailContainer>
    )

}

export default withRouter(IssueDetails);