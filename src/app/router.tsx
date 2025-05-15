import { createBrowserRouter, Outlet } from "react-router-dom";
import { SideBar } from "../widgets/SideBar/SideBar";
import { DashboardPage } from "../pages/dashboardPage";
import { SurveysPage } from "../pages/surveys";
import { UsersPage } from "../pages/users/Users";
// import { SideBar } from "@widgets/SideBar/SideBar";

const Layout = () => (
  <div className="flex min-h-screen">
    <SideBar />
    <main className="flex-1 bg-gray-100 p-6">
      <div className="py-6">
        <div className=" mx-auto px-4 sm:px-6 md:px-8">
          <Outlet />
        </div>
      </div>
    </main>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <DashboardPage /> },
      { path: "surveys", element: <SurveysPage /> },
      { path: "users", element: <UsersPage /> },
      //   { path: "surveys", element: <SurveysPage /> },
      // добавь остальные страницы по мере разработки
    ],
  },
  { path: "*", element: <div>404</div> },
]);
