import { Input } from "@web/core/components/input";
import css from "./css/style.module.css";
import { Select, SelectItem } from "@web/core/components/select/select";
import linkss from "./data.json";
import { useState } from "react";
import { Button } from "@web/core/components/button/button";
import { formatTextWithColor } from "@web/core/utils/text-color";

interface LinkItem {
  name: string;
  link: string;
}

export const LinkFields = () => {
  const [links, setLinks] = useState<LinkItem[]>([{ link: "", name: "" }]);
  const [selected, setSelected] = useState<string>("Other");
  return (
    <div className={css.wrapper}>
      <div className={css.link}>
        <div className={css.input}>
          <Select
            onChange={(e: any) => setSelected(e)}
            selectionMode="single"
            size="xs"
            label="Platform Name"
          >
            {linkss.map((item, index) => {
              return (
                <SelectItem id={item.key} key={item.key}>
                  {item.key}
                </SelectItem>
              );
            })}
          </Select>
        </div>

        <Input
          placeholder="e.g. dadanhidyt"
          prefix={linkss.find((e) => e.key == selected)?.url}
          inputSize={"xs"}
        />

        <div className={css.support_hellpers}>
          <span className={css.support_hellpers_title}>
            Format url yang didukung oleh Social Platform.
          </span>
          <ul>
            {linkss
              .find((e) => e.key == selected)
              ?.supported_formats.map((e) => {
                return <li>{formatTextWithColor(e)}</li>;
              })}
          </ul>
        </div>
        <Button size="xs" isDisabled={links.length >= 10}>
          Add
        </Button>
      </div>
    </div>
  );
};
