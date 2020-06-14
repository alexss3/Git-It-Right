import styled from 'styled-components';

import Navbar from 'react-bootstrap/Navbar';

export const StyledNavbar = styled(Navbar)`
    background-color: #CCC;
    color: #000;

    span.username {
        margin-right: 1em;
        font-style: italic;
        font-weight: bold;
    }
`;