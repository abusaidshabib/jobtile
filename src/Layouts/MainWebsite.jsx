import { Outlet } from "react-router-dom";
import Navbar from "../Features/MainWebSite/Shared/Navbar";
import Footer from "../Features/MainWebSite/Shared/Footer";
import EventNav from "../Features/MainWebSite/Shared/EventNav";

const MainWebsite = () => {
  return (
    <div className="font-open">
      <div className="absolute top-0 w-full">
        <EventNav />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainWebsite;
