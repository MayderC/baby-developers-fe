import { IRoles } from "../../common/Interfaces/IRoles.interface";

export interface IUserRegister {
  fullName: string;
  email: string;
  password: string;
  roles?: IRoles[];
}
