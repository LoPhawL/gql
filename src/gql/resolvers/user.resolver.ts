import UserModel, { IUser } from "../../models/user.model";

export const userResolvers = {
    Query: {
        user: async (parent: {}, args: { userId: string }, context: any, info: any) => {

            // skipped validations
            return await UserModel.findById(args.userId);
        }
    },
    Mutation: {
        registerUser: async (parent: {}, args: { registerUserInput: IUser }, context: any, info: any) => {
            
            // skipped validations

            const newUser = await (new UserModel(args.registerUserInput).save());
            
            return newUser;
        }
    }
};