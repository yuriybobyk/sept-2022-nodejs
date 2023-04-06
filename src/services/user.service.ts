import { ApiError } from "../errors";
import { User } from "../models";
import { IUser } from "../types";

interface IPaginationResponse<T> {
  page: number;
  parPage: number;
  itemsCount: number;
  data: T[];
}

class UserService {
  public async getAll(): Promise<IUser[]> {
    try {
      return User.find();
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async getWithPagination(
    query: any
  ): Promise<IPaginationResponse<IUser>> {
    try {
      const data = await User.find(query);

      return {
        page: 1,
        itemsCount: 1,
        parPage: 1,
        // @ts-ignore
        data,
      };
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async getById(id: string): Promise<IUser> {
    try {
      return User.findById(id);
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const userService = new UserService();
