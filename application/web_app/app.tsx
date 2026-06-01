import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "@app/app.css";
import routers from "@web/routes";
import { AppProvider } from "./core/AppProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={routers} />
  </AppProvider>,
);
