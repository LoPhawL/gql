import { ApolloServer } from "@apollo/server";
import { userSchema } from "./schema/user.schema";
import { userResolvers } from "./resolvers/user.resolver";
import { groupsSchema } from "./schema/groups.schema";
import { groupsResolvers } from "./resolvers/groups.resolver";

const indexSchema = `
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

const typeDefs = [
    indexSchema,
    userSchema,
    groupsSchema
];

const resolvers = [
    indexResolvers,
    userResolvers,
    groupsResolvers
];

export const aplServer = new ApolloServer({
    typeDefs,
    resolvers
});
