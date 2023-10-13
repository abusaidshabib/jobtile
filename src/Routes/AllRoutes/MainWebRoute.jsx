 import MainWebsite from "../../Layouts/MainWebsite";
import HomePage from "../../Pages/MainWebSite/HomePage";

const MainWebRoute = [
  {
    path: "/",
    element: <MainWebsite />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
];

export default MainWebRoute;
