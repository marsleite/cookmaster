import { Iuser } from "./dtos/user.dtos";

export class UserService {

  async create(user: Iuser) {
    return user;
  }
}