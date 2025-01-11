export const userSchema = `

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }

    input RegisterUserInput {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }

    type Query {

        """
        Returns the user details for the input userid. Returns null if the user doesn't exist.
        """
        user(userId: ID!): User
    }
    
    type Mutation {
        registerUser(userInput: RegisterUserInput): User
    }
`;

export const userResolvers = {
    Query: {
        user: (parent: {}, args: { userId: string }, context: any, info: any) => {
            console.log(args);
            
            return null;
        }
    },
    Mutation: {
        registerUser: (parent: {}, args: { userId: string }, context: any, info: any) => {
            console.log(args);
            
            return null;
        }
    }
};