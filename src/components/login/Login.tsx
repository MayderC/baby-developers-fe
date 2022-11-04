import { useState } from "react";
import BabyButton from "../BabyButton/BabyButton";
import { auth } from "./../../Api/auth/Auth";

export interface IUserLogin {
  email: string;
  password: string;
}

function Login() {
  const [canHiddePass, setCanHiddePass] = useState<boolean>(false);
  const [user, setUser] = useState<IUserLogin>({
    password: "",
    email: "",
  });

  const handleLogin = (user: IUserLogin) => {
    auth.login(user);
  };

  return (
    <form className="bg-white shadow-2xl rounded-card p-6 pt-2">
      <h2 className="text-center text-rosa font-bold text-2xl">Login</h2>
      <div className="md:flex md:items-center mb-6 mt-5">
        <input
          name="username"
          className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two"
          id="inline-full-name"
          type="text"
          autoFocus
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      <div className="md:flex md:items-center mb-6">
        <input
          name="password"
          className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two"
          id="inline-password"
          type={canHiddePass ? "text" : "password"}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="******************"
        />
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            name="canHidePass"
            className="mr-2 leading-tight"
            type="checkbox"
            onChange={(e) => setCanHiddePass(e.target.checked)}
          />
          <span className="text-sm text-purple-dark hover:cursor-pointer select-none">
            show password
          </span>
        </label>
      </div>
      <div className="">
        <BabyButton
          text="Login"
          bg="btn-rosa"
          hover="hover:btn-asor"
          onClick={(e) => handleLogin(user)}
        ></BabyButton>
      </div>
    </form>
  );
}

export default Login;
