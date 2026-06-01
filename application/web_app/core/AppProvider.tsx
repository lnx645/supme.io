import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Toaster } from "sonner";

type Props = {
  children: ReactNode;
};
export const AppProvider = ({ children }: Props) => {
  return (
    <>
      {createPortal(
        <Toaster richColors position="bottom-center" />,
        document.body,
      )}
      {children}
    </>
  );
};
