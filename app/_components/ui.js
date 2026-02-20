export const ui = {
  main: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background:
      "radial-gradient(900px 520px at 18% 0%, rgba(80,150,255,0.20), transparent 56%)," +
      "radial-gradient(900px 520px at 82% 16%, rgba(0,255,200,0.14), transparent 56%)," +
      "radial-gradient(700px 520px at 50% 110%, rgba(255,255,255,0.06), transparent 60%)," +
      "#0b0b0d",
    color: "rgba(255,255,255,0.92)",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  },

  card: {
    width: "min(720px, 100%)",
    borderRadius: 22,
    padding: 22,
    background: "rgba(18,18,22,0.74)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.40)",
    backdropFilter: "blur(10px)",
  },

  // layout bits
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },

  brand: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 900,
    letterSpacing: 0.6,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  },

  pill: {
    fontSize: 12,
    padding: "4px 9px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    opacity: 0.9,
  },

  right: { display: "flex", gap: 10, alignItems: "center" },

  // type
  h1: { margin: "6px 0 8px", fontSize: 30, lineHeight: 1.08, letterSpacing: -0.2 },
  p: { margin: "0 0 14px", opacity: 0.74, lineHeight: 1.5, fontSize: 14 },

  // buttons/inputs
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
    padding: "12px 14px",
    borderRadius: 16,
    background: "linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.08))",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.30)",
  },

  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 12px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.90)",
    textDecoration: "none",
    fontWeight: 750,
    cursor: "pointer",
  },

  btnDanger: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 12px",
    borderRadius: 14,
    background: "rgba(255,80,80,0.10)",
    border: "1px solid rgba(255,120,120,0.35)",
    color: "rgba(255,220,220,0.96)",
    textDecoration: "none",
    fontWeight: 850,
    cursor: "pointer",
  },

  input: {
    padding: "10px 12px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.92)",
    outline: "none",
  },

  small: { marginTop: 14, opacity: 0.62, fontSize: 12, lineHeight: 1.35 },

  mono: {
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace",
    opacity: 0.9,
  },

  divider: {
    height: 1,
    background: "rgba(255,255,255,0.10)",
    margin: "16px 0",
  },

  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },

  // account block
  acct: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 14,
    objectFit: "cover",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.10)",
  },

  acctText: { display: "grid", gap: 2 },
  acctName: { fontWeight: 900, letterSpacing: -0.1, lineHeight: 1.15 },
  acctEmail: { fontSize: 12, opacity: 0.72, lineHeight: 1.2 },
};