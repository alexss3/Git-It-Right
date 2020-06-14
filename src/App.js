import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import IssuesPage from './pages/issues/issues.page';
import LoginPage from './pages/login/login.page';
import NotFoundPage from './pages/not-found/not-found.page';


import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/issues' render={() => 
          false ? (
            <IssuesPage />
          ) : (
            <LoginPage />
          )
        } />
        <Route exact path='/'>
          <Redirect to='/issues' />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
