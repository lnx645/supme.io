import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "@app/app.css";
import routers from "@app/routes";
import { Toaster } from "sonner";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors position="bottom-center" />
    <RouterProvider router={routers} />,
  </>,
);
