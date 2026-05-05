import { colors, globalStyles } from "../constants";
import Nav from "./Nav";
import Hero from "./Hero";
import BentoGrid from "./BentoGrid";
import SkillsStrip from "./SkillsStrip";
import AboutStrip from "./AboutStrip";
import Footer from "./Footer";

export default function PortfolioHomepage() {
  return (
    <>
      <style>{globalStyles}</style>
      <div
        style={{
          minHeight: "100vh",
          background: colors.warm,
          color: colors.dark,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <Nav />
        <Hero />

        {/* Work section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem 2.5rem 1.25rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#888",
            }}
          >
            Selected work
          </span>
          <a
            href="#"
            style={{
              fontSize: "0.8rem",
              color: colors.sky,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            View all →
          </a>
        </div>

        <BentoGrid />
        <SkillsStrip />
        <AboutStrip />
        <Footer />
      </div>
    </>
  );
}