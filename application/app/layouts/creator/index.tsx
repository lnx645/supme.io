import {
  Await,
  Outlet,
  useLoaderData,
  useNavigation,
  type LoaderFunction,
} from "react-router";
import { Navbar } from "./components/navbar";
import { Layout } from "./components/layout";
import { userContext } from "@app/context/user_context";
import { useLoadingPage } from "@app/core/hook/useLoading";
export const loader: LoaderFunction = async ({ context }) => {
  const user = context.get(userContext);
  return { user };
};
export const CreatorLayout = () => {
  const user = useLoaderData();
  useLoadingPage();
  return (
    <>
      <Await resolve={user}>
        <Layout>
          <Outlet />
        </Layout>
      </Await>
    </>
  );
};
