const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-black text-white py-2 rounded-md hover:opacity-85"
    >
      {children}
    </button>
  );
};

export default Button;
