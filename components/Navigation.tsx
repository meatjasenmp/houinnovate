import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export default function Navigation({
  pageWrapID,
  outerContainerID,
}: {
  pageWrapID: string;
  outerContainerID: string;
}) {
  return (
    <Menu
      pageWrapId={pageWrapID}
      outerContainerId={outerContainerID}
      right
      width={"100%"}
    >
      <Link className="menu-item" href="/">
        Home
      </Link>

      <Link className="menu-item" href="/">
        About
      </Link>

      <Link className="menu-item" href="/">
        Contact
      </Link>

      <Link className="menu-item" href="/">
        Blog
      </Link>
    </Menu>
  );
}
