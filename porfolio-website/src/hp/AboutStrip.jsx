import { colors, aboutCols } from "../constants";

export default function AboutStrip() {
  return (
    <div
      style={{
        borderTop: `1.5px solid ${colors.dark}`,
        borderBottom: `1.5px solid ${colors.dark}`,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {aboutCols.map(({ num, numColor, title, body, bg, dark }, i) => (
        <div
          key={title}
          style={{
            padding: "2rem 2.5rem",
            background: bg,
            borderRight: i < 2 ? `1.5px solid ${colors.dark}` : "none",
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "3.5rem",
              fontWeight: 800,
              lineHeight: 1,
              color: numColor,
              marginBottom: "0.5rem",
            }}
          >
            {num}
          </div>

          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
              color: dark ? "white" : colors.dark,
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: "0.875rem",
              color: dark ? "rgba(255,255,255,0.6)" : "#555",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}