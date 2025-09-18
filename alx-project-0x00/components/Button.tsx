import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`flex justify-center items-center bg-blue-600 text-white font-medium px-4 py-2 hover:bg-blue-700 transition ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;