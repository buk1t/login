"use client";

import { useEffect, useState } from "react";
import Header from "../_components/Header";
import { ui } from "../_components/ui";

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
    try {
      const r = await fetch("https://api.buk1t.com/api/preferences", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme }),
      });
      if (r.ok) setStatus("Saved ✅");
      else setStatus("Save failed ❌");
    } catch {
      setStatus("Save failed ❌");
    }
    setTimeout(() => setStatus(""), 1400);
  }

  return (
    <main style={ui.main}>
      <div style={ui.card}>
        <Header me={me} />

        <h1 style={ui.h1}>Settings</h1>

        {!me?.ok ? (
          <p style={ui.p}>
            You aren’t logged in. Go back and sign in.
          </p>
        ) : (
          <>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              <label style={{ display: "grid", gap: 6, fontWeight: 700, opacity: 0.9 }}>
                Mode
                <select
                  value={theme.mode || "dark"}
                  onChange={(e) => setTheme({ ...theme, mode: e.target.value })}
                  style={ui.input}
                >
                  <option value="dark">dark</option>
                  <option value="light">light</option>
                </select>
              </label>

              <label style={{ display: "grid", gap: 6, fontWeight: 700, opacity: 0.9 }}>
                Accent
                <input
                  value={theme.accent || ""}
                  onChange={(e) => setTheme({ ...theme, accent: e.target.value })}
                  style={ui.input}
                  placeholder="ocean / neon / beach / etc"
                />
              </label>

              <label style={{ display: "grid", gap: 6, fontWeight: 700, opacity: 0.9 }}>
                Radius
                <input
                  type="number"
                  value={Number(theme.radius ?? 18)}
                  onChange={(e) => setTheme({ ...theme, radius: Number(e.target.value) })}
                  style={ui.input}
                />
              </label>
            </div>

            <button onClick={save} style={{ ...ui.btn, marginTop: 14 }}>
              Save
            </button>

            {!!status && <div style={{ marginTop: 10, opacity: 0.85 }}>{status}</div>}

            <details style={{ marginTop: 14, opacity: 0.85 }}>
              <summary>Theme JSON</summary>
              <pre
                style={{
                  marginTop: 10,
                  padding: 12,
                  borderRadius: 14,
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  overflow: "auto",
                }}
              >
                {JSON.stringify(theme, null, 2)}
              </pre>
            </details>
          </>
        )}
      </div>
    </main>
  );
}