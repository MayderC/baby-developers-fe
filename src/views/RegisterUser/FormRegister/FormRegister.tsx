import { useState } from "react";
import BabyButton from "../../../components/BabyButton/BabyButton";
import { IUserRegister } from "./../Register.interfaces";
import back from "./../../../assets/img/back.png";
import { IT_RECRUITER } from "./../../../common/constants/index";
import { auth } from "../../../Api/auth/Auth";

interface IProps {
  setRole: Function;
  role?: string;
}

export const FormRegister = ({ setRole, role }: IProps) => {
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

  return (
    <>
      <div className="form-register">
        <h2 className="text-white text-center font-semibold">
          {role == IT_RECRUITER ? "Recruiter" : "Developer"}
        </h2>
        <form className="bg-white relative shadow-2xl rounded-card p-6 mt-6">
          <div className="md:flex md:items-center mb-6">
            <input
              name="username"
              className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two"
              id="inline-full-name"
              type="text"
              autoFocus
              placeholder="Username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="md:flex md:items-center mb-6">
            <input
              name="email"
              className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two"
              id="inline-full-name"
              type="text"
              autoFocus
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="md:flex md:items-center mb-6">
            <input
              name="password"
              className="bg-white appearance-none border-3 border-purple-500 rounded-card w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-two"
              id="inline-password"
              type={canHiddePass ? "text" : "password"}
              placeholder="******************"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
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
              text="Register"
              bg="btn-rosa"
              onClick={(e) => handleRegister()}
            ></BabyButton>
          </div>

          <div
            className="w-10 cursor-pointer absolute top-[-80px] left-[-60px]"
            onClick={() => setRole("")}
          >
            <img className="" src={back} alt="" />
          </div>
        </form>
      </div>
    </>
  );
};
