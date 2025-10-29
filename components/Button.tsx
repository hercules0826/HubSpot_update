// ...Button component...
import { motion } from "framer-motion";

export const Button = ({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  [x: string]: any;
}) => {
  const base =
    "px-6 py-3 text-lg rounded-2xl font-semibold transition-all shadow-sm";
  const styles =
    variant === "primary"
      ? "bg-sageGreen text-white hover:bg-sageHover"
      : "border-2 border-sageGreen text-sageGreen hover:bg-sageMint";
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
