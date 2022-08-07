import { useState } from "react";
import { auth } from "../../../Api/auth/Auth";
import { IUserRegister } from "../Register.interfaces";

const [canHiddePass, setCanHiddePass] = useState<boolean>(true);

const [form, setForm] = useState<IUserRegister>({
  username: "",
  email: "",
  password: "",
});

const handleRegister = () => {
  auth.register({
    username: form.username,
    password: form.password,
    email: form.email,
    role: form.role,
  });
};

export { handleRegister, form, setForm, canHiddePass, setCanHiddePass };
