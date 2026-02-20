"use client";

import { useEffect, useState } from "react";
import { ui } from "../_components/ui";

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
    <main style={ui.main}>
      <div style={ui.card}>
        <h1 style={{ margin: 0, fontSize: 24 }}>{msg}</h1>
        <p style={{ margin: "10px 0 16px", opacity: 0.72 }}>
          This page sends the required POST request to log you out.
        </p>
        <a href="/" style={ui.btn}>Back</a>
      </div>
    </main>
  );
}