export const groupsSchema = `

    type Group {
        name: String!
        createdBy: User
        members: [User]
    }

    input CreateGroupInput {
        name: String!
        createdBy: String!
        members: [String!]
    }

    type Mutation {
        createGroup(createGroupInput: CreateGroupInput!): Group
    }

    type Query {
        groups(ids: [ID!]!): [Group]
    }
`;