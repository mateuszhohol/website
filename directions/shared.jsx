// Shared helpers for the homepage direction explorations.
// Exports to window: Placeholder, Social, FONT_LINKS, INTRO, ROLE, PUBS, profiles

const INTRO = "Mateusz Hohol is the founder and co-leader of the Mathematical Cognition and Learning Lab and an Associate Professor of Psychology at the Jagiellonian University, holding a habilitation in psychology and a Ph.D. in philosophy. He directs the Copernicus Center for Interdisciplinary Studies and lectures in the Cognitive Science Programme and the Doctoral School in the Social Sciences.";

const INTRO_SHORT = "Experimental psychologist of mathematical cognition. Founder of the Mathematical Cognition and Learning Lab and director of the Copernicus Center for Interdisciplinary Studies, Jagiellonian University.";

const RESEARCH = "His research focuses on the experimental psychology of mathematical cognition — the psychological mechanisms of processing numbers and space — alongside work on cognitive artifacts, the foundations of cognitive science, and social cognition.";

const ROLE = "Associate Professor of Psychology · Jagiellonian University";

const FOCI = [
  "Numerical cognition in professional mathematicians",
  "Long-term memory and mathematical skills",
  "Cognitive profiles of developmental dyscalculia",
  "Math anxiety",
];

const profiles = [
  ["ResearchGate", "https://www.researchgate.net/profile/Mateusz-Hohol", "RG"],
  ["ORCID", "https://orcid.org/0000-0003-0422-5488", "iD"],
  ["Google Scholar", "https://scholar.google.com/citations?user=VbDVb-YAAAAJ&hl=pl&oi=ao", "GS"],
  ["OSF", "https://osf.io/7y3s6/", "OSF"],
  ["BlueSky", "https://bsky.app/profile/mateuszhohol.bsky.social", "bsky"],
  ["LinkedIn", "https://www.linkedin.com/in/mateusz-hohol/", "in"],
  ["GitHub", "https://github.com/mateuszhohol/", "gh"],
];

// Representative recent publications for teasers
const PUBS = [
  ["Wołoszyn, K., Hohol, M., & Winkielman, P.", "Restricting facial mimicry does not impair emotion recognition or influence the evaluation of human affect vocalizations and instrumental sounds.", "Scientific Reports", "2026"],
  ["Obidziński, M., Bażela, N., & Hohol, M.", "More gist, better math: Fuzzy-trace theory-based investigation of the relationship between long-term memory and mathematical skills.", "Cognition", "2025"],
  ["Hohol, M., Szymanek, P., & Cipora, K.", "Analogue magnitude representation of angles and its relation to geometric expertise.", "Scientific Reports", "2024"],
  ["Grodniewicz, J. P. & Hohol, M.", "Therapeutic chatbots as cognitive-affective artifacts.", "Topoi", "2024"],
];

// Striped placeholder with a monospace caption (no hand-drawn art).
function Placeholder({ label, w, h, dark, style }) {
  const fg = dark ? "rgba(255,255,255,0.42)" : "rgba(0,0,0,0.34)";
  const bg = dark ? "#161616" : "#e9e9e7";
  const stripe = dark ? "rgba(255,255,255,0.045)" : "rgba(0,0,0,0.045)";
  return (
    <div style={{
      width: w, height: h, background: bg,
      backgroundImage: `repeating-linear-gradient(135deg, ${stripe} 0 2px, transparent 2px 11px)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: fg, fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
      fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
      textAlign: "center", padding: 12, boxSizing: "border-box", ...style,
    }}>
      {label}
    </div>
  );
}

Object.assign(window, { Placeholder, INTRO, INTRO_SHORT, RESEARCH, ROLE, FOCI, profiles, PUBS });
