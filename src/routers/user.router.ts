import { Router } from "express";

import { userController } from "../controllers";
import {
  authMiddleWare,
  commonMiddleware,
  userMiddleWare,
} from "../middlewares";
import { UserValidator } from "../validators";

const router = Router();

router.get("/", userController.getAll);

router.get(
  "/:userId",
  authMiddleWare.checkAccessToken,
  commonMiddleware.isIdValid("userId"),
  userMiddleWare.getByIdAndThrow,
  userController.getById
);

router.post("/", commonMiddleware.isBodyValid, userController.create);

router.put(
  "/:userId",
  authMiddleWare.checkAccessToken,
  commonMiddleware.isIdValid("userId"),
  commonMiddleware.isBodyValid(UserValidator.updateUser),
  userMiddleWare.getByIdAndThrow,
  userController.update
);
router.delete(
  "/:userId",
  authMiddleWare.checkAccessToken,
  commonMiddleware.isIdValid("userId"),
  userMiddleWare.getByIdAndThrow,
  userController.deleteById
);

export const userRouter = router;
