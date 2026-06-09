import { Input } from "@web/core/components/input";
import css from "./module/edit-page.module.css";
import { Button } from "@web/core/components/button/button";

import { Select, SelectItem } from "@web/core/components/select/select";
import { useState } from "react";
import { useFileDialog } from "@reactuses/core";
import default_avatar from "@web/assets/img/default_avatar.png";
import { Textarea } from "@web/core/components/text-area";
import { LinkFields } from "@web/core/features/profile-page/links";
import { Modal, ModalTrigger } from "@web/core/components/modal";
import { ModalContent } from "@web/core/components/modal/modal-content";
import { Label } from "@web/core/components/label";
import {
  useAsyncValue,
  useLoaderData,
  type LoaderFunction,
} from "react-router";
import { http } from "@web/core/network/api_client";
import { Switch } from "@web/core/components/switch";

export const loader: LoaderFunction = async ({ context }) => {
  try {
    const category = await http.get("api/category");
    return { category: category.data };
  } catch (error) {
    return { data: error };
  }
};

export const Component = () => {
  const {
    user: { creator },
  }: any = useAsyncValue();

  const [avatarImage, setImageSrc] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [_, open, reset] = useFileDialog({
    accept: "image/*",
    multiple: false,
  });

  const { category }: { category: any[] } = useLoaderData();


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
            value={creator?.name}
            inputSize="xs"
          />
          <div>
            <Input
              placeholder="Username"
              prefix={"https://buatjajan.com"}
              label="Username"
              value={creator?.username}
              isClearable
              inputSize="xs"
            />
          </div>
          <Select value={creator?.creator_category_id} shouldCloseOnSelect size="xs" label="Kategori Kreator">
            {category.length > 0
              ? category.map((e: any) => {
                return <SelectItem id={e.id}>{e.name}</SelectItem>;
              })
              : null}
          </Select>
          <Textarea
            label="Bio"

            value={creator?.bio}
            placeholder="Tentang Kamu"
            inputSize="xs"
            maxLength={1000}
          />
          <Textarea
            label="Description"

            value={creator?.about}
            placeholder="Tentang Kamu"
            inputSize="xs"
            maxLength={1000}
          />
          <div className="max-w-sm">
            <Switch className={"[label]:text-xs"} name="wks" size="sm" isSelected={creator?.is_adult_content}>Is Adult Content</Switch>
            <Switch className={"[label]:text-xs"} name="swks" size="sm" isSelected={creator?.must_login_before_gift}>Harus Login Sebelum Gift</Switch>
            <Switch className={"[label]:text-xs"} name="swks" size="sm" isSelected={creator?.recive_gifts}>Terima Gift</Switch>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-1">
              <Label>Social Media Link</Label>
            </div>
            <Modal>
              <div className={css.add_new_btn}>
                <Button size="xs">Tambah Link</Button>
              </div>
              <ModalContent>
                <LinkFields />
              </ModalContent>
            </Modal>
          </div>

          <div className="flex gap-3 items-center">
            <Button variant="success">Simpan</Button>
            <Button variant="ghost-green">Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
