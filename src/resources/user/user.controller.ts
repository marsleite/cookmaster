import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {

  async create(req: Request, res: Response) {
    const newUser = await new UserService().create(req.body);
    return res.json(newUser);
  }
}