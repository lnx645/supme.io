import { createBrowserRouter } from "react-router";
import NotFound from "@app/pages/not-found";
import { AppLayout } from "./layouts/app";

const Explore = () => import("@app/pages/explore");
const Login = () => import("@app/pages/login");
const Register = () => import("@app/pages/register");
const Landing = () => import("@app/pages/landing");
const Search = () => import("@app/pages/search");

const routes = createBrowserRouter([
  {
    Component: AppLayout,

    children: [
      {
        path: "/",
        lazy: Landing,
      },
      {
        path: "/explore",
        lazy: Explore,
      },
      {
        path: "/search",
        lazy: Search,
      },
      {
        path: "/login.php",
        lazy: Login,
      },
      {
        path: "/register",
        lazy: Register,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default routes;
