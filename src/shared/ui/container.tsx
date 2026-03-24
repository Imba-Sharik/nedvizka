import { type CSSProperties, type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Container({ children, className = "", style }: ContainerProps) {
  return (
    <div className={`px-4 lg:px-6.5 ${className}`} style={style}>
      {children}
    </div>
  );
}
