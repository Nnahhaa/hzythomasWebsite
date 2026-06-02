import { useState } from "react";
import { colors } from "../constants";
import { Link } from "react-router-dom";

export default function Nav() {
  const [hovered, setHovered] = useState(null);
  const links = ["Projects", "About", "Resume",];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2.5rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: colors.warm,
        borderBottom: `1.5px solid ${colors.dark}`,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.25rem",
          letterSpacing: "-0.5px",
        }}
      >
        hzythomas
      </div>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }}>
        {links.map((link) => (
          <li key={link}>
            <Link
              to={`/${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontSize: "0.875rem",
                color: hovered === link ? colors.coral : colors.dark,
                textDecoration: "none",
                fontWeight: 400,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}