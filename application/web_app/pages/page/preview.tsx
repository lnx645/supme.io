import { CheckBox } from "@web/core/components/checkbox"
import { Switch } from "@web/core/components/switch/components/Switch"
import { Ri24HoursLine } from "react-icons/ri"
export const Component = () => {
    // Menambahkan shadow-black/40 agar shadow berwarna hitam transparan
    return <div className="bg-white p-4 shadow">Preview Profile <Ri24HoursLine /> <Switch id="nama" name="nama">Silahkan Download File Ini</Switch>
        <CheckBox size="sm" name="WWJJW">Sembunyikan</CheckBox>
        <CheckBox size="sm" name="WWJJW">Sembunyikan</CheckBox>
        <CheckBox size="sm" description="Important notifications about your account safety" name="WWJJW">Sembunyikan</CheckBox>
        <CheckBox color="danger" size="sm" name="WWJJW">Sembunyikan</CheckBox>
        <CheckBox size="sm" isDisabled isSelected name="WWJJW">Important notifications about your account safety</CheckBox>
    </div>
}