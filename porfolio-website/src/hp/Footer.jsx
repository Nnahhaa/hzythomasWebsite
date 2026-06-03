import { useState } from "react";
import { colors } from "../constants";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Nnahhaa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hannahthomas528/" },
  { label: "Email", href: "mailto:hzythomas@gmail.com" },
];

export default function Footer() {
  const [hovered, setHovered] = useState(null);

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2.5rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <p style={{ fontSize: "0.8rem", color: "#888" }}>
        hzythomas. Built with passion.
      </p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
      {footerLinks.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={label !== "Email" ? "_blank" : undefined}
          rel="noreferrer"
          onMouseEnter={() => setHovered(label)}
          onMouseLeave={() => setHovered(null)}
          style={{
            fontSize: "0.8rem",
            color: hovered === label ? colors.coral : "#555",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          {label}
        </a>
      ))}
      </div>
    </footer>
  );
}