import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import PortfolioPage from "@/react-app/pages/Portfolio";
import ClientAreaPage from "@/react-app/pages/ClientArea";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/clientes" element={<ClientAreaPage />} />
      </Routes>
    </Router>
  );
}
