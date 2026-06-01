import { createBrowserRouter } from "react-router";
import { NotFound } from "@web/pages/not-found";
import {
  CreatorLayout,
  LayoutLoader,
  LayoutMiddleware,
} from "@web/layouts/creator";

const Home = () => import("@web/pages/home");
const routes = createBrowserRouter([
  {
    path: "creator",
    Component: CreatorLayout,
    middleware: [LayoutMiddleware],
    loader: LayoutLoader,
    children: [
      {
        path: "",
        lazy: Home,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default routes;
