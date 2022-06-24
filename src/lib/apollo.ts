import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pvilhb2dkv01xt6tcr9a2c/master',
  cache: new InMemoryCache()
});