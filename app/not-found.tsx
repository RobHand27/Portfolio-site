export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#04070f",
          color: "#eef2ff",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: 700, margin: 0, opacity: 0.15 }}>404</h1>
        <p style={{ margin: 0, opacity: 0.4, fontSize: "0.9rem" }}>Page not found</p>
        <a
          href="/"
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1.25rem",
            borderRadius: "50px",
            border: "1px solid rgba(120,185,255,0.3)",
            color: "rgba(180,220,255,0.8)",
            textDecoration: "none",
            fontSize: "0.85rem",
          }}
        >
          Go home
        </a>
      </body>
    </html>
  )
}
