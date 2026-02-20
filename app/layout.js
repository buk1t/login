export const metadata = {
  title: "Buk1t Login",
  description: "Sign in to Buk1t.",
  icons: {
    icon: [
      { url: "https://api.buk1t.com/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "https://api.buk1t.com/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "https://api.buk1t.com/favicon/favicon.ico" },
    ],
    apple: [{ url: "https://api.buk1t.com/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "https://api.buk1t.com/favicon/site.webmanifest",
  appleWebApp: { title: "Buk1t" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}