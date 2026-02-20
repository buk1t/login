export default function Page({ searchParams }) {
  const returnTo =
    (searchParams && searchParams.return_to) || "https://www.buk1t.com/";

  const startUrl =
    "https://api.buk1t.com/api/auth/github/start?return_to=" +
    encodeURIComponent(returnTo);

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.brand}>buk1t</div>
        <h1 style={styles.h1}>Sign in</h1>
        <p style={styles.p}>
          Use GitHub to sign in. This lets you sync themes now — and later, secure
          personal stuff (like docs/editors).
        </p>

        <a href={startUrl} style={styles.btn}>
          Continue with GitHub
        </a>

        <p style={styles.small}>
          You’ll be redirected back to: <br />
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
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
  },
  card: {
    width: "min(520px, 100%)",
    borderRadius: 18,
    padding: 22,
    background: "rgba(18,18,22,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
  },
  brand: {
    fontWeight: 700,
    letterSpacing: 0.6,
    opacity: 0.9,
    marginBottom: 10,
  },
  h1: { margin: "6px 0 8px", fontSize: 28, lineHeight: 1.1 },
  p: { margin: "0 0 16px", opacity: 0.75, lineHeight: 1.45 },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    padding: "12px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontWeight: 650,
  },
  small: { marginTop: 14, opacity: 0.65, fontSize: 12, lineHeight: 1.35 },
  mono: {
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace",
    opacity: 0.9,
  },
};