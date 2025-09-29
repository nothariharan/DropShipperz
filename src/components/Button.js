function Button({ onClickHandler, value, title, active, setActive }) {
  const handleClick = (e) => {
    setActive(value);        // update active state
    onClickHandler(e);       // still call original handleClick as-is
  };

  return (
    <button 
      onClick={handleClick} 
      value={value} 
      className={`btns ${active ? "active" : ""}`}
    >
      {title}
    </button>
  );
}

export default Button;