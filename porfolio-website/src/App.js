import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioHomepage from './hp/PortfolioHomepage';
import ProjectsPage from "./Projects/ProjectsPage";
import AboutPage from './About/AboutPage';
import ResumePage from './Resume/ResumePage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PortfolioHomepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;