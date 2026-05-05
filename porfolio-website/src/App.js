import './App.css';
import PortfolioHomepage from './hp/PortfolioHomepage';

import { globalStyles } from './constants';

// Add global styles to document head
const styleSheet = document.createElement("style");
styleSheet.textContent = globalStyles;
document.head.appendChild(styleSheet);

function App() {
  return (
    <div className="App">
      <PortfolioHomepage />
    </div>
  );
}

export default App;