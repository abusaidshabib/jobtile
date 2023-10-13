import { createBrowserRouter } from "react-router-dom";
import MainWebRoute from "../AllRoutes/MainWebRoute";

const allRoutes = [...MainWebRoute];

const router = createBrowserRouter(allRoutes);
export default router;
