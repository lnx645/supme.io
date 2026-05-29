import type { CSSObject } from "@emotion/css/create-instance";
import facepaint from "facepaint";

export const useId = () => {
  return Math.random().toString(36).slice(2);
};
const breakpoints = [576, 768, 992, 1200];

type ResponsiveValue<T> = T | Array<T | null>;

export type ResponsiveCSS = {
  [K in keyof CSSObject]?: ResponsiveValue<CSSObject[K]>;
};

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width:${bp}px)`),
) as unknown as (styles: ResponsiveCSS) => CSSObject;
