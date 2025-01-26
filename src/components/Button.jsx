const Button = ({ title, id, rightIcon, leftIcon, containerClass, onClick }) => {
  return (
    <a
      onClick={onClick}
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[#264653] px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon}
    </a>
  );
};

export default Button;