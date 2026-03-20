import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`px-4 lg:px-6.5 ${className}`}>
      {children}
    </div>
  );
}
