import { Input } from "@web/core/components/input";
import css from "./module/edit-page.module.css";
import { Button } from "@web/core/components/button/button";

import { Select, SelectItem } from "@web/core/components/select/select";
import { useState } from "react";
import { useFileDialog } from "@reactuses/core";
import default_avatar from "@web/assets/img/default_avatar.png";
export const Component = () => {
  const [avatarImage, setImageSrc] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [_, open, reset] = useFileDialog({
    accept: "image/*",
    multiple: false,
  });

  async function uploadTriggerFunction(mode: "avatar" | "banner") {
    open().then((files) => {
      if (files && files.length > 0) {
        const file = files[0] as any;
        const obj = URL.createObjectURL(file);
        if (obj) {
          if (mode == "avatar") {
            setImageSrc(obj);
          } else if (mode == "banner") {
            setBannerImage(obj);
          } else {
            reset();
          }
        }
      }
    });
  }
  return (
    <div className={css.edit_wrapper}>
      {/* <div className={css.page_title}>
        <h2>Edit Page</h2>
        <p>Edit Informasi Halaman Kreator Anda Anda</p>
      </div> */}
      <div className="flex flex-col">
        <div className={css.image_header}>
          <div className={css.image_banner}>
            {bannerImage ? (
              <img src={bannerImage} alt="Banner" />
            ) : (
              <img src={default_avatar} alt="Avatar default" />
            )}
            <div className={css.banner_overlay} />
            <button
              type="button"
              className={css.btn_edit_banner}
              onClick={() => uploadTriggerFunction("banner")}
            >
              📷 <span>Ubah Banner</span>
            </button>
          </div>

          <div className={css.avatar}>
            {avatarImage ? (
              <img src={avatarImage} alt="Avatar" />
            ) : (
              <img src={default_avatar} alt="Avatar default" />
            )}
            <button
              onClick={() => uploadTriggerFunction("avatar")}
              className={css.avatar_overlay}
            ></button>
          </div>
        </div>
        <div className={css.forms}>
          <Input
            maxLength={90}
            label="Nama"
            placeholder="Nama Lengkap"
            value={"Ahmad Stefani"}
            inputSize="xs"
          />
          <div>
            <Input
              placeholder="Username"
              prefix={"https://buatjajan.com"}
              label="Username"
              value={"@ahmadstefani"}
              isClearable
              inputSize="xs"
            />
          </div>
          <Select size="xs" label="Kategori Kreator">
            <SelectItem>Programming</SelectItem>
            <SelectItem>Cosplayer</SelectItem>
            <SelectItem>Indonesia</SelectItem>
            <SelectItem>Malaysya</SelectItem>
            <SelectItem>Bekasi</SelectItem>
            <SelectItem>Djakarta</SelectItem>
            <SelectItem>Malaysya</SelectItem>
          </Select>
          <Input isClearable label="Kategori Kreator" inputSize="xs" />
          <div className="flex gap-3 items-center">
            <Button variant="success">Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
