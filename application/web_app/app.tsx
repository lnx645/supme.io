import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import routers from "@web/routes";
import "@web/css/main.css";
import { AppProvider } from "./core/AppProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={routers} />
  </AppProvider>,
);
