import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
  variant?: "main" | "outline";
  className?: string;
}

const Button = ({ title, href, variant = "main", className = "" }: ButtonProps) => {
  const baseClasses = "rounded-full px-4 py-2 text-base font-semibold text-center transition-colors duration-200";

  const variantClasses = {
    main: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      target="__blank"
    >
      {title}
    </Link>
  );
};

export default Button;