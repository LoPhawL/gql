import { ApolloServer } from "@apollo/server";

const indexQueries = `
  type Query {
    """
    To check if the graphql server is running as expected. A successful response means that the express server is also running and healthy as graphql server is behind express.
    """
    knockKnock: String!
  }
`;

const indexResolvers = {
    Query: {
        knockKnock: () => 'Who is it at ' + new Date().toISOString() + '?',
    },
};

export const aplServer = new ApolloServer({
    typeDefs: [indexQueries],
    resolvers: [indexResolvers]
});
