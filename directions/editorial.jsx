// Direction A — Editorial Classic. Serif voice, generous margins, book-like.
function EditorialHome() {
  const ink = "#141414", mute = "#6b6b68", line = "#e2e2df", paper = "#fbfbfa";
  const serif = "'Newsreader', Georgia, serif";
  const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
  const W = 1280;
  const nav = ["About", "Publications", "Grants", "CV", "Contact"];
  return (
    <div style={{ width: W, background: paper, color: ink, fontFamily: sans }}>
      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
        padding: "30px 64px", borderBottom: `1px solid ${line}` }}>
        <div style={{ fontFamily: serif, fontSize: 21, fontWeight: 500, letterSpacing: "-0.01em" }}>Mateusz&nbsp;Hohol</div>
        <div style={{ display: "flex", gap: 30 }}>
          {nav.map((n, i) => (
            <span key={n} style={{ fontSize: 13.5, letterSpacing: "0.02em",
              color: i === 0 ? ink : mute, borderBottom: i === 0 ? `1px solid ${ink}` : "none", paddingBottom: 2 }}>{n}</span>
          ))}
        </div>
      </div>

      {/* hero */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 56, padding: "72px 64px 64px" }}>
        <div>
          <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.16em",
            textTransform: "uppercase", color: mute, marginBottom: 26 }}>Cognitive Science · Experimental Psychology</div>
          <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: 76, lineHeight: 1.02,
            letterSpacing: "-0.022em", margin: "0 0 28px" }}>Mateusz<br/>Hohol</h1>
          <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22, color: mute, marginBottom: 30 }}>{window.ROLE}</div>
          <p style={{ fontFamily: serif, fontSize: 21, lineHeight: 1.6, maxWidth: 560, margin: 0, color: "#2c2c2a" }}>{window.INTRO}</p>
        </div>
        <div>
          <window.Placeholder label="mateusz-hohol-photo.jpg" w={420} h={510} />
          <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: mute, marginTop: 12, letterSpacing: "0.04em" }}>Portrait</div>
        </div>
      </div>

      {/* research foci */}
      <div style={{ padding: "0 64px 64px" }}>
        <div style={{ borderTop: `1px solid ${line}`, paddingTop: 38, display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: mute }}>Current foci</div>
          <div style={{ columns: 2, columnGap: 56 }}>
            {window.FOCI.map((f) => (
              <div key={f} style={{ fontFamily: serif, fontSize: 20, lineHeight: 1.4, padding: "0 0 18px", breakInside: "avoid" }}>— {f}</div>
            ))}
          </div>
        </div>
      </div>

      {/* book feature */}
      <div style={{ background: "#f1f1ef", padding: "60px 64px", display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "center" }}>
        <window.Placeholder label="foundations-of-geometric-cognition-cover.jpeg" w={260} h={360} />
        <div>
          <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: mute, marginBottom: 18 }}>Book</div>
          <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 18px" }}>Foundations of<br/>Geometric Cognition</h2>
          <p style={{ fontFamily: serif, fontSize: 20, lineHeight: 1.55, color: "#3a3a38", maxWidth: 540, margin: 0 }}>A monograph on the cognitive underpinnings of geometric reasoning — from spatial intuition to the cultural artifacts that scaffold mathematical thought.</p>
        </div>
      </div>

      {/* selected publications */}
      <div style={{ padding: "60px 64px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 30 }}>
          <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 32, letterSpacing: "-0.015em", margin: 0 }}>Selected publications</h2>
          <span style={{ fontSize: 13.5, color: mute }}>View all →</span>
        </div>
        {window.PUBS.map((p, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 24, padding: "22px 0",
            borderTop: `1px solid ${line}`, alignItems: "baseline" }}>
            <div>
              <div style={{ fontFamily: serif, fontSize: 21, lineHeight: 1.4, marginBottom: 6 }}>{p[1]}</div>
              <div style={{ fontSize: 14, color: mute }}>{p[0]} · <span style={{ fontStyle: "italic", fontFamily: serif }}>{p[2]}</span></div>
            </div>
            <div style={{ fontFamily: serif, fontSize: 22, color: mute, textAlign: "right" }}>{p[3]}</div>
          </div>
        ))}
      </div>

      {/* footer / profiles */}
      <div style={{ background: ink, color: "#fff", padding: "52px 64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontFamily: serif, fontSize: 26, marginBottom: 8 }}>Mateusz Hohol</div>
          <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)" }}>Copernicus Center for Interdisciplinary Studies · Jagiellonian University, Kraków</div>
        </div>
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 360 }}>
          {window.profiles.map((p) => (
            <span key={p[0]} style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}>{p[0]}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
window.EditorialHome = EditorialHome;
