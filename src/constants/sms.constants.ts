import { ESmsActionsEnum } from "../enums";

export const smsTemplates: { [key: string]: string } = {
  [ESmsActionsEnum.WELCOME]: "Hi, welcome to our world",
  [ESmsActionsEnum.FPRGOT_PASSWORD]: "Follow the guide to update your password",
};
