import { useState } from "react";
import { colors } from "../constants";

export default function ProjectCell({ project }) {
  const [hovered, setHovered] = useState(false);
  const isLight = project.textColor === "#1A1A1A";

  const mutedColor = isLight ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.55)";
  const tagBorder = isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.25)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.bg,
        borderRight: `1.5px solid ${colors.dark}`,
        borderBottom: `1.5px solid ${colors.dark}`,
        padding: "2.75rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        minHeight: "280px",
        transition: "filter 0.25s",
        filter: hovered ? "brightness(0.93)" : "brightness(1)",
      }}
    >
      {/* Top: number + category */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: mutedColor,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {project.id} — {project.category}
        </span>

        {/* Lime square decoration */}
        {project.shape === "square" && (
          <div
            style={{
              width: 44,
              height: 44,
              background: colors.lime,
              borderRadius: 10,
              transform: "rotate(12deg)",
              flexShrink: 0,
            }}
          />
        )}
      </div>

      {/* Bottom: tag + title + desc */}
      <div>
        {project.tech && (
          <div
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              padding: "0.25rem 0.75rem",
              borderRadius: "100px",
              border: `1px solid ${tagBorder}`,
              color: isLight ? "#333" : "rgba(255,255,255,0.85)",
              marginBottom: "0.85rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {project.tech}
          </div>
        )}

        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.6rem",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: project.textColor,
            marginBottom: "0.6rem",
          }}
        >
          {project.title}
        </div>

        {project.desc && (
          <div
            style={{
              fontSize: "0.875rem",
              color: mutedColor,
              fontWeight: 300,
              lineHeight: 1.6,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {project.desc}
          </div>
        )}
      </div>

      {/* Decorative circle */}
      {project.shape === "circle" && (
        <div
          style={{
            position: "absolute",
            right: -30,
            bottom: -30,
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "28px solid rgba(255,255,255,0.12)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Arrow on hover */}
      <div
        style={{
          position: "absolute",
          bottom: "2.75rem",
          right: "2.5rem",
          fontSize: "1.25rem",
          color: project.textColor,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0, 0)" : "translate(-6px, 6px)",
          transition: "opacity 0.25s, transform 0.25s",
          pointerEvents: "none",
        }}
      >
        →
      </div>
    </div>
  );
}