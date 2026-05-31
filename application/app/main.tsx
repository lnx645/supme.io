import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "@app/app.css";
import routers from "@app/routes";
import { Toaster } from "sonner";
import { createPortal } from "react-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {createPortal(
      <Toaster richColors position="bottom-center" />,
      document.body,
    )}
    <RouterProvider router={routers} />
  </>
);
