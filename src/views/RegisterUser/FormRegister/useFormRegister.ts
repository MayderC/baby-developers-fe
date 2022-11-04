import { useState } from "react";
import { auth } from "../../../Api/auth/Auth";
import { IUserRegister } from "../Register.interfaces";

export default (role: string) => {
  const [canHiddePass, setCanHiddePass] = useState<boolean>(true);

  const [form, setForm] = useState<IUserRegister>({
    fullName: "",
    email: "",
    password: "",
    roles: [{
      name: role
    }],
  });

  const handleRegister = () => {
    auth.register({
      fullName: form.fullName,
      password: form.password,
      email: form.email,
      roles: form.roles,
    }).then(console.log);
  };

  return { handleRegister, form, setForm, canHiddePass, setCanHiddePass };
};
