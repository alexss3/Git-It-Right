import React from 'react';
import { Mutation } from 'react-apollo';
import { Link, useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { mutations } from '../../graphql/queries';

import { StyledNavbar } from './navbar.styles';

const NavbarContainer = ({ user, client }) => {

    let history = useHistory();

    return (
        <React.Fragment>
            <StyledNavbar>
                <Navbar.Brand>
                <img
                    alt=""
                    src="/git-it-right-logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                    Git It Right
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to={'/issues'}>Issues</Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Logged in as <span className="username">{user}</span>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Mutation 
                            mutation={mutations.LOGOUT_USER}
                            onCompleted={() => {
                                client.clearStore()
                                    .then(() => {
                                        client.resetStore();
                                        history.push('/');
                                    });
                            }}
                        >
                        {
                            signOut => (
                                <Button 
                                    onClick={() => signOut()} 
                                    variant="info"
                                >
                                Logout
                                </Button>
                            )
                        }
                        </Mutation>
                    </Navbar.Text>
                </Navbar.Collapse>
            </StyledNavbar>
        </React.Fragment>
    )
}

export default NavbarContainer;