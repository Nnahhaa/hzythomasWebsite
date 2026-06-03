import { colors } from "../constants";
import ProjectCell from "./ProjectCell";

const featured = [
  { id: "01", category: "Capstone Project", tech: "React · CSS", title: "DisasterReady", desc: "Bridging disaster victims and agencies together", bg: "#FF5C3A", textColor: "white", shape: "circle" },
  { id: "02", category: "Autism Detection", tech: "LLM · Python", title: "Autism Detection", desc: "Algorithms to detect likelihood of ASD", bg: "#8B3AFF", textColor: "white", shape: "square" },
  { id: "03", category: "Face Recognition", tech: "LLM · Python", title: "Attendance Face Recognition", desc: "Enroll students with face recognition", bg: "#C8F135", textColor: "#1A1A1A", shape: null },
  { id: "05", category: "Nutrition", tech: "HTML · CSS · JS", title: "Nutrition Counter", desc: "Keep track of your macronutrients", bg: "#1A1A1A", textColor: "white", shape: "triangle" },
];

export default function BentoGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderTop: `1.5px solid ${colors.dark}`,
      }}
    >
      {featured.map((project) => (
        <ProjectCell key={project.id} project={project} />
      ))}
    </div>
  );
}