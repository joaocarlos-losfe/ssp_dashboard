import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DevNavbar from './components/dev-navbar';

import MviDasboard from './pages/dasboards/mvis';
import ViolenceAgainstWomenDashboard from './pages/dasboards/violence-against-women';
import RobberiesAndThreftsDashboard from './pages/dasboards/robberies-and-thefts';
import PolicyDasbards from './pages/dasboards/police-lethality-and-victimization';

import './styles/root.css';
import './styles/main.css';

function App() {

  return (
    <Router>
      <DevNavbar />
      <Routes>
        <Route path="/mvis" element={<MviDasboard />} />
        <Route path="/violencia-contra-mulher" element={<ViolenceAgainstWomenDashboard />} />
        <Route path="/letalidade-e-vitimizacao-policial" element={< PolicyDasbards />} />
        <Route path="/Roubos-e-furtos" element={<RobberiesAndThreftsDashboard />} />

      </Routes>
    </Router>
  )
}

export default App
