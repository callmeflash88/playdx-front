import { memo, type FC, type MouseEventHandler, type ReactNode } from "react";
import type { ButtonVariants } from "./types";
import type { Sizes } from "../../types/sizes";
import classNames from "classnames";
import { BUTTON_STYLE_SIZE, BUTTON_STYLE_VARIANTS } from "./constants";

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
  size?: Sizes;
  type?: "button" | "submit" | "reset";
  leaderSize?: Sizes;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = memo(
  ({
    children,
    className,
    isLoading,
    variant,
    size,
    type,
    isDisabled,
    onClick,
  }) => {
    const combinedClassNames = classNames(
      "flex justify-center items-center outline-0 transition ease-in-out duration-200 active:translate-y-0.5 active:duration-150 active:brightness-95 disabled:opacity-50 disabled:active:translate-y-0 disabled:brightness-100",
      BUTTON_STYLE_VARIANTS[variant as keyof typeof BUTTON_STYLE_VARIANTS] ||
        "",
      BUTTON_STYLE_SIZE[size as keyof typeof BUTTON_STYLE_SIZE] || "",
      className
    );

    return (
      <button
        className={combinedClassNames}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
      >
        {isLoading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
