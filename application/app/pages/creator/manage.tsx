import { userContext } from "@app/context/user_context";
import { useLoaderData, type LoaderFunction } from "react-router";
export const loader : LoaderFunction = ({context})=>{
  const user = context.get(userContext)
  return user
}
export const Component = () => {
  const data = useLoaderData()  
  return <div>Selamat datang di navbar {data?.name}</div>;
};
