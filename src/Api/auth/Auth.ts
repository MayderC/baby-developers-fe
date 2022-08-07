import { IUserRegister } from "./../../views/RegisterUser/Register.interfaces";
import { http } from "./../axios/index";
import { IUserLogin } from "./../../components/login/Login";
class Auth {
  private _path;

  constructor() {
    this._path = "/auth";
  }

  async register(request: IUserRegister) {
    const user = { user: request };
    return http.post(this._path + "/register", user);
  }

  async login(request: IUserLogin) {
    const user = { user: request };
    return http.post(this._path + "/login", user);
  }
}

export const auth = new Auth();
