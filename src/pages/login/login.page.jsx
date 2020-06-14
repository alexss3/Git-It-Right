import React from 'react';

import Button from 'react-bootstrap/Button';

import { LoginPageContainer } from './login.styles';

const LoginPage = () => {
   
    return (
        <LoginPageContainer>
            <div className="login">
                <h1>Git It Right</h1>
                <blockquote>Track your Github Issues!</blockquote>
                <div>
                    <Button variant="info">Login</Button>
                </div>
            </div>
        </LoginPageContainer>
    )
}

export default LoginPage;