"use client";

import Link from "next/link";

export default function Header({ me }) {
  return (
    <div style={styles.bar}>
      <Link href="/" style={styles.brand}>buk1t</Link>

      <div style={styles.right}>
        <Link href="/settings" style={styles.link}>Settings</Link>
        <Link href="/logout" style={styles.linkDanger}>Log out</Link>
      </div>

      <div style={styles.meta}>
        {me?.ok ? `Signed in as ${me.user?.login || me.user?.name || "user"}` : "Not signed in"}
      </div>
    </div>
  );
}

const styles = {
  bar: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 },
  brand: { textDecoration: "none", fontWeight: 800, letterSpacing: 0.6 },
  right: { display: "flex", gap: 12, alignItems: "center" },
  link: { padding: "8px 10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.16)" },
  linkDanger: { padding: "8px 10px", borderRadius: 12, border: "1px solid rgba(255,120,120,0.35)" },
  meta: { marginTop: 8, opacity: 0.75, fontSize: 12 },
};