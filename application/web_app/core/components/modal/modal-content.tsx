import { createPortal } from "react-dom";
import style from "./module/style.module.css";
import {
  DialogTrigger,
  ModalOverlay,
  Modal as BaseModal,
  Heading,
  Dialog,
} from "react-aria-components";
import Close from "@svg/close.svg";
import type { ReactNode } from "react";
export const ModalContent = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <ModalOverlay className={style.overlay}>
      <BaseModal className={style.modal_content}>
        <Dialog>
          {({ close }) => {
            return (
              <div>
                <header className={style.header}>
                  <h1 className={style.header_title}>Title Wellcome</h1>
                  <button className={style.close_btn} onClick={() => close()}>
                    <Close />
                  </button>
                </header>
                <div className={style.modal_body}>{children}</div>
              </div>
            );
          }}
        </Dialog>
      </BaseModal>
    </ModalOverlay>,
    document.body,
  );
};
