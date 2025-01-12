import mongoose, { Document, Schema, Model } from "mongoose";

// 1. Define the Group interface (TypeScript type for a group document)
export interface IGroup extends Document {
  name: string;
  description?: string;
  members: mongoose.Types.ObjectId[]; // References to User IDs
  createdBy: mongoose.Types.ObjectId; // References to User IDs
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create the schema
const GroupSchema: Schema<IGroup> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Group name is required"],
      trim: true,
      maxlength: [100, "Group name cannot exceed 100 characters"],
      unique: true
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
    ],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true
    }
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// 3. Create the model
export const GroupModel: Model<IGroup> = mongoose.model<IGroup>("Group", GroupSchema);
