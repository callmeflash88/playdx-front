import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SideBar } from "./widgets/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter>
      <SideBar />
    </BrowserRouter> */}
    <App />
  </StrictMode>
);
