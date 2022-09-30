import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu">
      <Image src="/hamburger.svg" alt="Hamburger Menu" width={40} height={40} />
    </div>
  );
};

export default HamburgerMenu;
