import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleWare } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.getAll);

router.get(
  "/:userId",
  userMiddleWare.isUserIdValid,
  userMiddleWare.getByIdAndThrow,
  userController.getById
);

router.post("/", userMiddleWare.isCreatedUserValid, userController.create);

router.put(
  "/:userId",
  userMiddleWare.isUserIdValid,
  userMiddleWare.isUpdatedUserValid,
  userMiddleWare.getByIdAndThrow,
  userController.update
);
router.delete(
  "/:userId",
  userMiddleWare.isUserIdValid,
  userMiddleWare.getByIdAndThrow,
  userController.deleteById
);

export const userRouter = router;
