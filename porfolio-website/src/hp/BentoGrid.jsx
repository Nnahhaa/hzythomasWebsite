import { colors, projects } from "../constants";
import ProjectCell from "./ProjectCell";

export default function BentoGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridAutoRows: "80px",
        borderTop: `1.5px solid ${colors.dark}`,
      }}
    >
      {projects.map((project) => (
        <ProjectCell key={project.id} project={project} />
      ))}
    </div>
  );
}