import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import IssuesPage from './pages/issues/issues.page';
import LoginPage from './pages/login/login.page';
import NotFoundPage from './pages/not-found/not-found.page';

// GraphQL / Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

import { typeDefs, resolvers } from './graphql/resolvers';
import { queries } from './graphql/queries';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  state = {
    client: null,
    loaded: false,
  };

  async componentDidMount() {
    const cache = new InMemoryCache();

    const httpLink = createHttpLink({
      uri: process.env.REACT_APP_GITHUB_API
    });

    const errorLink = onError(({ graphQLErrors, networkError}) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => 
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );

      if (networkError) console.error(`[Network error]: ${networkError}`);
    })

    const client = new ApolloClient({
      link: ApolloLink.from([errorLink, httpLink]),
      cache,
      typeDefs,
      resolvers
    });

    const data = {
      accessToken: '',
      user: ''
    };
    
    client.writeData({ data });
    
    client.onResetStore(() => {
      cache.writeData({ data });
    });

    try {
      await persistCache({
        cache,
        storage: window.sessionStorage,
      });
    } catch (error) {
      console.error('Error restoring Apollo cache', error);
    }

    this.setState({
      client,
      loaded: true,
    });
    
  }

  render() {

    const { client, loaded } = this.state;

    if (!loaded) {
      return <div>Loading...</div>;
    }

    return (
      <ApolloProvider client={client}>
        <Query query={queries.GET_USER_DATA}>
        {
          ({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error: ${error.message}`;
            
            return (
              <Switch>
                <Route path='/issues' render={() => 
                  data.accessToken ? (
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
            )
          }
        }
        </Query>
      </ApolloProvider>
    );
  } 
  
}

export default App;
