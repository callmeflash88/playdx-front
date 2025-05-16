import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { saveTokenFromUrl } from "../shared/lib/saveToken";

export const App = () => {
  useEffect(() => {
    saveTokenFromUrl();
  }, []);

  return <RouterProvider router={router} />;
};
