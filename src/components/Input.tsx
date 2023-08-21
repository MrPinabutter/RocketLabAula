interface InputProps {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label>
        {label}
      </label>
      <input className="border border-slate-300 rounded px-3 py-2" />
    </div>
  )
}