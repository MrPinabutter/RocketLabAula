import { SetStateAction } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-3 py-1 border rounded border-slate-200 ${className} text-xl text-white`}>
      {text}
    </button>
  )
}