function Button({ children, variant = "primary", onClick }) {
  const baseStyle =
    "rounded-lg px-4 py-2 text-sm font-medium transition";

  const variants = {
    primary:
      "bg-cyan-600 text-white hover:bg-cyan-700",
    secondary:
      "bg-slate-200 text-slate-700 hover:bg-slate-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
