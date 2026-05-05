import { useState, useEffect } from "react";
import { colors } from "../constants";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [btnHover, setBtnHover] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const buttons = [
    { label: "View projects", primary: true },
    { label: "Download CV", primary: false },
  ];

  const styles = {
    hero: {
      padding: "4rem 2.5rem 3rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: `1.5px solid ${colors.dark}`,
      fontFamily: "'DM Sans', sans-serif",
    },
    content: {
      maxWidth: 800,
      margin: "0 auto",
      textAlign: "center",
      animation: mounted ? "fadeUp 0.6s ease both" : "none",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      background: colors.warm,
      border: `1.5px solid ${colors.dark}`,
      borderRadius: "100px",
      padding: "0.35rem 1rem",
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: "1.5rem",
    },
    pulseDot: {
      width: 6,
      height: 6,
      background: colors.coral,
      borderRadius: "50%",
      animation: "pulse 2s infinite",
      display: "inline-block",
    },
    headline: {
      fontFamily: "'Syne', sans-serif",
      fontSize: "clamp(3rem, 6vw, 5rem)",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-2px",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    coralText: {
      fontStyle: "normal",
      color: colors.coral,
    },
    skyText: {
      color: colors.sky,
    },
    subheading: {
      fontSize: "1rem",
      color: "#555",
      fontWeight: 300,
      maxWidth: 600,
      margin: "0 auto 2rem auto",
      lineHeight: 1.7,
      textAlign: "center",
    },
    buttonGroup: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      padding: "0.8rem 2rem",
      borderRadius: "100px",
      fontSize: "0.9rem",
      textDecoration: "none",
      border: `1.5px solid ${colors.dark}`,
      transition: "all 0.2s",
      cursor: "pointer",
      display: "inline-block",
    },
    buttonPrimary: {
      background: colors.dark,
      color: colors.warm,
      fontWeight: 500,
    },
    buttonSecondary: {
      background: "transparent",
      color: colors.dark,
      fontWeight: 400,
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        {/* Available badge */}
        <div style={styles.badge}>
          <span style={styles.pulseDot} />
          Available for work
        </div>

        {/* Headline - two lines centered */}
        <h1 style={styles.headline}>
          <div>Building <em style={styles.coralText}>fun</em> software</div>
          <div>that <span style={styles.skyText}>works.</span></div>
        </h1>

        {/* Subheading */}
        <p style={styles.subheading}>
          Full-stack engineer with a love for clean architecture, delightful UIs,
          and solving real problems with code.
        </p>

        {/* CTA buttons */}
        <div style={styles.buttonGroup}>
          {buttons.map(({ label, primary }) => (
            <a
              key={label}
              href="#"
              onMouseEnter={() => setBtnHover(label)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.button,
                ...(primary ? styles.buttonPrimary : styles.buttonSecondary),
                ...(btnHover === label && primary && { background: colors.coral }),
                ...(btnHover === label && !primary && { background: colors.dark, color: colors.warm }),
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}