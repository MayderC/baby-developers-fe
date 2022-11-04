interface IRoles {
  name: string
}
export interface IUserRegister {
  fullName: string;
  email: string;
  password: string;
  roles?: IRoles[];
}
