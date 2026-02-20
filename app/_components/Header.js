import Link from "next/link";
import { ui } from "./ui";

export default function Header({ me }) {
  const loggedIn = !!me?.ok;

  return (
    <div style={ui.bar}>
      <Link href="/" style={ui.brand}>buk1t</Link>

      <div style={ui.right}>
        <Link href="/settings" style={ui.link}>Settings</Link>
        <Link href="/logout" style={ui.linkDanger}>Log out</Link>
        {!loggedIn && <span style={{ opacity: 0.65, fontSize: 12 }}>Not signed in</span>}
      </div>
    </div>
  );
}