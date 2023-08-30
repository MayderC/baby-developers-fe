import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen h-full">
        <div className="w-56 p-3">SLIDE</div>
        <section className="bg-white  w-full min-h-screen">
          <Outlet></Outlet>
        </section>
      </main>
    </>
  );
};

export default Home;
