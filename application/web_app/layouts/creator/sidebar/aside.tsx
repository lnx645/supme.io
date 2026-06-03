import { useAsyncValue } from "react-router";
import css from "./module/sidebar.module.css";
import { useMemo } from "react";
import { AsideMenuGroup } from "./aside-menu-group";
import { AsideMenuItem } from "./aside-menu-item";
import Brain from "@svg/navigation/MdiBrain.svg";
import Target from "@svg/navigation/target.svg";
import Overlay from "@svg/navigation/MaterialSymbolsVideoSettings.svg";
import Overview from "@svg/navigation/MaterialSymbolsOverviewOutline.svg";
import ApiKey from "@svg/navigation/api-key.svg";
import Code from "@svg/navigation/code.svg";
import UserGroup from "@svg/navigation/CiUsersGroup.svg";
import Wallet from "@svg/navigation/SolarWalletMoneyOutline.svg";
import Cog from "@svg/navigation/lucide--cog.svg";
import Pay from "@svg/navigation/pay.svg";
import VerifiedUser from "@svg/navigation/iconoir--verified-user.svg";
import Logout from "@svg/navigation/logout.svg";
import Bank from "@svg/navigation/bank.svg";
import Webhooks from "@svg/navigation/integration.svg";
export const Aside = () => {
  const value: any = useMemo(() => useAsyncValue(), []);

  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <div className={css.logo_brand}> BuatJajan.com.</div>
      </nav>
      <div className={css.main}>
        <AsideMenuGroup label="Main Menu">
          <AsideMenuItem badge={227} icon={Brain} to={"/creator"}>
            <span>Home</span>
          </AsideMenuItem>
          <AsideMenuItem icon={Overview} to={"/creator/overview"}>
            Dashboard
          </AsideMenuItem>
          <AsideMenuItem icon={Target} to={"/creator/my-goals"}>
            Goals
          </AsideMenuItem>
          <AsideMenuItem icon={UserGroup} to={"/creator/my-goals"}>
            My Gifter
          </AsideMenuItem>
        </AsideMenuGroup>
        <AsideMenuGroup label="Tools">
          <AsideMenuItem icon={Overlay} to={"/creator"}>
            <span>Stream Overlay</span>
          </AsideMenuItem>
          <AsideMenuItem icon={Code} to={"/creator/overview"}>
            Integration
          </AsideMenuItem>
          <AsideMenuItem icon={ApiKey} to={"/creator/overview"}>
            Api Key
          </AsideMenuItem>
          <AsideMenuItem icon={Webhooks} to={"/creator/my-goals"}>
            Webhooks
          </AsideMenuItem>
        </AsideMenuGroup>
        <AsideMenuGroup label="Payments">
          <AsideMenuItem icon={Wallet} to={"/creator"}>
            Saldo GiftMe
          </AsideMenuItem>
          <AsideMenuItem icon={Pay} to={"/creator/overview"}>
            PayIn & Payout
          </AsideMenuItem>
          <AsideMenuItem icon={Bank} to={"/creator/overview"}>
            Bank
          </AsideMenuItem>
        </AsideMenuGroup>
        <AsideMenuGroup label="Account">
          <AsideMenuItem icon={Cog} to={"/creator"}>
            Settings
          </AsideMenuItem>
          <AsideMenuItem icon={VerifiedUser} to={"/creator/overview"}>
            Verifikasi
          </AsideMenuItem>
          <AsideMenuItem icon={Logout} to={"/creator/overview"}>
            Logout
          </AsideMenuItem>
        </AsideMenuGroup>
      </div>
      <footer className={css.footer}>
        <div className={css.avatar}></div>
        <div className={css.footer_user}>
          <span className={css.footer_user_name}>{value?.user?.name}</span>
          <span className={css.footer_role}>@{value?.user?.username}</span>
        </div>
      </footer>
    </div>
  );
};
