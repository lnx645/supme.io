import { Button } from "@web/core/components/button/button";
import css from "./css.module.css";
import { useAsyncValue, useNavigate } from "react-router";
import { Alert } from "@web/core/components/alert";
export const Component = async () => {
  const data: any = useAsyncValue();
  const navigate = useNavigate();
  return (
    <div className={css.wrapper}>
      <div className={css.page_title}>
        <h1 className={css.item_title}>Hai Kreator!</h1>
        <p className={css.item_description}>
          Berikut adalah langkah selanjutnya yang bisa kamu ambil
        </p>
      </div>
      <div className={css.menu_grid}>
        <div className={css.menu_item}>
          <h1 className={css.item_title}>Edit Page</h1>
          <p className={css.item_description}>
            Kustomisasi halaman profil kamu. Lengkapi info, ubah foto, dan buat
            halaman buatanmu jadi lebih menarik bagi para penggemar!
          </p>
          <Button onClick={() => navigate("page/edit")} size="xs">
            Atur Halaman
          </Button>
        </div>

        <div className={css.menu_item}>
          <h1 className={css.item_title}>Setting Unit Gift</h1>
          <p className={css.item_description}>
            Atur nominal minimal tip, kustomisasi pesan apresiasi, hingga ubah
            unit panggilan kesayangan untuk para pendukungmu.
          </p>
          <Button size="xs">Atur Dukungan</Button>
        </div>

        <div className={css.menu_item}>
          <h1 className={css.item_title}>Setting Overlay</h1>
          <p className={css.item_description}>
            Integrasikan subathon, alert donasi, atau <b>running text</b>{" "}
            langsung ke OBS/Streamlabs kamu agar live streaming jadi lebih
            interaktif.
          </p>
          <Button size="xs">Buka Overlay</Button>
        </div>

        <div className={css.menu_item}>
          <h1 className={css.item_title}>Settings Goals</h1>
          <p className={css.item_description}>
            Buat target pencapaian baru (misal: beli alat baru atau{" "}
            <b>project khusus</b>) agar fans tahu ke mana arah dukungan mereka
            disalurkan.
          </p>
          <Button size="xs">Atur Target</Button>
        </div>
      </div>
    </div>
  );
};
