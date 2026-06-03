import { createBrowserRouter } from "react-router";
import { NotFound } from "@web/pages/not-found";
import {
  CreatorLayout,
  LayoutLoader,
  LayoutMiddleware,
} from "@web/layouts/creator";

const Home = () => import("@web/pages/home");
const Login = () => import("@web/pages/login");
const Register = () => import("@web/pages/register");
const EditPage = () => import("@web/pages/page/edit-page");

const routes = createBrowserRouter([
  {
    path: "login",
    lazy: Login,
  },
  {
    path: "register",
    lazy: Register,
  },
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
        path: "page/edit",
        lazy: EditPage,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default routes;
