import { GroupModel, IGroup } from "../../models/group.model";
import UserModel from "../../models/user.model";

export const groupsResolvers = {

    Group: {
        createdBy: async (parent: IGroup, args: any, context: any, info: any) => {

            return await UserModel.findById(parent.createdBy);
        }
    },
    Query: {
        groups: async (parent: {}, { ids }: { ids: string[] }, context: any, info: any) => {

            return await GroupModel.find({ _id: ids });
        },
    },

    Mutation: {
        createGroup: async (parent: {}, { createGroupInput }: { createGroupInput: IGroup }, context: any, info: any) => {
            
            // skipped validations
            return await new GroupModel(createGroupInput).save();
        },
    }
}