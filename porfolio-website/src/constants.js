export const colors = {
    lime: "#C8F135",
    coral: "#FF5C3A",
    sky: "#3A8BFF",
    violet: "#8B3AFF",
    warm: "#F5F0E8",
    dark: "#1A1A1A",
  };
  
  export const projects = [
    { id: "01", category: "Fullstack", tech: "React · Node · Postgres", title: "Nimbus Dashboard", desc: "Real-time analytics platform for 10k+ users", bg: "#FF5C3A", textColor: "white", span: { col: 5, row: 3 }, shape: "circle" },
    { id: "02", category: "Mobile", tech: "React Native", title: "Flowtrack App", desc: "Habit tracker with 4.8★ App Store rating", bg: "#8B3AFF", textColor: "white", span: { col: 4, row: 3 }, shape: "square" },
    { id: "03", category: "API", tech: "", title: "Stripe Billing Engine", desc: "", bg: "#C8F135", textColor: "#1A1A1A", span: { col: 3, row: 2 }, shape: null },
    { id: "04", category: "CLI", tech: "", title: "devbox — open source", desc: "", bg: "white", textColor: "#1A1A1A", span: { col: 3, row: 1 }, shape: null },
    { id: "05", category: "Backend", tech: "Rust · GraphQL", title: "Velo API Gateway", desc: "", bg: "#1A1A1A", textColor: "white", span: { col: 5, row: 2 }, shape: "code" },
    { id: "06", category: "AI", tech: "Python · LLMs", title: "DocuMind — AI doc search", desc: "", bg: "#3A8BFF", textColor: "white", span: { col: 4, row: 2 }, shape: null },
  ];
  
  export const skills = [
    { label: "TypeScript", accent: "lime" },
    { label: "React" },
    { label: "Next.js" },
    { label: "Node.js", accent: "coral" },
    { label: "Rust" },
    { label: "Python" },
    { label: "PostgreSQL" },
    { label: "GraphQL" },
    { label: "Docker" },
    { label: "AWS" },
    { label: "Figma" },
    { label: "tRPC" },
  ];
  
  export const aboutCols = [
    { num: "∞", numColor: "#FF5C3A", title: "Curiosity-driven", body: "I love learning new tech and building things from scratch. If there's a better way to do something, I'll find it.", bg: "#F5F0E8", dark: false },
    { num: "</>", numColor: "#C8F135", title: "Code is craft", body: "Clean, readable, tested. I care about maintainability as much as functionality.", bg: "#1A1A1A", dark: true },
    { num: "24/7", numColor: "#3A8BFF", title: "Ship it", body: "Speed matters. I move fast without breaking things, using good tooling and solid testing practices.", bg: "#F5F0E8", dark: false },
  ];
  
  export const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #F5F0E8; }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;