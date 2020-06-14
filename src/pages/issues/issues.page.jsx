import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarContainer from '../../components/navbar/navbar.component';
import Issues from '../../components/issues/issues.component';

import { queries } from '../../graphql/queries';

import { IssuesPageContainer } from './issues.styles';
import IssueDetailPage from '../issue-detail/issue-detail.page';

const IssuesPage = ({ match }) => {
    return (
        <ApolloConsumer>
            {
                client => {
                    const data = client.readQuery({
                        query: queries.GET_USER_DATA
                    });
                    return (
                        <IssuesPageContainer>
                            <NavbarContainer user={data.user} client={client} />
                            <Container>
                                <Row>
                                    <Col>
                                        <Route
                                            exact
                                            path={`${match.path}`}
                                        >
                                            <Issues token={data.accessToken} />
                                        </Route>
                                        <Route
                                            path={`${match.path}/:id`}
                                        >
                                            <IssueDetailPage token={data.accessToken} />
                                        </Route>
                                    </Col>
                                </Row>
                            </Container>
                        </IssuesPageContainer>
                    )
                }
            }
        </ApolloConsumer>
    )
};

export default withRouter(IssuesPage);