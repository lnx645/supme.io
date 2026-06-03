import { Input } from "@web/core/components/input";
import css from "./module/edit-page.module.css";
import { Button } from "@web/core/components/button/button";
import { Link } from "react-router";
import clsx from "clsx";
export const Component = () => {
  return (
    <div>
      <div className={css.page_title}>
        <h2>Edit Page</h2>
        <p>Edit Informasi Halaman Kreator Anda Anda</p>
      </div>
      <div className="flex flex-col gap-3">
        <Input label="Nama" value={"Ahmad Stefani"} inputSize="xs" />
        <div>
          <Input
            label="Username"
            value={"@ahmadstefani"}
            disabled
            inputSize="xs"
          />
          <Link className={clsx(css["text-link"])} to={"/creator/page/preview"}>
            <span className="text-text-secondary">https://buatjajan.com/</span>
            <span className="font-semibold">ahmadstefani</span>
          </Link>
        </div>
        <Input label="Kategori Kreator" inputSize="xs" />
        <div className="flex gap-3 items-center">
          <Button>Simpan</Button>
          <Button variant="orange">Preview</Button>
        </div>
      </div>
    </div>
  );
};
