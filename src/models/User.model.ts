import { Model, model, Schema } from "mongoose";

import { EGenders, EUserStatus } from "../enums";
import { IUser } from "../types";

const userSchema = new Schema(
  {
    name: {
      type: String,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      enum: EGenders,
    },
    status: {
      type: String,
      enum: EUserStatus,
      default: EUserStatus.inactive,
    },
    age: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

interface IUserMathods {
  nameWithAge(): void;
}

interface IUserModel extends Model<IUser, object, IUserMathods> {
  findByName(name: string): Promise<IUser[]>;
}

userSchema.methods = {
  nameWithAge() {
    console.log("hello");
  },
};

userSchema.statics = {
  async findByName(name: string): Promise<IUser[]> {
    return this.find({ name });
  },
};

export const User = model<IUser, IUserModel>("user", userSchema);
