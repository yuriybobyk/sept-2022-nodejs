import { EEmailActions } from "../enums";

export const allTemplates = {
  [EEmailActions.WELCOME]: {
    subject: "Hi, welcome to our world",
    templateName: "register",
  },
  [EEmailActions.FORGOT_PASSWORD]: {
    subject: "Follow the guide to update your password",
    templateName: "forgotPassword",
  },
  [EEmailActions.ACTIVATE]: {
    subject: "Activate!",
    templateName: "activate",
  },
};
