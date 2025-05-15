export const ButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type ButtonVariants =
  (typeof ButtonVariants)[keyof typeof ButtonVariants];
