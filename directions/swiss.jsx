// Direction B — Swiss Grid. Helvetica, structural, mono labels, numbered system.
function SwissHome() {
  const ink = "#0d0d0d", mute = "#7a7a78", line = "#dededb", paper = "#ffffff";
  const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
  const mono = "ui-monospace, 'SF Mono', Menlo, monospace";
  const W = 1280;
  const nav = ["About", "Publications", "Grants", "CV", "Contact"];
  const Label = ({ children, n }) => (
    <div style={{ display: "flex", gap: 10, fontFamily: mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: mute }}>
      {n && <span>{n}</span>}<span>{children}</span>
    </div>
  );
  return (
    <div style={{ width: W, background: paper, color: ink, fontFamily: sans }}>
      {/* header */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center",
        padding: "22px 56px", borderBottom: `1px solid ${ink}` }}>
        <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>Mateusz Hohol</div>
        <div style={{ display: "flex", gap: 26 }}>
          {nav.map((n, i) => (
            <span key={n} style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
              fontWeight: i === 0 ? 700 : 400, color: i === 0 ? ink : mute }}>{n}</span>
          ))}
        </div>
      </div>

      {/* hero grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 0 }}>
        <div style={{ gridColumn: "1 / 9", padding: "56px 0 0 56px", borderRight: `1px solid ${line}`, paddingRight: 40 }}>
          <Label n="01">Experimental Psychology of Mathematical Cognition</Label>
          <h1 style={{ fontWeight: 700, fontSize: 116, lineHeight: 0.9, letterSpacing: "-0.04em",
            textTransform: "uppercase", margin: "28px 0 0" }}>Mateusz<br/>Hohol</h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 48, borderTop: `1px solid ${line}`, paddingTop: 28 }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.62, margin: 0, color: "#2a2a2a" }}>{window.INTRO_SHORT}</p>
            <div>
              <Label>Current foci</Label>
              <div style={{ marginTop: 16 }}>
                {window.FOCI.map((f, i) => (
                  <div key={f} style={{ fontSize: 15, lineHeight: 1.35, padding: "10px 0", borderTop: i ? `1px solid ${line}` : "none", display: "flex", gap: 14 }}>
                    <span style={{ fontFamily: mono, fontSize: 11, color: mute, paddingTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ gridColumn: "9 / 13", padding: 0 }}>
          <window.Placeholder label="mateusz-hohol-photo.jpg" w={"100%"} h={520} />
          <div style={{ padding: "20px 56px 20px 24px" }}>
            <Label n="02">Role</Label>
            <div style={{ fontWeight: 600, fontSize: 17, marginTop: 12, lineHeight: 1.4 }}>{window.ROLE}</div>
            <div style={{ fontSize: 14, color: mute, marginTop: 8, lineHeight: 1.5 }}>Director, Copernicus Center for Interdisciplinary Studies</div>
          </div>
        </div>
      </div>

      {/* book band */}
      <div style={{ borderTop: `1px solid ${ink}`, display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
        <div style={{ gridColumn: "1 / 5", padding: "44px 40px 44px 56px", borderRight: `1px solid ${line}` }}>
          <Label n="03">Book</Label>
          <h2 style={{ fontWeight: 700, fontSize: 34, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", margin: "20px 0 16px" }}>Foundations of Geometric Cognition</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "#3a3a38", margin: 0 }}>The cognitive underpinnings of geometric reasoning — spatial intuition, expertise, and the artifacts that scaffold mathematical thought.</p>
        </div>
        <div style={{ gridColumn: "5 / 8", borderRight: `1px solid ${line}`, padding: 24 }}>
          <window.Placeholder label="book-cover.jpeg" w={"100%"} h={300} />
        </div>
        <div style={{ gridColumn: "8 / 13", padding: "44px 56px 44px 40px" }}>
          <Label n="04">Profiles</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px", marginTop: 20 }}>
            {window.profiles.map((p) => (
              <span key={p[0]} style={{ fontFamily: mono, fontSize: 12.5, letterSpacing: "0.04em", display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${line}`, paddingBottom: 8 }}>
                <span>{p[0]}</span><span style={{ color: mute }}>↗</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* publications */}
      <div style={{ borderTop: `1px solid ${ink}`, padding: "44px 56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <Label n="05">Selected Publications</Label>
          <span style={{ fontFamily: mono, fontSize: 12, color: mute }}>ALL →</span>
        </div>
        {window.PUBS.map((p, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr 200px", gap: 24, padding: "18px 0", borderTop: `1px solid ${line}`, alignItems: "baseline" }}>
            <span style={{ fontFamily: mono, fontSize: 12, color: mute }}>{p[3]}</span>
            <span style={{ fontSize: 17, lineHeight: 1.4 }}>{p[1]}</span>
            <span style={{ fontFamily: mono, fontSize: 12, color: mute, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p[2]}</span>
          </div>
        ))}
      </div>

      <div style={{ background: ink, color: "#fff", padding: "20px 56px", display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <span>Mateusz Hohol</span><span>Jagiellonian University · Kraków</span><span>© 2026</span>
      </div>
    </div>
  );
}
window.SwissHome = SwissHome;
