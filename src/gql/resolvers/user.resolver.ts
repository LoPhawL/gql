import UserModel, { IUser } from "../../models/user.model";

export const userResolvers = {
    Query: {
        users: async (parent: {}, { ids }: { ids: string[] }, context: any, info: any) => {

            // skipped validations
            return await UserModel.find({ _id: ids });
        }
    },
    Mutation: {
        registerUser: async (parent: {}, args: { registerUserInput: IUser }, context: any, info: any) => {
            
            // skipped validations
            return await (new UserModel(args.registerUserInput).save());
        }
    }
};