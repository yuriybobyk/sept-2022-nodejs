import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { userMiddleWare } from "../middlewares/user.middleware";

const router = Router();

router.post(
  "/register",
  userMiddleWare.isCreatedValid,
  userMiddleWare.getDynamicallyAndThrow("email"),
  authController.register
);
router.post(
  "/login",
  userMiddleWare.isLoginValid,
  userMiddleWare.getDynamicallyOrThrow("email"),
  authController.login
);
router.post("/login");

export const authRouter = router;
