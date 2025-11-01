function HeroButton({ children, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="transparent font-normal max-md:text-[14px] max-sm:text-[12px] px-8 py-3 rounded-full"
      >
        {children}
      </button>
    </div>
  );
}

export default HeroButton;
