import { Router } from "express";
import { Validation } from "../middleware/validations/global.validation";
import { UserController } from "../resources/user/user.controller";

const userRouter = Router();

const userController = new UserController()

userRouter.post('/', 
  new Validation().validName,
  new Validation().validEmail, 
  userController.create
);

export default userRouter;