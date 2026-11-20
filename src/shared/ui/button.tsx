import { cn } from "../utils/cn";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "py-1.25 border-b flex items-center gap-2.5 cursor-pointer duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
