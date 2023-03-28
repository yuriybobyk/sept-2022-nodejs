import * as Joi from "joi";

import { regexConstants } from "../constants";
import { EGenders } from "../enums";

export class UserValidator {
  private static userName = Joi.string().min(3).max(20).trim();
  private static email = Joi.string()
    .regex(regexConstants.EMAIL)
    .lowercase()
    .trim();
  private static age = Joi.number().integer().disallow(0);
  private static password = Joi.string().regex(regexConstants.PASSWORD);
  private static gender = Joi.valid(...Object.values(EGenders));
  private static phone = Joi.string().regex(regexConstants.PHONE);

  static createUser = Joi.object({
    name: this.userName.required(),
    email: this.email.required(),
    age: this.age.required(),
    password: this.password.required(),
    gender: this.gender.required(),
    phone: this.phone.required(),
  });

  static updateUser = Joi.object({
    name: this.userName,
    gender: this.gender,
    age: this.age,
  });

  static loginUser = Joi.object({
    email: this.email.required(),
    password: this.password.required(),
  });

  static emailValidator = Joi.object({
    email: this.email.required(),
  });

  static changeUserPassword = Joi.object({
    oldPassword: this.password.required(),
    newPassword: this.password.required(),
  });
}
