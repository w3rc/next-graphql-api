import { gql, ApolloServer } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "hello";
        }
    }
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const handler = apolloServer.createHandler({
    path: "/api/graphql"
});

export const config = {
    api: {
        bodyParser: false
    }
};

export default handler;