import { MouseEventHandler } from "react";

interface IBabyButton {
  text: string;
  onClick: MouseEventHandler;
  bg?: string;
  textColor?: string;
  hover?: string;
}

function BabyButton({
  bg = "bg-purple-500",
  textColor = "text-white",
  onClick,
  text,
  hover = "hover:bg-purple-two",
}: IBabyButton) {
  return (
    <button
      onClick={onClick}
      className={`w-full ${bg} focus:shadow-outline ${hover} focus:outline-none ${textColor} font-semibold py-2 px-4 rounded-card`}
      type="button"
    >
      {text}
    </button>
  );
}

export default BabyButton;
