import { MouseEventHandler } from "react";

const CTAButton = ({
  text,
  onClick,
  className,
}: {
  text: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-cta dark:border-hovercta min-w-14 bg-cta text-white border-2 py-2 px-5 rounded-full hover:bg-hovercta hover:border-hovercta transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;
