import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DevNavbar from './components/DevNavbar';

import MvisDasboard from './pages/dasboards/Mvis';
import ViolenceAgainstWomenDashboard from './pages/dasboards/ViolenceAgainstWomen';
import PoliceLethalityAndVictimizationDasbard from './pages/dasboards/PoliceLethalityAndVictimization';
import RobberiesAndThreftsDashboard from './pages/dasboards/RobberiesAndtThefts';

import './styles/root.css';
import './styles/main.css';
//import './styles/seconday_style.css';

function App() {

  return (
    <Router>
      <DevNavbar />
      <Routes>
        <Route path="/mvis" element={<MvisDasboard />} />
        <Route path="/violencia-contra-mulher" element={<ViolenceAgainstWomenDashboard />} />
        <Route path="/letalidade-e-vitimizacao-policial" element={< PoliceLethalityAndVictimizationDasbard />} />
        <Route path="/Roubos-e-furtos" element={<RobberiesAndThreftsDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
