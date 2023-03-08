export enum EGenders {
  male = "male",
  female = "female",
  mixed = "mixed",
}

export interface IUser {
  email: string;
  name: string;
  gender: string;
  password: string;
}

export interface ICommonResponse<T> {
  message: string;
  data: T;
}
