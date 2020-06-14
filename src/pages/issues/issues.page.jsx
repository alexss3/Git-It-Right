import React from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { IssuesPageContainer } from './issues.styles';

const IssuesPage = ({ match }) => {
    return (
        <IssuesPageContainer>
            <Container>
                <Row>
                    <Col>
                        <h1>You have some issues</h1>
                    </Col>
                </Row>
            </Container>
        </IssuesPageContainer>
    )
};

export default withRouter(IssuesPage);