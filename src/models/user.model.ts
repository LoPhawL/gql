import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the User interface extending Mongoose's Document
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
}

// Define the User schema
const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => {
          // Simple regex for validating email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

UserSchema.index({ email: 1 }, { unique: true });

// Create a Mongoose model
const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
