
import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import SearchButton from './components/SearchButton'; // Assuming you have a SearchButton component
import GridExample from './components/GridExample';
import Guides from './components/Guides';
import Header from './components/Header';
import SearchResults from './components/SearchResults'; // Import the SearchResults component

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  
  return (
    <ApolloProvider client={ client }>
      <div>
        <Header />

        <Navbar>
        </Navbar>
        <Guides />
      </div>
    </ApolloProvider>
  );
};

export default App;
