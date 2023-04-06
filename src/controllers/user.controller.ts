import { NextFunction, Request, Response } from "express";

import { User } from "../models";
import { userService } from "../services";
import { ICommonResponse, IUser } from "../types";

class UserController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.getWithPagination(req.query);

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { userId } = req.params;
      const user = await userService.getById(userId);

      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ICommonResponse<IUser>>> {
    try {
      const body = req.body;
      const user = await User.create({ ...body });

      return res.status(201).json({
        message: "User created!",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ICommonResponse<IUser>>> {
    try {
      const { userId } = req.params;
      const user = req.body;

      const updatedUser = await User.updateOne({ _id: userId }, user);

      return res.status(201).json({
        message: "User updated",
        data: updatedUser,
      });
    } catch (e) {
      next(e);
    }
  }
  public async deleteById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { userId } = req.params;

      await User.deleteOne({ _id: userId });

      return res.status(204).json({
        message: "User deleted",
      });
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
