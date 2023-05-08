import Login from "../../components/login/Login";
import BabyButton from "../../components/BabyButton/BabyButton";
import { useNavigate } from "react-router-dom";

function Landing() {
  let navigate = useNavigate();

  return (
    <main className="overflow-hidden min-h-screen relative">
      <div className="h-[600px] pt-5 flex relative z-10 flex-wrap  sm:flex-col lg:flex-row  items-center justify-evenly">
        <div className="min-w-[320px] flex justify-center">
          <Login></Login>
        </div>
        <div className="min-w-[300px] p-10">
          <h2 className="text-white text-4xl font-poppins font-bold">
            JR Developers
          </h2>
          <p className="mt-5 text-rosadito text-xl font-poppins">
            Here you can find amazing jr developers or positions for this
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
      <div className="circulito absolute z-0 right-[-100px] bottom-[-100px] rounded-full"></div>
      <div className="circulito absolute z-0 left-[-100px] top-[-100px] rounded-full"></div>
      <svg
        className="absolute hidden z-0 top-[-130px] left-[-100px]"
        height="400"
        width="400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 30 250 100"
      >
        <path
          className="absolute"
          fill="#FF0066"
          d="M38.1,-31.3C51.5,-24.7,66,-12.3,66.1,0.1C66.2,12.6,51.9,25.1,38.5,35.2C25.1,45.3,12.6,52.9,-1.8,54.7C-16.2,56.5,-32.4,52.6,-48.3,42.5C-64.1,32.4,-79.6,16.2,-75,4.6C-70.3,-7,-45.6,-14,-29.8,-20.6C-14,-27.3,-7,-33.6,2.7,-36.2C12.3,-38.9,24.7,-38,38.1,-31.3Z"
          transform="translate(130 70)"
        />
      </svg>
    </main>
  );
}

export default Landing;
