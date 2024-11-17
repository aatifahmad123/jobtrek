import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen px-6 md:px-10 lg:px-16">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-900 mt-10">
        Made with 💛 by <Link to={"/about-us"}>Team JobTrek</Link>
      </div>
    </div>
  );
};
export default AppLayout;
