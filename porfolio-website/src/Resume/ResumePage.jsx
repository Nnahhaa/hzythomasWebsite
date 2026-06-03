import { useState } from "react";
import { colors } from "../constants";

const resumes = [
  {
    id: "uiux",
    num: "01",
    title: "UI/UX",
    subtitle: "Design & User Experience",
    color: "#F04E30",
    darkText: false,
    content: {
      summary: "Focused on crafting intuitive, accessible, and visually polished user experiences. Combines front-end development skills with a deep understanding of design principles.",
      skills: ["Figma", "Wireframing", "Prototyping", "Accessibility (WCAG)", "HTML & CSS", "React", "User Research", "Design Systems"],
      experience: [
        { role: "Front-End Developer", org: "Capstone Project", desc: "Built DisasterReady — a centralized government data platform focused on clean UI and accessibility." },
        { role: "Orientation Leader", org: "University", desc: "Designed and facilitated engaging onboarding experiences for incoming students." },
      ],
    },
  },
  {
    id: "software",
    num: "02",
    title: "Software",
    subtitle: "Full-Stack Development",
    color: "#7B4AE2",
    darkText: false,
    content: {
      summary: "Full-stack developer experienced in building real-world web applications with clean architecture and modern JavaScript tooling.",
      skills: ["JavaScript", "React", "HTML & CSS", "Python", "Git & GitHub", "REST APIs", "Node.js", "Responsive Design"],
      experience: [
        { role: "Developer", org: "DisasterReady (Capstone)", desc: "Centralized government disaster data into an accessible, responsive React web app." },
        { role: "VP", org: "Student Organization", desc: "Led technical initiatives and coordinated cross-functional teams to deliver projects on time." },
      ],
    },
  },
  {
    id: "aiml",
    num: "03",
    title: "AI / Machine Learning",
    subtitle: "Algorithms & Intelligence",
    color: "#C8E617",
    darkText: true,
    content: {
      summary: "Applied ML and LLM experience through hands-on projects in detection algorithms, face recognition, and intelligent systems.",
      skills: ["Python", "LLMs", "scikit-learn", "OpenCV", "Data Processing", "Algorithm Design", "NumPy", "Pandas"],
      experience: [
        { role: "Developer", org: "Autism Detection Project", desc: "Built algorithms to detect likelihood of ASD using machine learning classification models." },
        { role: "Developer", org: "Face Recognition Attendance", desc: "Implemented face recognition to automate student enrollment and attendance tracking." },
      ],
    },
  },
];

function ResumeRow({ resume, isOpen, onToggle }) {
  const [hovered, setHovered] = useState(false);

  const active = isOpen || hovered;
  const textColor = active ? (resume.darkText ? "#111111" : "#ffffff") : undefined;

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
      {/* Header row */}
      <div
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr auto 60px",
          alignItems: "center",
          padding: "0 2.5rem",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* Flood fill */}
        <div
          style={{
            position: "absolute",
            left: 0, top: 0, bottom: 0,
            width: active ? "100%" : "0%",
            background: resume.color,
            transition: "width 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            zIndex: 0,
          }}
        />

        {/* Number */}
        <span style={{
          position: "relative", zIndex: 1,
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.75rem", fontWeight: 700,
          color: active ? textColor : "#888580",
          letterSpacing: "0.08em",
          padding: "2.2rem 0",
          transition: "color 0.2s",
        }}>
          {resume.num}
        </span>

        {/* Title */}
        <div style={{ position: "relative", zIndex: 1, padding: "2.2rem 1.5rem" }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2.25rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: active ? textColor : "#111111",
            transition: "color 0.2s",
            display: "block",
          }}>
            {resume.title}
          </span>
          <span style={{
            fontSize: "0.8125rem",
            color: active ? (resume.darkText ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)") : "#888580",
            fontStyle: "italic",
            fontWeight: 300,
            transition: "color 0.2s",
          }}>
            {resume.subtitle}
          </span>
        </div>

        {/* Download hint */}
        <span style={{
          position: "relative", zIndex: 1,
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.7rem", fontWeight: 700,
          color: active ? textColor : "#888580",
          letterSpacing: "0.1em",
          transition: "color 0.2s",
          whiteSpace: "nowrap",
        }}>
          VIEW RESUME
        </span>

        {/* Arrow */}
        <span style={{
          position: "relative", zIndex: 1,
          fontSize: "1.4rem",
          color: active ? textColor : "#888580",
          textAlign: "right",
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s",
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          display: "flex",
          justifyContent: "flex-end",
        }}>
          →
        </span>
      </div>

      {/* Expanded content */}
      <div style={{
        maxHeight: isOpen ? "600px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
        <div style={{
          padding: "3rem 2.5rem 3rem calc(80px + 1.5rem + 2.5rem)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}>
          {/* Left: summary + experience */}
          <div>
            <p style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "#444",
              fontWeight: 300,
              marginBottom: "2rem",
            }}>
              {resume.content.summary}
            </p>

            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#888580",
              marginBottom: "1rem",
            }}>
              EXPERIENCE
            </p>

            {resume.content.experience.map((exp, i) => (
              <div key={i} style={{
                marginBottom: "1.25rem",
                paddingLeft: "1rem",
                borderLeft: `2px solid ${resume.color}`,
              }}>
                <p style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#111111",
                  marginBottom: "0.2rem",
                }}>
                  {exp.role} — <span style={{ fontWeight: 400, color: "#888580" }}>{exp.org}</span>
                </p>
                <p style={{ fontSize: "0.8125rem", color: "#888580", lineHeight: 1.6, fontWeight: 300 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: skills + download */}
          <div>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#888580",
              marginBottom: "1rem",
            }}>
              SKILLS
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {resume.content.skills.map((skill) => (
                <span key={skill} style={{
                  padding: "0.35rem 0.85rem",
                  border: `1px solid rgba(0,0,0,0.15)`,
                  borderRadius: "99px",
                  fontSize: "0.75rem",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "#444",
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Download button */}
            <a
              href={`/resumes/${resume.id}.pdf`}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 1.75rem",
                background: resume.color,
                color: resume.darkText ? "#111111" : "#ffffff",
                textDecoration: "none",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                borderRadius: "99px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              DOWNLOAD PDF ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{
        background: colors.warm ?? "#EEEAE3",
        color: "#111111",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* Nav */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2.5rem",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
        }}>
          <a href="/" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
            color: "#111111",
            textDecoration: "none",
          }}>
            hzythomas
          </a>
          <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
            {["Projects", "About", "Resume"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} style={{
                  fontSize: "0.875rem",
                  color: "#111111",
                  textDecoration: "none",
                  opacity: item === "Resume" ? 1 : 0.55,
                  fontWeight: item === "Resume" ? 500 : 400,
                }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Page header */}
        <div style={{
          padding: "4rem 2.5rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
        }}>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}>
            My<br />
            <span style={{ color: "#F04E30" }}>Resumes.</span>
          </h1>
          <div style={{ textAlign: "right", paddingBottom: "0.5rem" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: "99px",
              padding: "0.35rem 0.9rem",
              fontSize: "0.8rem",
              color: "#888580",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.04em",
              marginBottom: "0.75rem",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F04E30", display: "inline-block" }} />
              3 RESUMES
            </div>
            <p style={{ fontSize: "0.8125rem", color: "#888580", lineHeight: 1.6 }}>
              Click any to expand · Download PDF
            </p>
          </div>
        </div>

        {/* Resume rows */}
        <div>
          {resumes.map((resume) => (
            <ResumeRow
              key={resume.id}
              resume={resume}
              isOpen={openId === resume.id}
              onToggle={() => toggle(resume.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid rgba(0,0,0,0.12)",
          marginTop: "5rem",
        }}>
          {[
            { label: "FORMATS", value: "PDF available for each" },
            { label: "UPDATED", value: "2025" },
            { label: "STATUS", value: "Available for work" },
          ].map((cell, i) => (
            <div key={cell.label} style={{
              padding: "2rem 2.5rem",
              borderRight: i < 2 ? "1px solid rgba(0,0,0,0.12)" : "none",
              fontSize: "0.8125rem",
              color: "#888580",
              lineHeight: 1.6,
            }}>
              <strong style={{
                display: "block",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "#111111",
                marginBottom: "0.4rem",
              }}>
                {cell.label}
              </strong>
              {cell.value}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}