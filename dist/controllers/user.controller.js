"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const models_1 = require("../models");
const services_1 = require("../services");
class UserController {
  async getAll(req, res, next) {
    try {
      const users = await services_1.userService.getAll();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
  async getById(req, res, next) {
    try {
      const { userId } = req.params;
      const user = await services_1.userService.getById(userId);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
  async create(req, res, next) {
    try {
      const body = req.body;
      const user = await models_1.User.create({ ...body });
      return res.status(201).json({
        message: "User created!",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }
  async update(req, res, next) {
    try {
      const { userId } = req.params;
      const user = req.body;
      const updatedUser = await models_1.User.updateOne({ _id: userId }, user);
      return res.status(201).json({
        message: "User updated",
        data: updatedUser,
      });
    } catch (e) {
      next(e);
    }
  }
  async deleteById(req, res, next) {
    try {
      const { userId } = req.params;
      await models_1.User.deleteOne({ _id: userId });
      return res.status(204).json({
        message: "User deleted",
      });
    } catch (e) {
      next(e);
    }
  }
}
exports.userController = new UserController();
