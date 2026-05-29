import { createBrowserRouter } from "react-router";
import NotFound from "@app/views/not-found";
import { AppLayout } from "./layouts/app";

const Explore = () => import("@app/views/explore");
const Login = () => import("@app/views/login");
const Register = () => import("@app/views/register");
const Landing = () => import("@app/views/landing");
const Search = () => import("@app/views/search");

const routes = createBrowserRouter([
  {
    path: "/",
    lazy: Landing,
  },
  {
    Component: AppLayout,
    children: [
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
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default routes;
