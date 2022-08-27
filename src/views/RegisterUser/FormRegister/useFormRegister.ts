import { useState } from "react";
import { auth } from "../../../Api/auth/Auth";
import { IUserRegister } from "../Register.interfaces";

export default (role: string) => {
  const [canHiddePass, setCanHiddePass] = useState<boolean>(true);

  const [form, setForm] = useState<IUserRegister>({
    username: "",
    email: "",
    password: "",
    role: role,
  });

  const handleRegister = () => {
    auth.register({
      username: form.username,
      password: form.password,
      email: form.email,
      role: form.role,
    });
  };

  return { handleRegister, form, setForm, canHiddePass, setCanHiddePass };
};
