import { useState } from "react";
import { colors } from "../constants";

export default function ProjectCell({ project }) {
  const [hovered, setHovered] = useState(false);
  const isLight = project.textColor === "#1A1A1A";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: `span ${project.span.col}`,
        gridRow: `span ${project.span.row}`,
        background: project.bg,
        borderRight: `1.5px solid ${colors.dark}`,
        borderBottom: `1.5px solid ${colors.dark}`,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "filter 0.2s",
        filter: hovered ? "brightness(0.95)" : "brightness(1)",
      }}
    >
      {/* Top row: id + category label, optional square shape */}
      <div>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: isLight ? "#444" : "rgba(255,255,255,0.6)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {project.id} — {project.category}
        </div>

        {project.shape === "square" && (
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              width: 40,
              height: 40,
              background: colors.lime,
              borderRadius: 8,
              transform: "rotate(12deg)",
            }}
          />
        )}
      </div>

      {/* Bottom: tech tag + title + desc */}
      <div>
        {project.tech && (
          <div
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              padding: "0.2rem 0.6rem",
              borderRadius: "100px",
              border: `1px solid ${isLight ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`,
              color: isLight ? "#333" : "rgba(255,255,255,0.8)",
              width: "fit-content",
              marginBottom: "0.5rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {project.tech}
          </div>
        )}

        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: project.span.col >= 5 ? "1.3rem" : "0.95rem",
            fontWeight: 700,
            lineHeight: 1.2,
            color: project.textColor,
          }}
        >
          {project.title}
        </div>

        {project.desc && (
          <div
            style={{
              fontSize: "0.8rem",
              color: isLight ? "#555" : "rgba(255,255,255,0.75)",
              fontWeight: 300,
              marginTop: "0.4rem",
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
            right: -20,
            bottom: -20,
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "20px solid rgba(255,255,255,0.15)",
            pointerEvents: "none",
          }}
        />
      )}

      {project.shape === "triangle" && (
        <div
          style={{
            position: "absolute",
            left: -20,
            bottom: -20,
            width: 120,
            height: 120,
            borderLeft: "${size/2}px solid transparent",
            borderRight: "${size/2}px solid transparent",
            borderBottom: "${size}px solid rgba(255, 255, 255, 0.15",
            background: "transparent",
          }}
        />
      )}


    </div>
  );
}