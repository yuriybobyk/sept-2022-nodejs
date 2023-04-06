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
