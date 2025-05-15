export const Sizes = {
  XS: "extraSmall",
  S: "small",
  M: "medium",
  L: "large",
  XL: "extraLarge",
  XXL: "extraExtraLarge",
} as const;

export type Sizes = (typeof Sizes)[keyof typeof Sizes];
