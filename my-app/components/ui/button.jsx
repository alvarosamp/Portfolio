export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent-hover ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
