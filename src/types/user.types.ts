export enum EGenders {
  male = "male",
  female = "female",
  mixed = "mixed",
}

export interface IUser {
  _id?: string;
  email: string;
  name: string;
  gender: string;
  password: string;
}

// export interface ICommonResponse<T> {
//   message: string;
//   data: T;
// }
