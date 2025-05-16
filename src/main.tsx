import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import { AppWrapper } from "./app/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppWrapper>
    <App />
  </AppWrapper>
);
