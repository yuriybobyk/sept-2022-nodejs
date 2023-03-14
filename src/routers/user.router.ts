import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleWare } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.getAll);

router.get(
  "/:userId",
  userMiddleWare.isIdValid,
  userMiddleWare.getByIdAndThrow,
  userController.getById
);

router.post("/", userMiddleWare.isCreatedValid, userController.create);

router.put(
  "/:userId",
  userMiddleWare.isIdValid,
  userMiddleWare.isUpdatedValid,
  userMiddleWare.getByIdAndThrow,
  userController.update
);
router.delete(
  "/:userId",
  userMiddleWare.isIdValid,
  userMiddleWare.getByIdAndThrow,
  userController.deleteById
);

export const userRouter = router;
