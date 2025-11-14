function Button({ children, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="button bg-[#c2e6f1] text-black font-semibold text-[12px] px-4 py-2 rounded-full"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
