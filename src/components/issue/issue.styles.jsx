import styled from 'styled-components';

import ListGroup from 'react-bootstrap/ListGroup';

export const IssueContainer = styled(ListGroup.Item)`

    .title {
        font-size: 1.25em;
        margin-bottom: 0.25em;

        a.repo {
            padding-right: 10px;
        }

        span.issue-link {
            cursor: pointer;
        }
    }

    .opened-details {
        font-size: 0.75em;
        color: #555;
        display: block;
    }
`;