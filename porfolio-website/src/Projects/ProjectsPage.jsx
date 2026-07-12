import { useState } from "react";
import { colors } from "../constants";
import { Link } from "react-router-dom";

const projects = [
  {
    num: "01",
    name: "DisasterReady",
    desc: "Bridging disaster victims and agencies together",
    stack: "REACT · JS",
    color: "#F04E30",
    darkText: false,
    link: "https://disasterready.us/"
  },
  {
    num: "02",
    name: "Autism Detection",
    desc: "Algorithms to detect likelihood of ASD",
    stack: "LLM · PYTHON",
    color: "#7B4AE2",
    darkText: false,
    link: "https://colab.research.google.com/drive/117PMBhD2NdiSDB8IxSUdwwoimC61ljCG?usp=sharing",
  },
  {
    num: "03",
    name: "Face Recognition",
    desc: "Enroll students with face recognition",
    stack: "LLM · PYTHON",
    color: "#C8E617",
    darkText: true,
    link: "https://github.com/ninjaXjuju/CIS-412-Project",
  },
  {
    num: "05",
    name: "Nutrition Counter",
    desc: "Keep track of your macronutrients",
    stack: "HTML · CSS · JS",
    color: "#2B9DFF",
    darkText: false,
  },
];

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Nnahhaa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hannahthomas528/" },
  { label: "Email", href: "mailto:hzythomas@gmail.com" },
];

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);

  const textColor = hovered ? (project.darkText ? "#111111" : "#ffffff") : undefined;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr 200px 40px",
        alignItems: "center",
        padding: "0 2.5rem",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      {/* Flood fill on hover */}
      <div
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: hovered ? "100%" : "0%",
          background: project.color,
          transition: "width 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          zIndex: 0,
        }}
      />

      {/* Number */}
      <span style={{ position: "relative", zIndex: 1, fontFamily: "'Syne', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: hovered ? textColor : "#888580", letterSpacing: "0.08em", padding: "2.2rem 0", transition: "color 0.2s" }}>
        {project.num}
      </span>

      {/* Name */}
      <span style={{ position: "relative", zIndex: 1, fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.03em", color: hovered ? textColor : "#111111", padding: "2.2rem 1.5rem", transition: "color 0.2s" }}>
        {project.name}
      </span>

      {/* Description */}
      <span style={{ position: "relative", zIndex: 1, fontSize: "0.9rem", color: hovered ? textColor : "#888580", fontWeight: 300, fontStyle: "italic", padding: "2.2rem 1rem", transition: "color 0.2s" }}>
        {project.desc}
      </span>

      {/* Stack */}
      <span style={{ position: "relative", zIndex: 1, fontFamily: "'Syne', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: hovered ? textColor : "#888580", letterSpacing: "0.1em", textAlign: "right", padding: "2.2rem 0", transition: "color 0.2s" }}>
        {project.stack}
      </span>

      {/* Arrow */}
      <span style={{ position: "relative", zIndex: 1, fontSize: "1.5rem", color: textColor, opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(8px)", transition: "opacity 0.2s, transform 0.2s", textAlign: "right" }}>
        →
      </span>
    </a>
  );
}


export default function ProjectsPage() {
  const [hoveredFooter, setHoveredFooter] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;750&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #EEEAE3; }
      `}</style>

      <div style={{ background: "#EEEAE3", color: "#111111", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2.5rem", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <a href="" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", color: "#111111", textDecoration: "none" }}>
            hzythomas
          </a>
          <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
            {["Projects", "About", "Resume"].map((item) => (
              <li key={item}>
                <Link
                to={`/${item.toLowerCase()}`} style={{ fontSize: "0.875rem", color: "#111111", textDecoration: "none", opacity: item === "Projects" ? 1 : 0.6 }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Page Header */}
        <div style={{ padding: "4rem 2.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            Selected<br />
            <span style={{ color: "#F04E30" }}>work.</span>
          </h1>
          <div style={{ textAlign: "right", paddingBottom: "0.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "99px", padding: "0.35rem 0.9rem", fontSize: "0.8rem", color: "#888580", fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F04E30", display: "inline-block" }} />
              4 PROJECTS
            </div>
            <p style={{ fontSize: "0.8125rem", color: "#888580", lineHeight: 1.6 }}>Full-stack engineer · ML · LLM</p>
          </div>
        </div>

        {/* Projects List */}
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.num} project={project} />
          ))}
        </div>

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