import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import css from "./module/styles.module.css";
import { useFileDialog } from "@reactuses/core";
import { useEffect, useState } from "react";
import Cropper, { type Point } from "react-easy-crop";
export const UploadImageModal = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [files, open, reset] = useFileDialog({
    accept: "image/*",
    multiple: false,
  });

  useEffect(() => {
    if (files && files.length > 0) {
      const file = files[0] as any;
      const obj = URL.createObjectURL(file);
      setImageSrc(obj);
      return () => {
        URL.revokeObjectURL(file);
      };
    }
  }, [files]);
  return (
    <DialogTrigger>
      <Button>OKE BOS</Button>
      <ModalOverlay className={css.overlay}>
        <Modal className={css.modal_content}>
          <Dialog>
            {({ close }) => {
              return (
                <div>
                  <Heading slot="title">Uplad Image</Heading>
                  {imageSrc ? (
                    <div className={css.image_cropper}>
                      <img
                        className="aspect-square w-full object-cover "
                        src={imageSrc}
                        alt=""
                      />
                    </div>
                  ) : null}
                  <Button onPress={() => open()}>Open</Button>
                  <Button onPress={close}>Close</Button>
                </div>
              );
            }}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
