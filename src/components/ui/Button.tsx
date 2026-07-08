export default function Button({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) {
  return (
    <button
      className={`px-8 py-4 text-sm font-semibold tracking-widest uppercase border transition-colors duration-300 rounded-none
        ${variant === "primary" ? "bg-navy text-offwhite border-navy hover:bg-navy/90" : "border-navy text-navy hover:bg-navy hover:text-offwhite"}`}
    >
      {children}
    </button>
  );
}