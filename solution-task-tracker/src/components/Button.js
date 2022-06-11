const Button = ({ color, text, toggleShow }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        // onClick={handleClick}
        onClick={toggleShow}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
