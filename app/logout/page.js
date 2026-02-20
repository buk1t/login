"use client";

import { useEffect, useState } from "react";

export default function Logout() {
  const [msg, setMsg] = useState("Logging you out…");

  useEffect(() => {
    fetch("https://api.buk1t.com/api/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(async (r) => {
        if (r.ok) return r.json();
        throw new Error(await r.text());
      })
      .then(() => {
        setMsg("Logged out ✅ Redirecting…");
        setTimeout(() => (window.location.href = "/"), 600);
      })
      .catch(() => setMsg("Logout failed ❌ (try again)"));
  }, []);

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.h1}>{msg}</h1>
        <p style={styles.p}>
          (Logout requires a POST request — this page does it for you.)
        </p>
        <a href="/" style={styles.btn}>Back to login</a>
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
    background: "#0b0b0d",
    color: "rgba(255,255,255,0.92)",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  },
  card: {
    width: "min(520px, 100%)",
    borderRadius: 18,
    padding: 22,
    background: "rgba(18,18,22,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
  },
  h1: { margin: 0, fontSize: 24 },
  p: { margin: "10px 0 16px", opacity: 0.72 },
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
    fontWeight: 800,
  },
};