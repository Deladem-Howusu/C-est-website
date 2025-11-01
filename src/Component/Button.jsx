function Button({ children, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="bg-[#FFD700] text-blue-600 font-semibold text-[12px] px-4 py-2 rounded-full"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
