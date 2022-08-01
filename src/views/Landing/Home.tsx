import Login from "../../components/login/Login";
import BabyButton from './../../components/BabyButton/BabyButton';

function HomePage() {
  return ( 
    <main className="bg-purple-dark h-screen">
      <div className="h-3/4 flex items-center justify-evenly">
        <Login></Login>
        <div className="w-1/4">
          <h2 className="text-white text-4xl font-poppins font-bold">JR Developers</h2>
          <p className="mt-5 text-rosadito text-xl font-poppins">Here you can find amazing jr developers
            or positions for this seniority
          </p> 
          <div className="w-36 mt-5">
            <BabyButton text={"register"} onClick={(e)=>{console.log(e)}}></BabyButton>
          </div>
        </div>
      </div>
    </main>
   );
}

export default HomePage;