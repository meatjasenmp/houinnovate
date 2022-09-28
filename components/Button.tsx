import { BackgroundColors } from "../styles/helpers";
import styles from "../styles/components/Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: BackgroundColors;
  icon?: ReactNode;
}

const Button = ({ label, onClick, bgColor }: ButtonProps) => {
  const backgroundColor = bgColor ? bgColor : BackgroundColors.BLACK;
  const buttonStyles = [backgroundColor, styles.button];

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button className={buttonStyles.join(" ")} onClick={handleClick}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
