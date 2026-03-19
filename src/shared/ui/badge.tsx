interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-badge bg-badge-blue/68 px-2 py-0.5 font-sans text-badge font-medium text-white ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
