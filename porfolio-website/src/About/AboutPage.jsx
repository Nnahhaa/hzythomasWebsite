import { useState } from "react";
import { colors } from "../constants";

const hobbies = [
  {
    emoji: "🧶",
    name: "Crocheting",
    desc: "There's something meditative about turning yarn into something real. Also great for long TV binges.",
  },
  {
    emoji: "🧵",
    name: "Sewing",
    desc: "Tiny stitches, big patience. Turns out it's not that different from debugging CSS.",
  },
  {
    emoji: "🍰",
    name: "Baking",
    desc: "Cookies, cakes, bread — if it involves butter and quiet focus, I'm in.",
  },
  {
    emoji: "📚",
    name: "Reading",
    desc: "Cozy corners, tea, a good book. Classic grandma behavior, zero regrets.",
  },
];

export default function AboutPage() {
  const [hoveredHobby, setHoveredHobby] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .about-fade { animation: fadeUp 0.6s ease both; }
        .about-fade-1 { animation-delay: 0.05s; }
        .about-fade-2 { animation-delay: 0.15s; }
        .about-fade-3 { animation-delay: 0.25s; }
        .about-fade-4 { animation-delay: 0.35s; }
      `}</style>

      <div
        style={{
          background: colors.warm ?? "#EEEAE3",
          color: colors.dark ?? "#111111",
          minHeight: "100vh",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.25rem 2.5rem",
            borderBottom: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.02em",
              color: colors.dark ?? "#111111",
              textDecoration: "none",
            }}
          >
            hzythomas
          </a>
          <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
            {["Projects", "About", "Resume"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  style={{
                    fontSize: "0.875rem",
                    color: colors.dark ?? "#111111",
                    textDecoration: "none",
                    opacity: item === "About" ? 1 : 0.55,
                    fontWeight: item === "About" ? 500 : 400,
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero section */}
        <div
          className="about-fade about-fade-1"
          style={{
            padding: "5rem 2.5rem 3rem",
            borderBottom: "1px solid rgba(0,0,0,0.12)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
          }}
        >
          {/* Big heading */}
          <div>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#888580",
                marginBottom: "1.25rem",
              }}
            >
              ABOUT ME
            </p>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
              }}
            >
              Hannah<br />
              <span style={{ color: colors.coral ?? "#F04E30" }}>Thomas.</span>
            </h1>
          </div>

          {/* Blurb */}
          <div style={{ paddingBottom: "0.5rem" }}>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "#444",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              I'm a motivated front-end developer who loves building clean, accessible, and user-centered web experiences. From centralizing government data in my Capstone project to leading student organizations as VP and Orientation Leader, I bring the same care for detail and communication to everything I do.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "#444",
                fontWeight: 300,
              }}
            >
              I'm passionate about polished UI, accessibility, and constantly picking up new tools — whether that's a new JavaScript framework or a new pair of crochet hooks.
            </p>
          </div>
        </div>

        {/* Skills strip */}
        <div
          className="about-fade about-fade-2"
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid rgba(0,0,0,0.12)",
            overflowX: "auto",
          }}
        >
          {["JavaScript", "HTML & CSS", "React", "Python", "Accessibility", "UI/UX", "Clean Code"].map(
            (skill, i, arr) => (
              <div
                key={skill}
                style={{
                  padding: "1.25rem 2rem",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#888580",
                  whiteSpace: "nowrap",
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>

        {/* Grandma hobbies section */}
        <div
          className="about-fade about-fade-3"
          style={{ padding: "4rem 2.5rem 2rem" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#888580",
                  marginBottom: "0.75rem",
                }}
              >
                WHEN I'M NOT CODING I'M DOING
              </p>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                Grandma hobbies,<br />
                <span style={{ color: colors.coral ?? "#F04E30" }}>proudly.</span>
              </h2>
            </div>
            <p
              style={{
                maxWidth: "320px",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#888580",
                fontStyle: "italic",
                paddingBottom: "0.25rem",
              }}
            >
              Yes, I crochet. And yes, I talk to my books.
            </p>
          </div>

          {/* Hobby cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            {hobbies.map((hobby, i) => (
              <div
                key={hobby.name}
                onMouseEnter={() => setHoveredHobby(i)}
                onMouseLeave={() => setHoveredHobby(null)}
                style={{
                  padding: "2rem 1.5rem",
                  background:
                    hoveredHobby === i
                      ? colors.coral ?? "#F04E30"
                      : colors.warm ?? "#EEEAE3",
                  borderRight: "1px solid rgba(0,0,0,0.12)",
                  transition: "background 0.25s ease",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  {hobby.emoji}
                </div>
                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    letterSpacing: "-0.01em",
                    color: hoveredHobby === i ? "#fff" : colors.dark ?? "#111111",
                    marginBottom: "0.5rem",
                    transition: "color 0.25s",
                  }}
                >
                  {hobby.name}
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.6,
                    color: hoveredHobby === i ? "rgba(255,255,255,0.85)" : "#888580",
                    fontWeight: 300,
                    transition: "color 0.25s",
                  }}
                >
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer band */}
        <div
          className="about-fade about-fade-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(0,0,0,0.12)",
            marginTop: "5rem",
          }}
        >
          {[
            { label: "BASED IN", value: "United States" },
            { label: "STATUS", value: "Available for work" },
            { label: "FOCUS", value: "Front-end · UI/UX · Accessibility" },
          ].map((cell, i, arr) => (
            <div
              key={cell.label}
              style={{
                padding: "2rem 2.5rem",
                borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none",
                fontSize: "0.8125rem",
                color: "#888580",
                lineHeight: 1.6,
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: colors.dark ?? "#111111",
                  marginBottom: "0.4rem",
                }}
              >
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