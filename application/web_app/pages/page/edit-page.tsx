import { Input } from "@web/core/components/input";
import css from "./module/edit-page.module.css";
import { Button } from "@web/core/components/button/button";

import { Select, SelectItem } from "@web/core/components/select/select";

export const Component = () => {
  return (
    <div className={css.edit_wrapper}>
      <div className={css.page_title}>
        <h2>Edit Page</h2>
        <p>Edit Informasi Halaman Kreator Anda Anda</p>
      </div>
      <div className="flex flex-col gap-3">
        <Input maxLength={90}  label="Nama" placeholder="Nama Lengkap" value={"Ahmad Stefani"} inputSize="xs" />
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
        <Select  size="xs" label="Kategori Kreator">
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
          <Button>Simpan</Button>
        </div>
      </div>
    </div>
  );
};
