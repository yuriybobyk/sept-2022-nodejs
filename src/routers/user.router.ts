import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleWare } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.getAll);

router.get("/:userId", userMiddleWare.getByIdAndThrow, userController.getById);

router.post("/", userController.create);

router.put("/:userId", userController.update);
router.delete("/:userId", userController.deleteById);

export const userRouter = router;
