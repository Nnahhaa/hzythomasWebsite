import { useState } from "react";
import { colors } from "../constants";

const footerLinks = ["GitHub", "LinkedIn", "Email"];

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
        hthomas. Built with passion.
      </p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
            style={{
              fontSize: "0.8rem",
              color: hovered === link ? colors.coral : "#555",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}