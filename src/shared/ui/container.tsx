import { type CSSProperties, type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export function Container({ children, className = "", style, id }: ContainerProps) {
  return (
    <div id={id} className={`px-4 lg:px-6.5 ${className}`} style={style}>
      {children}
    </div>
  );
}
