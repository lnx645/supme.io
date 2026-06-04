import type { ReactNode } from "react";
import {
  DialogTrigger,
} from "react-aria-components";
type ModalProps = {
  children: ReactNode;
};
export const Modal = (props: ModalProps) => {
  return (
    <DialogTrigger>
      {props.children}
    </DialogTrigger>
  );
};
