import type { ReactNode } from "react";
import { Button } from "react-aria-components";

export const ModalTrigger = ({ children }: { children: ReactNode }) => {
  return <Button>{children}</Button>;
};
