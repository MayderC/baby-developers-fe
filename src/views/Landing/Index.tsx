import Login from "../../components/login/Login";
import BabyButton from "../../components/BabyButton/BabyButton";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  let navigate = useNavigate();

  return (
    <main className="overflow-hidden min-h-screen relative">
      <div className="h-[600px] pt-5 flex relative z-10 flex-wrap  sm:flex-col lg:flex-row  items-center justify-evenly">
        <div className="min-w-[320px] flex justify-center">
          <Login></Login>
        </div>
        <div className="min-w-[300px] p-10">
          <h2 className="text-white text-4xl font-poppins font-bold">
            Jr profiles
          </h2>
          <p className="mt-5 text-rosadito text-xl font-poppins">
            Here you can find amazing jr profiles or positions for this
            seniority
          </p>
          <div className="w-36 mt-5">
            <BabyButton
              bg="btn-rosa"
              text={"Register"}
              onClick={(e) => {
                navigate("/register");
              }}
            ></BabyButton>
          </div>
        </div>
      </div>
      <div className="circulito absolute z-0 rounded-full"></div>
    </main>
  );
}

export default IndexPage;
