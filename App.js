import {View, Text} from 'react-native';
import React from 'react';
import Index from './src/GraphQL';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import {Client} from './src/query/Client';
const App = () => {
  return (
    <ApolloProvider client={Client}>
      <Index />
    </ApolloProvider>
  );
};

export default App;
