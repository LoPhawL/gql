export const userSchema = `

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }

    input RegisterUserInput {
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
        registerUser(registerUserInput: RegisterUserInput): User
    }
`;
