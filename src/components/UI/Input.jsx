const Input = ({ label, ...props }) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full px-3 py-2 border rounded-md border-black focus:outline-none"
      />
    </div>
  );
};

export default Input;
