import Link from "next/link";

export default async function Page({ searchParams }) {
  // searchParams may be a Promise in newer Next versions
  const sp = await searchParams;

  const returnTo = (sp && sp.return_to) || "https://www.buk1t.com/";
  const startUrl =
    "https://api.buk1t.com/api/auth/github/start?return_to=" +
    encodeURIComponent(returnTo);

  // NOTE: Server Components cannot read cookies from another domain.
  // We'll show buttons unconditionally; the Settings page can check /api/me client-side.

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.bar}>
          <Link href="/" style={styles.brand}>buk1t</Link>
          <div style={styles.right}>
            <Link href="/settings" style={styles.link}>Settings</Link>
            <Link href="/logout" style={styles.linkDanger}>Log out</Link>
          </div>
        </div>

        <h1 style={styles.h1}>Sign in</h1>
        <p style={styles.p}>
          GitHub sign-in lets you sync themes now — and later, secure personal
          stuff (docs/editors).
        </p>

        <a href={startUrl} style={styles.btn}>
          Continue with GitHub
        </a>

        <p style={styles.small}>
          Return destination:
          <br />
          <span style={styles.mono}>{returnTo}</span>
        </p>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background:
      "radial-gradient(900px 500px at 20% 0%, rgba(80,150,255,0.18), transparent 55%)," +
      "radial-gradient(900px 500px at 80% 20%, rgba(0,255,200,0.12), transparent 55%)," +
      "#0b0b0d",
    color: "rgba(255,255,255,0.92)",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  },
  card: {
    width: "min(560px, 100%)",
    borderRadius: 18,
    padding: 22,
    background: "rgba(18,18,22,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
  },
  bar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  brand: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 800,
    letterSpacing: 0.6,
  },
  right: { display: "flex", gap: 12, alignItems: "center" },
  link: {
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 650,
  },
  linkDanger: {
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,120,120,0.35)",
    background: "rgba(255,80,80,0.10)",
    color: "rgba(255,220,220,0.95)",
    fontWeight: 700,
  },
  h1: { margin: "6px 0 8px", fontSize: 28, lineHeight: 1.1 },
  p: { margin: "0 0 16px", opacity: 0.75, lineHeight: 1.45 },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "12px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontWeight: 700,
  },
  small: { marginTop: 14, opacity: 0.65, fontSize: 12, lineHeight: 1.35 },
  mono: {
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace",
    opacity: 0.9,
  },
};