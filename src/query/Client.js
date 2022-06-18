import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

export const Client = new ApolloClient({
  uri: 'https://api.devcdc.com/cricket',
  cache: new InMemoryCache(),
});
