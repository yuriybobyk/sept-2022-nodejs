import { Model } from "mongoose";

export interface IUser {
  _id?: string;
  email: string;
  name: string;
  gender: string;
  password: string;
  age: number;
  phone?: string;
}

// export interface ICommonResponse<T> {
//   message: string;
//   data: T;
// }

export interface IUserMathods {
  nameWithAge(): void;
}

export interface IUserVirtuals {
  nameWithSurname: string;
}

export interface IUserModel
  extends Model<IUser, object, IUserMathods, IUserVirtuals> {
  findByName(name: string): Promise<IUser[]>;
}
