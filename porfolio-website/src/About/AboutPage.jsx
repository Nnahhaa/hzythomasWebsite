import { useState } from "react";
import { colors } from "../constants";

const hobbies = [
  { emoji: "🧶", name: "Crocheting", desc: "There's something meditative about turning yarn into something real. Also great for long TV binges." },
  { emoji: "🧵", name: "Sewing", desc: "Tiny stitches, big patience. Turns out it's not that different from debugging CSS." },
  { emoji: "🍰", name: "Baking", desc: "Cookies, cakes, bread — if it involves butter and quiet focus, I'm in." },
  { emoji: "📚", name: "Reading", desc: "Cozy corners, tea, a good book. Classic grandma behavior, zero regrets." },
];

const skillCategories = [
  {
    name: "Languages",
    skills: ["HTML5", "CSS", "JavaScript", "Java", "C", "Python", "SQL"],
  },
  {
    name: "Frontend",
    skills: [ "React.js", "Node.js"],
  },
  {
    name: "Backend and Tools",
    skills: ["GitHub", "UML", "Google Colab", "Jupyter Notebook"],
  },
  {
    name: "Machine Learning",
    skills: ["Scikit-Learn", "XGBoost", "SVC"],
  },
  {
    name: "UI/UX",
    skills: ["Figma", "Wireframing & Prototyping", "Adobe Creative Suite", "Canva"],
  },
  {
    name: "Methodologies",
    skills: ["Agile Development", "Sprint Planning", "User Research", "Stakeholder Communications"],
  },
];

const experiences = [
  {
    role: "Dunkin’ Donuts Crew Member",
    org: "Dunkin' Donuuts",
    desc: [
      "•	Deliver friendly and efficient customer service in a high-volume, fast-paced environment, consistently prioritizing accuracy and a positive guest experience during peak hours.",
      "•	Collaborate with team members to maintain smooth store operations, including food preparation, order fulfillment, and keeping the workspace organized and up to standard.",
      "•	Manage multiple responsibilities simultaneously — from running the register to preparing orders — adapting quickly to shifting priorities and maintaining composure during high-traffic rushes.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Macronutrient Counter",
    desc: "Independently designed and built a full-stack nutrition tracker from the ground up, engineering a Node.js backend and a responsive, accessible frontend with non-technical users in mind.",
  },
  {
    role: "AI Developer",
    org: "Autism Detection Project",
    desc: "Developed a supervised ML pipeline in Python to classify autism spectrum disorder, implementing and comparing Logistic Regression, SVC, and XGBoost models with Scikit-learn.",
  },
  {
    role: "Developer",
    org: "Face Recognition Attendance",
    desc: "Collaborated in a team of three to build a Python-based face recognition system for student enrollment and attendance tracking using real-time facial data capture and encoded feature storage.",
  },
];

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Nnahhaa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hannahthomas528/" },
  { label: "Email", href: "mailto:hzythomas@gmail.com" },
];

export default function AboutPage() {
  const [hoveredHobby, setHoveredHobby] = useState(null);
  const [hoveredFooter, setHoveredFooter] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ background: colors.warm ?? "#EEEAE3", color: "#111", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2.5rem", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <a href="/" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", color: "#111", textDecoration: "none" }}>
            hzythomas
          </a>
          <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
            {["Projects", "About", "Resume"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} style={{ fontSize: "0.875rem", color: "#111", textDecoration: "none", opacity: item === "About" ? 1 : 0.55, fontWeight: item === "About" ? 500 : 400 }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero */}
        <section style={{ padding: "5rem 2.5rem 4rem", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", marginBottom: "3.5rem" }}>
            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#888580", marginBottom: "1.25rem" }}>ABOUT ME</p>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.04em" }}>
                Hannah<br />
                <span style={{ color: colors.coral ?? "#F04E30" }}>Thomas.</span>
              </h1>
            </div>
            <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", fontWeight: 300 }}>
              <p>I'm a motivated front-end developer who loves building clean, accessible, and user-centered web experiences. From centralizing government data in my Capstone project to leading student organizations as VP and Orientation Leader, I bring the same care for detail and communication to everything I do.</p>
              <p style={{ marginTop: "1.25rem" }}>I'm passionate about polished UI, accessibility, and constantly picking up new tools — whether that's a new JavaScript framework or a new pair of crochet hooks.</p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.12)" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "#aaa9a6", whiteSpace: "nowrap" }}>CORE SKILLS</span>
            <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.12)" }} />
          </div>
        </section>

        {/* Skills strip */}
        <div style={{ display: "flex", overflowX: "auto", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          {["JavaScript", "HTML & CSS", "React", "Python", "Accessibility", "UI / UX", "Clean Code"].map((skill, i, arr) => (
            <div key={skill} style={{ padding: "1.1rem 1.75rem", borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none", fontFamily: "'Syne', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: "#888580", whiteSpace: "nowrap" }}>
              {skill}
            </div>
          ))}
        </div>

        {/* Skills & Experience */}
        <section style={{ padding: "5rem 2.5rem 4rem", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#888580", marginBottom: "1.25rem" }}>WHAT I BRING</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            Skills &<br />
            <span style={{ color: "#F04E30" }}>Experience.</span>
          </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            {/* Skills */}
            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "#888580", marginBottom: "1.5rem" }}>TECHNICAL SKILLS</p>
              {skillCategories.map((cat) => (
                <div key={cat.name} style={{ marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#111", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>{cat.name}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {cat.skills.map((skill) => (
                      <SkillTag key={skill} label={skill} color={colors.coral ?? "#F04E30"} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "#888580", marginBottom: "1.5rem" }}>EXPERIENCE</p>
              {experiences.map((exp) => (
                <div key={exp.org} style={{ paddingLeft: "1.1rem", borderLeft: `2px solid ${colors.coral ?? "#F04E30"}`, marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#111", marginBottom: "0.2rem" }}>
                    {exp.role} — <span style={{ fontWeight: 400, color: "#888580" }}>{exp.org}</span>
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "#888580", lineHeight: 1.65, fontWeight: 300, marginTop: "0.3rem" }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section style={{ padding: "5rem 2.5rem 4rem", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", marginBottom: "3.5rem" }}>
            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#888580", marginBottom: "0.75rem" }}>WHEN I'M NOT CODING</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                Grandma hobbies,<br />
                <span style={{ color: colors.coral ?? "#F04E30" }}>proudly.</span>
              </h2>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#888580", fontStyle: "italic" }}>Yes, I crochet. And yes, I talk to my books.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid rgba(0,0,0,0.12)" }}>
            {hobbies.map((hobby, i) => (
              <div
                key={hobby.name}
                onMouseEnter={() => setHoveredHobby(i)}
                onMouseLeave={() => setHoveredHobby(null)}
                style={{ padding: "2.25rem 1.75rem", borderRight: i < hobbies.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none", background: hoveredHobby === i ? (colors.coral ?? "#F04E30") : "transparent", transition: "background 0.25s ease", cursor: "default" }}
              >
                <span style={{ fontSize: "1.75rem", marginBottom: "1.25rem", display: "block" }}>{hobby.emoji}</span>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: hoveredHobby === i ? "#fff" : "#111", marginBottom: "0.5rem", transition: "color 0.25s" }}>{hobby.name}</p>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.65, color: hoveredHobby === i ? "rgba(255,255,255,0.82)" : "#888580", fontWeight: 300, transition: "color 0.25s" }}>{hobby.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ padding: "5rem 2.5rem 5rem", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#888580", marginBottom: "1.25rem" }}>GET IN TOUCH</p>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            Let's<br />
            <span style={{ color: "#F04E30" }}>Connect.</span>
          </h1>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
            {/* Left */}
            <div>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", fontWeight: 300, marginBottom: "2.5rem" }}>
                Whether you have a project in mind, a role you think I'd be a good fit for, or just want to say hi — my inbox is open.
              </p>
              {[
                { label: "EMAIL", value: "hzythomas@gmail.com" },
                { label: "LINKEDIN", value: "linkedin.com/in/hannahthomas528" },
                { label: "GITHUB", value: "github.com/Nnahhaa" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "1.25rem" }}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.08em", color: "#111", marginBottom: "0.3rem" }}>{item.label}</p>
                  <p style={{ fontSize: "0.9rem", color: "#555", fontWeight: 300 }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                {[{ id: "name", label: "NAME", type: "text", placeholder: "Your name" }, { id: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" }].map((field) => (
                  <div key={field.id}>
                    <label style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#111", display: "block", marginBottom: "0.6rem" }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                      style={{ width: "100%", padding: "0.85rem 1rem", background: "transparent", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 4, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#111", outline: "none", fontWeight: 300 }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#111", display: "block", marginBottom: "0.6rem" }}>MESSAGE</label>
                <textarea
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{ width: "100%", padding: "0.85rem 1rem", background: "transparent", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 4, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#111", outline: "none", fontWeight: 300, resize: "vertical", minHeight: 130, lineHeight: 1.6 }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 2rem", background: colors.coral ?? "#F04E30", color: "#fff", border: "none", borderRadius: 99, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em", cursor: "pointer" }}
              >
                SEND MESSAGE →
              </button>
              {submitted && (
                <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#3B6D11" }}>✓ Message sent! I'll get back to you soon.</p>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 2.5rem", fontFamily: "'DM Sans', sans-serif" }}>
          <p style={{ fontSize: "0.8rem", color: "#888" }}>hzythomas. Built with passion.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={() => setHoveredFooter(label)}
                onMouseLeave={() => setHoveredFooter(null)}
                style={{ fontSize: "0.8rem", color: hoveredFooter === label ? (colors.coral ?? "#F04E30") : "#555", textDecoration: "none", transition: "color 0.2s" }}
              >
                {label}
              </a>
            ))}
          </div>
        </footer>

      </div>
    </>
  );
}

function SkillTag({ label, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: "0.3rem 0.8rem", border: `1px solid ${hovered ? color : "rgba(0,0,0,0.15)"}`, borderRadius: 99, fontFamily: "'Syne', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em", color: hovered ? "#fff" : "#555", background: hovered ? color : "transparent", transition: "all 0.2s", cursor: "default" }}
    >
      {label}
    </span>
  );
}