import * as Joi from "joi";

import { regexConstants } from "../constants";
import { EGenders } from "../types/user.types";

export class UserValidator {
  private static userName = Joi.string().min(3).max(20).trim();
  private static email = Joi.string()
    .regex(regexConstants.EMAIL)
    .lowercase()
    .trim();
  private static age = Joi.number().integer().disallow(0);
  private static password = Joi.string().regex(regexConstants.PASSWORD);
  private static gender = Joi.valid(...Object.values(EGenders));

  static createUser = Joi.object({
    name: this.userName.required(),
    email: this.email.required(),
    age: this.age.required(),
    password: this.password.required(),
    gender: this.gender.required(),
  });

  static updateUser = Joi.object({
    name: this.name,
    gender: this.gender,
  });
}
