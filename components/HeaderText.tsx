import { HeaderTextSizes } from "../styles/helpers";

interface HeaderTextProps {
  text: string | null;
  size: HeaderTextSizes;
}

const HeaderText = ({ text, size }: HeaderTextProps) => {
  return <h1 className={size}>{text}</h1>;
};

export default HeaderText;
