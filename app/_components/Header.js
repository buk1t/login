"use client";

import { useEffect, useState } from "react";
import Header from "../_components/Header";

export default function Settings() {
  const [me, setMe] = useState(null);
  const [theme, setTheme] = useState({ mode: "dark", accent: "ocean", radius: 18 });
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://api.buk1t.com/api/me", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setMe(data);
        if (data?.ok && data.user?.theme) setTheme(data.user.theme);
      })
      .catch(() => setMe(null));
  }, []);

  async function save() {
    setStatus("Saving…");
    const r = await fetch("https://api.buk1t.com/api/preferences", {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme }),
    });
    if (r.ok) setStatus("Saved ✅");
    else setStatus("Save failed ❌");
    setTimeout(() => setStatus(""), 1400);
  }

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <Header me={me} />
        <h1 style={styles.h1}>Settings</h1>
        {!me?.ok ? (
          <p style={styles.p}>You’re not signed in.</p>
        ) : (
          <>
            <div style={styles.grid}>
              <label style={styles.label}>
                Mode
                <select
                  value={theme.mode || "dark"}
                  onChange={(e) => setTheme({ ...theme, mode: e.target.value })}
                  style={styles.input}
                >
                  <option value="dark">dark</option>
                  <option value="light">light</option>
                </select>
              </label>

              <label style={styles.label}>
                Accent
                <input
                  value={theme.accent || ""}
                  onChange={(e) => setTheme({ ...theme, accent: e.target.value })}
                  style={styles.input}
                  placeholder="ocean / neon / beach / etc"
                />
              </label>

              <label style={styles.label}>
                Radius
                <input
                  type="number"
                  value={Number(theme.radius ?? 18)}
                  onChange={(e) => setTheme({ ...theme, radius: Number(e.target.value) })}
                  style={styles.input}
                />
              </label>
            </div>

            <button onClick={save} style={styles.btn}>Save</button>
            {!!status && <div style={styles.status}>{status}</div>}

            <details style={styles.details}>
              <summary>Theme JSON</summary>
              <pre style={styles.pre}>{JSON.stringify(theme, null, 2)}</pre>
            </details>
          </>
        )}
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
    width: "min(660px, 100%)",
    borderRadius: 18,
    padding: 22,
    background: "rgba(18,18,22,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
  },
  h1: { margin: "6px 0 8px", fontSize: 28, lineHeight: 1.1 },
  p: { margin: "0 0 16px", opacity: 0.75, lineHeight: 1.45 },
  grid: { display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" },
  label: { display: "grid", gap: 6, opacity: 0.9, fontWeight: 650 },
  input: {
    padding: "10px 12px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.92)",
    outline: "none",
  },
  btn: {
    marginTop: 14,
    width: "100%",
    padding: "12px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.92)",
    fontWeight: 800,
    cursor: "pointer",
  },
  status: { marginTop: 10, opacity: 0.85 },
  details: { marginTop: 14, opacity: 0.85 },
  pre: {
    marginTop: 10,
    padding: 12,
    borderRadius: 14,
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.10)",
    overflow: "auto",
  },
};