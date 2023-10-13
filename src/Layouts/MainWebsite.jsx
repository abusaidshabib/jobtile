import { Outlet } from "react-router-dom";
import Navbar from "../Features/MainWebSite/Shared/Navbar";
import Footer from "../Features/MainWebSite/Shared/Footer";
import EventNav from "../Features/MainWebSite/Shared/EventNav";

const MainWebsite = () => {
  return (
    <div className="font-open">
      <EventNav />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainWebsite;
