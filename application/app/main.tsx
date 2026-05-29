import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "@app/app.css"
import routers from "@app/routes";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routers} />,
);
 