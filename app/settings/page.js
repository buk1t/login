"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../_components/Header";
import { ui } from "../_components/ui";

export default function Settings() {
  const [me, setMe] = useState(null);
  const [theme, setTheme] = useState({ mode: "dark", accent: "ocean", radius: 18 });
  const [status, setStatus] = useState("");

  const returnTo = "https://www.buk1t.com/";
  const startUrl = useMemo(() => {
    return (
      "https://api.buk1t.com/api/auth/github/start?return_to=" +
      encodeURIComponent(returnTo)
    );
  }, [returnTo]);

  useEffect(() => {
    fetch("https://api.buk1t.com/api/me", {
      credentials: "include",
      cache: "no-store",
    })
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
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme }),
      });
      setStatus(r.ok ? "Saved ✅" : "Save failed ❌");
    } catch {
      setStatus("Save failed ❌");
    }
    setTimeout(() => setStatus(""), 1400);
  }

  const user = me?.user;

  return (
    <main style={ui.main}>
      <div style={ui.card}>
        <Header me={me} active="settings" />

        <h1 style={ui.h1}>Settings</h1>
        <p style={ui.p}>Theme + account. More controls later.</p>

        {!me?.ok ? (
          <>
            <div style={ui.divider} />
            <p style={ui.p}>You aren’t signed in.</p>
            <a href={startUrl} style={ui.btn}>
              Sign in with GitHub
            </a>
          </>
        ) : (
          <>
            {/* Account */}
            <div style={ui.acct}>
              {user?.avatar_url ? (
                <img src={user.avatar_url} alt="" style={ui.avatar} />
              ) : (
                <div style={ui.avatar} />
              )}
              <div style={ui.acctText}>
                <div style={ui.acctName}>{user?.name || "Account"}</div>
                <div style={ui.acctEmail}>{user?.email || "No public email"}</div>
              </div>
            </div>

            <div style={ui.divider} />

            {/* Theme controls */}
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              <label style={{ display: "grid", gap: 6, fontWeight: 800, opacity: 0.9 }}>
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

              <label style={{ display: "grid", gap: 6, fontWeight: 800, opacity: 0.9 }}>
                Accent
                <input
                  value={theme.accent || ""}
                  onChange={(e) => setTheme({ ...theme, accent: e.target.value })}
                  style={ui.input}
                  placeholder="ocean / neon / beach / etc"
                />
              </label>

              <label style={{ display: "grid", gap: 6, fontWeight: 800, opacity: 0.9 }}>
                Radius
                <input
                  type="number"
                  value={Number(theme.radius ?? 18)}
                  onChange={(e) => setTheme({ ...theme, radius: Number(e.target.value) })}
                  style={ui.input}
                />
              </label>
            </div>

            <div style={{ marginTop: 14 }}>
              <button onClick={save} style={ui.btn}>
                Save
              </button>
              {!!status && <div style={{ marginTop: 10, opacity: 0.82 }}>{status}</div>}
            </div>

            {/* JSON (keep, but tucked away) */}
            <details style={{ marginTop: 14, opacity: 0.88 }}>
              <summary style={{ cursor: "pointer" }}>Theme JSON</summary>
              <pre
                style={{
                  marginTop: 10,
                  padding: 12,
                  borderRadius: 16,
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