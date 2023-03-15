"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get("/", controllers_1.userController.getAll);
router.get(
  "/:userId",
  middlewares_1.authMiddleWare.checkAccessToken,
  middlewares_1.userMiddleWare.isIdValid,
  middlewares_1.userMiddleWare.getByIdAndThrow,
  controllers_1.userController.getById
);
router.post(
  "/",
  middlewares_1.userMiddleWare.isCreatedValid,
  controllers_1.userController.create
);
router.put(
  "/:userId",
  middlewares_1.authMiddleWare.checkAccessToken,
  middlewares_1.userMiddleWare.isIdValid,
  middlewares_1.userMiddleWare.isUpdatedValid,
  middlewares_1.userMiddleWare.getByIdAndThrow,
  controllers_1.userController.update
);
router.delete(
  "/:userId",
  middlewares_1.authMiddleWare.checkAccessToken,
  middlewares_1.userMiddleWare.isIdValid,
  middlewares_1.userMiddleWare.getByIdAndThrow,
  controllers_1.userController.deleteById
);
exports.userRouter = router;
