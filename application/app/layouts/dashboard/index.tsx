import { Outlet } from "react-router";
import { Navbar } from "./components/navbar";
import { Layout } from "./components/layout";

export const DashboardLayout = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Outlet />
      </Layout>
    </>
  );
};
