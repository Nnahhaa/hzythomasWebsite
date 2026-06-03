export const colors = {
  lime: "#C8F135",
  coral: "#FF5C3A",
  sky: "#3A8BFF",
  violet: "#8B3AFF",
  warm: "#F5F0E8",
  dark: "#1A1A1A",
};
  
/* Projects */
export const projects = [
  { id: "01", category: "Capstone Project", tech: "React · CSS", title: "DisasterReady", desc: "Bridging disaster victims and agencies together", bg: "#FF5C3A", textColor: "white", span: { col: 5, row: 3 }, shape: "circle" },
  { id: "02", category: "Autism Detection", tech: "LLM · Python ", title: "Autism Detection", desc: "Alogorithms to detect likelihood of ASD", bg: "#8B3AFF", textColor: "white", span: { col: 4, row: 3 }, shape: "square" },
  { id: "03", category: "Face Recognition", tech: "LLM · Python", title: "Attendance Face Regonition", desc: "enroll students with face recognition", bg: "#C8F135", textColor: "#1A1A1A", span: { col: 3, row: 3 }, shape: null },
  /*  { id: "04", category: "UML Diagram", tech: "", title: "Donbot UML Diagram", desc: "Diagram showing...", bg: "white", textColor: "#1A1A1A", span: { col: 3, row: 1 }, shape: "circle" }, */
  { id: "05", category: "Nutrition", tech: "HTML · CSS · JS", title: "Nutrition Counter", desc: "Keep track of the macronutrients", bg: "#1A1A1A", textColor: "white", span: { col: 5, row: 3 }, shape: "triangle" },
  { id: "06", category: "AI", tech: "Python · LLMs", title: "DocuMind — AI doc search", desc: "", bg: "#3A8BFF", textColor: "white", span: { col: 4, row: 3 }, shape: null },
  { id: "07", category: "AI", tech: "Python · LLMs", title: "DocuMind — AI doc search", desc: "", bg: "#3A8BFF", textColor: "white", span: { col: 3, row: 3 }, shape: null },
];
  
/* Skills Pills */
export const skills = [
  { label: "Python" },
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Java" },
  { label: "C" },
  { label: "SQL" },
  { label: "ReactJS" },
  { label: "GitHub"},
  { label: "UML"},
  { label: "Adobe Creative Suite"},
  { label: "Figma"},
  { label: "Wireframing"},
  { label: "Canva"},
  { label: "Agile Development"},
  { label: "Google Colab"},
  { label: "Jupyter Notebook"},
];
  
/* Morals */
export const aboutCols = [
  { num: "∞", numColor: "#FF5C3A", title: "Passion-driven", body: "I love learning new tech and building things from scratch. If there's a better way to do something, I'll find it.", bg: "#F5F0E8", dark: false },
  { num: "</>", numColor: "#C8F135", title: "Code is craft", body: "Building something that works is important; building it well is just as important.", bg: "#1A1A1A", dark: true },
  { num: "24/7", numColor: "#3A8BFF", title: "Details matter", body: "It's the little things that add up. I pay attention to the details because they often make the biggest difference.", bg: "#F5F0E8", dark: false },
];
  

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;730&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
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