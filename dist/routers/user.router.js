"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.getAll);
router.get(
  "/:userId",
  user_middleware_1.userMiddleWare.getByIdAndThrow,
  user_controller_1.userController.getById
);
router.post(
  "/",
  user_middleware_1.userMiddleWare.isCreatedUserValid,
  user_controller_1.userController.create
);
router.put("/:userId", user_controller_1.userController.update);
router.delete("/:userId", user_controller_1.userController.deleteById);
exports.userRouter = router;
