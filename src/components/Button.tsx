// src/components/Button.tsx
interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
  }
  
  export default function Button({ label, onClick, className = "" }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition ${className}`}
      >
        {label}
      </button>
    );
  }
  