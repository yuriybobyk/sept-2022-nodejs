import { EEmailActions } from "../enums/email.actions.enum";

export const allTemplates = {
  [EEmailActions.WELCOME]: {
    subject: "Hi, welcome to our world",
    templateName: "register",
  },
  [EEmailActions.FPRGOT_PASSWORD]: {
    subject: "Follow the guide to update your password",
    templateName: "forgotPassword",
  },
};
