import { Router } from "express";

import { authController } from "../controllers";
import { authMiddleWare, userMiddleWare } from "../middlewares";

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
router.post(
  "/refresh",
  authMiddleWare.checkRefreshToken,
  authController.refresh
);

export const authRouter = router;
