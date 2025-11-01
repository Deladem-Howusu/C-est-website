function LiElement({ children }) {
  return (
    <li className="text-white font-medium text-[16px] ">
      <a href="#">{children}</a>
    </li>
  );
}

export default LiElement;
