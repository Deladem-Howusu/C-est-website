function LiElement({ children, onClick }) {
  return (
    <li onClick={onClick} className="text-white font-medium text-[16px] ">
      <a href="#">{children}</a>
    </li>
  );
}

export default LiElement;
