import { useState } from "react";
import { colors, skills } from "../constants";

export default function SkillsStrip() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        borderTop: `1.5px solid ${colors.dark}`,
        padding: "2rem 2.5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {skills.map(({ label, accent }) => (
        <span
          key={label}
          onMouseEnter={() => setHovered(label)}
          onMouseLeave={() => setHovered(null)}
          style={{
            padding: "0.45rem 1.1rem",
            borderRadius: "100px",
            fontSize: "0.8rem",
            fontWeight: accent === "coral" ? 500 : 400,
            cursor: "default",
            transition: "all 0.15s",
            border:
              accent === "coral"
                ? `1.5px solid ${colors.coral}`
                : `1.5px solid ${colors.dark}`,
            background:
              hovered === label
                ? colors.dark
                : accent === "lime"
                ? colors.lime
                : accent === "coral"
                ? colors.coral
                : "transparent",
            color:
              hovered === label
                ? colors.warm
                : accent === "coral"
                ? "white"
                : colors.dark,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}