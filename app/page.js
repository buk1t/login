"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "./_components/Header";
import { ui } from "./_components/ui";

export default function Page() {
  const sp = useSearchParams();
  const router = useRouter();

  const returnTo = sp.get("return_to") || "https://www.buk1t.com/";

  const startUrl = useMemo(() => {
    return (
      "https://api.buk1t.com/api/auth/github/start?return_to=" +
      encodeURIComponent(returnTo)
    );
  }, [returnTo]);

  const [me, setMe] = useState(null);

  useEffect(() => {
    fetch("https://api.buk1t.com/api/me", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setMe(data);
        if (data?.ok) router.replace("/settings"); // auto redirect
      })
      .catch(() => setMe(null));
  }, [router]);

  return (
    <main style={ui.main}>
      <div style={ui.card}>
        <Header me={me} />

        <h1 style={ui.h1}>Sign in</h1>
        <p style={ui.p}>
          GitHub sign-in lets you sync themes now — and later, secure personal stuff (docs/editors).
        </p>

        <a href={startUrl} style={ui.btn}>
          Continue with GitHub
        </a>

        <p style={ui.small}>
          Return destination:
          <br />
          <span style={ui.mono}>{returnTo}</span>
        </p>
      </div>
    </main>
  );
}