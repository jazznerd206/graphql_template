import { ApolloServer } from 'apollo-server-lambda';
import { gql } from 'apollo-server-lambda';

// import { resolvers } from './resolvers';
// import { typeDefs } from './type-defs';


const resolvers = {
    Query: {
      testMessage: () => 'Hello World!',
    },
  };
const typeDefs = gql`
  type Query {
    """
    A test message.
    """
    testMessage: String!
  }
`;


const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const graphqlHandler = apolloServer.createHandler();