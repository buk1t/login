import Link from "next/link";
import { ui } from "./ui";

export default function Header({ me, active }) {
  const loggedIn = !!me?.ok;

  return (
    <div style={ui.topbar}>
      <Link href="/" style={ui.brand}>
        <span>buk1t</span>
        <span style={ui.pill}>login</span>
      </Link>

      <div style={ui.right}>
        {loggedIn && active !== "settings" && (
          <Link href="/settings" style={ui.btnGhost}>
            Settings
          </Link>
        )}

        {loggedIn ? (
          <Link href="/logout" style={ui.btnDanger}>
            Log out
          </Link>
        ) : (
          <span style={{ opacity: 0.62, fontSize: 12 }}>Not signed in</span>
        )}
      </div>
    </div>
  );
}