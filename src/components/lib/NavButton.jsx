import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "./utils";

export const NavButton = forwardRef(({ 
  className, 
  leftIcon, 
  rightIcon, 
  children,
  id,
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      id={id}
      {...props}
      
      className={cn(        
        "group relative z-10 flex w-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#264653] px-7 py-3 text-white transition-colors duration-300 hover:bg-white hover:text-[#264653]",
        className
      )}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs font-medium uppercase">
        <div  className="flex translate-y-0 items-center justify-center gap-2 opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-[-160%] group-hover:skew-y-12 group-hover:opacity-0">
          {leftIcon}
          {children}
          {rightIcon}
        </div>
        <div className="absolute flex translate-y-[164%] skew-y-12 items-center justify-center gap-2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:skew-y-0 group-hover:opacity-100">
          {leftIcon}
          {children}
          {rightIcon}
        </div>
      </span>
    </button>
  );
});

Button.displayName = "Button";

export default NavButton;