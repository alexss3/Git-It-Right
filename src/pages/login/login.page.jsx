import React from 'react';
import { Mutation } from 'react-apollo';

import { mutations } from '../../graphql/queries';
import authScopes from '../../utils/auth-scopes';

import Button from 'react-bootstrap/Button';

import { LoginPageContainer } from './login.styles';

const LoginPage = () => {

    return (
        <LoginPageContainer>
            <div className="login">
                <h1>Git It Right</h1>
                <blockquote>Track your Github Issues!</blockquote>
                <div>
                    <Mutation mutation={mutations.LOGIN_USER}>
                    {
                        setAccessToken => (
                            <Button 
                                variant="info" 
                                onClick={() => setAccessToken({
                                    variables: {
                                        scopes: authScopes
                                    }
                                })}
                            >
                            Login with Github
                            </Button>
                        )
                    }
                    </Mutation>
                </div>
            </div>
        </LoginPageContainer>
    )
}

export default LoginPage;