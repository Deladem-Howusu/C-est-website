function Button({ children, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="bg-[#c2e6f1] text-blue-600 font-semibold text-[12px] px-4 py-2 rounded-full"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
