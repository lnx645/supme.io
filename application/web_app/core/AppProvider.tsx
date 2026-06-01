import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Toaster } from "sonner";
import csstoast from "@web/css/toast.module.css";
import clsx from "clsx";
type Props = {
  children: ReactNode;
};
export const AppProvider = ({ children }: Props) => {
  return (
    <>
      {createPortal(
        <Toaster
          position="top-center"
          visibleToasts={1}
          toastOptions={{
            unstyled:true,
            duration: 4000,
            classNames: {
              toast: clsx(csstoast["toast-base"]),
              success: clsx(csstoast["toast-success"]),
              error: clsx(csstoast["toast-error"]),
              warning: clsx(csstoast["toast-warning"]),
              info: clsx(csstoast["toast-info"]),
              loading: clsx(csstoast["toast-loading"]),
              title: clsx(csstoast["toast-title"]),
              description: clsx(csstoast["toast-description"]),
              actionButton: clsx(csstoast["toast-action"]),
              closeButton: clsx(csstoast["toast-close"]),
            },
          }}
        />,
        document.body,
      )}
      {children}
    </>
  );
};
