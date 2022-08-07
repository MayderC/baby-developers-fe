import { useNavigate } from "react-router-dom";
import BabyButton from "../../../components/BabyButton/BabyButton";
import back from "./../../../assets/img/back.png";
import { IT_RECRUITER, JR_DEVELOPER } from "./../../../common/constants/index";

interface IProps {
  setRole: Function;
}

export const SelectProfile = ({ setRole }: IProps) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col relative items-center">
        <div className="flex items-center flex-col">
          <h1 className="text-white font-semibold text-4xl">Hello</h1>
          <p className="text-rosadito font-semibold text-xl mt-3">
            Select your profile
          </p>
        </div>
        <div className="profile h-[300px] flex  flex-col w-72 max-w-[320px] justify-evenly">
          <BabyButton
            bg="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            textColor="text-white"
            hover="hover:bg-rosadito"
            text="IT Recruiter"
            onClick={() => setRole(IT_RECRUITER)}
          ></BabyButton>

          <BabyButton
            bg="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            textColor="text-white"
            hover="hover:bg-rosadito"
            text="JR Developer"
            onClick={() => setRole(JR_DEVELOPER)}
          ></BabyButton>
        </div>

        <div
          className="w-10 cursor-pointer absolute top-[-33px] left-[-49px]"
          onClick={() => navigate("/")}
        >
          <img className="" src={back} alt="" />
        </div>
      </div>
    </>
  );
};
