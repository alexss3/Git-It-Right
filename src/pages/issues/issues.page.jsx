import React from 'react';
import { withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavbarContainer from '../../components/navbar/navbar.component';

import { queries } from '../../graphql/queries';

import { IssuesPageContainer } from './issues.styles';

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
                                        <h1>You have some issues</h1>
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