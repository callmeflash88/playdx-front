import type { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export const Table: FC<Props> = ({ className, children, ariaLabel }) => (
  <div className={cn("mt-5", className)}>
    <table aria-label={ariaLabel} className="min-w-full">
      {children}
    </table>
  </div>
);
