import { Router } from "express";

import { userController } from "../controllers";
import { authMiddleWare, userMiddleWare } from "../middlewares";

const router = Router();

router.get("/", userController.getAll);

router.get(
  "/:userId",
  authMiddleWare.checkAccessToken,
  userMiddleWare.isIdValid,
  userMiddleWare.getByIdAndThrow,
  userController.getById
);

router.post("/", userMiddleWare.isCreatedValid, userController.create);

router.put(
  "/:userId",
  authMiddleWare.checkAccessToken,
  userMiddleWare.isIdValid,
  userMiddleWare.isUpdatedValid,
  userMiddleWare.getByIdAndThrow,
  userController.update
);
router.delete(
  "/:userId",
  authMiddleWare.checkAccessToken,
  userMiddleWare.isIdValid,
  userMiddleWare.getByIdAndThrow,
  userController.deleteById
);

export const userRouter = router;
