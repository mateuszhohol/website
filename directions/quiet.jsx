// Direction C — Quiet Index. Whitespace-forward, small refined type, index-like.
function QuietHome() {
  const ink = "#1b1b1a", mute = "#9a9a96", soft = "#73736f", line = "#ececea", paper = "#ffffff";
  const serif = "'Spectral', Georgia, serif";
  const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
  const mono = "ui-monospace, 'SF Mono', Menlo, monospace";
  const W = 1280;
  const nav = ["About", "Publications", "Grants", "CV", "Contact"];
  const Row = ({ n, k, children, top }) => (
    <div style={{ display: "grid", gridTemplateColumns: "44px 150px 1fr", gap: 28, padding: "26px 0",
      borderTop: top ? `1px solid ${line}` : "none", alignItems: "baseline" }}>
      <span style={{ fontFamily: mono, fontSize: 11, color: mute }}>{n}</span>
      <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: soft }}>{k}</span>
      <div>{children}</div>
    </div>
  );
  return (
    <div style={{ width: W, background: paper, color: ink, fontFamily: sans }}>
      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "34px 80px" }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>M. Hohol</div>
        <div style={{ display: "flex", gap: 34 }}>
          {nav.map((n, i) => (
            <span key={n} style={{ fontSize: 13, letterSpacing: "0.01em", color: i === 0 ? ink : soft }}>{n}</span>
          ))}
        </div>
      </div>

      {/* hero — name very large but light */}
      <div style={{ padding: "70px 80px 56px" }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: soft, marginBottom: 34 }}>Mathematical Cognition · Cognitive Science</div>
        <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: 96, lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0 }}>Mateusz Hohol</h1>
        <p style={{ fontFamily: serif, fontWeight: 300, fontSize: 26, lineHeight: 1.5, color: soft, maxWidth: 760, margin: "32px 0 0" }}>{window.INTRO_SHORT}</p>
      </div>

      {/* index rows */}
      <div style={{ padding: "0 80px" }}>
        <Row n="01" k="Position" top>
          <div style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.4 }}>{window.ROLE}</div>
          <div style={{ fontSize: 14, color: soft, marginTop: 6 }}>Director · Copernicus Center for Interdisciplinary Studies · habilitation in psychology, Ph.D. in philosophy</div>
        </Row>
        <Row n="02" k="Research" top>
          <p style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.55, margin: 0 }}>{window.RESEARCH}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 10px", marginTop: 20 }}>
            {window.FOCI.map((f) => (
              <span key={f} style={{ fontSize: 13, color: soft, border: `1px solid ${line}`, borderRadius: 100, padding: "7px 16px" }}>{f}</span>
            ))}
          </div>
        </Row>
        <Row n="03" k="Portrait" top>
          <window.Placeholder label="mateusz-hohol-photo.jpg" w={300} h={360} style={{ marginBottom: 4 }} />
        </Row>
        <Row n="04" k="Book" top>
          <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
            <window.Placeholder label="cover.jpeg" w={150} h={208} />
            <div>
              <div style={{ fontFamily: serif, fontSize: 26, lineHeight: 1.2 }}>Foundations of Geometric Cognition</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: soft, maxWidth: 460, marginTop: 12 }}>A monograph on the cognitive underpinnings of geometric reasoning — spatial intuition, expertise, and the cultural artifacts that scaffold mathematical thought.</p>
            </div>
          </div>
        </Row>
        <Row n="05" k="Selected" top>
          {window.PUBS.map((p, i) => (
            <div key={i} style={{ padding: i ? "16px 0 0" : "0", display: "flex", justifyContent: "space-between", gap: 24, alignItems: "baseline" }}>
              <span style={{ fontFamily: serif, fontSize: 19, lineHeight: 1.4 }}>{p[1]} <span style={{ fontStyle: "italic", color: soft }}>{p[2]}</span></span>
              <span style={{ fontFamily: mono, fontSize: 12, color: mute }}>{p[3]}</span>
            </div>
          ))}
        </Row>
        <Row n="06" k="Elsewhere" top>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px" }}>
            {window.profiles.map((p) => (
              <span key={p[0]} style={{ fontSize: 14, color: ink, borderBottom: `1px solid ${line}`, paddingBottom: 3 }}>{p[0]} <span style={{ color: mute }}>↗</span></span>
            ))}
          </div>
        </Row>
      </div>

      <div style={{ padding: "50px 80px", marginTop: 30, fontFamily: mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: soft, display: "flex", justifyContent: "space-between", borderTop: `1px solid ${line}` }}>
        <span>Mateusz Hohol</span><span>Kraków · 2026</span>
      </div>
    </div>
  );
}
window.QuietHome = QuietHome;
