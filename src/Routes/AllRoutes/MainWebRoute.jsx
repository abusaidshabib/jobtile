import AllTemplates from "../../Features/MainWebSite/AllTemplates/AllTemplates";
import MainWebsite from "../../Layouts/MainWebsite";
import CreateResume from "../../Pages/MainWebSite/CreateResume";
import EditResume from "../../Pages/MainWebSite/EditResume";
import HomePage from "../../Pages/MainWebSite/HomePage";
import TemplatePage from "../../Pages/MainWebSite/TemplatePage";

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
      {
        path: "/create-resume",
        element: <CreateResume />,
      },
      {
        path: "/template",
        element: <TemplatePage />,
        children: [
          {
            path: "",
            element: <AllTemplates />,
          },
        ],
      },
      {
        path: "/edit-resume",
        element: <EditResume />,
      },
    ],
  },
];

export default MainWebRoute;
