import { userContext } from "@app/context/user_context";
import { JoinAlert } from "@app/features/creator/components/join-alert";
import { useLoaderData, type LoaderFunction } from "react-router";
export const loader: LoaderFunction = ({ context }) => {
  const user = context.get(userContext);
  return user;
};
export const Component = () => {
  const data = useLoaderData();
  return (
    <>
      <JoinAlert />
      {/* Informasi Saldo */}
    </>
  );
};
