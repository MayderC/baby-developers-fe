import { IUserRegister } from "./../../views/RegisterUser/Register.interfaces";
import { http } from "./../axios/index";
import { IUserLogin } from "./../../components/login/Login";
import { AxiosResponse } from "axios";
import { LoginResponse } from "../../components/login/LoginInterfaces";
class Auth {
  private _path;

  constructor() {
    this._path = "/auth";
  }

  async register(request: IUserRegister) {
    try {
      const user = { user: request };
      return http.post(this._path + "/register", user);
    } catch (error) {
      console.clear();
      return { isAutehnticated: false, token: "", refreshToken: "" };
    }
  }

  async login(request: IUserLogin): Promise<LoginResponse> {
    try {
      return (
        await http.post<IUserLogin, AxiosResponse<LoginResponse>>(
          this._path + "/login",
          { user: request }
        )
      ).data;
    } catch (error) {
      console.clear();
      throw new Error("Invalid credentials");
    }
  }
}

export const auth = new Auth();
