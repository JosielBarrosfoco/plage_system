import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ProductsPage from "@/react-app/pages/Products";
import ProductDetailPage from "@/react-app/pages/ProductDetail";
import ServicesPage from "@/react-app/pages/Services";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";
import WhatsAppFloatButton from "@/react-app/components/WhatsAppFloatButton";

export default function App() {
  return (
    <Router>
      <WhatsAppFloatButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produto/:slug" element={<ProductDetailPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
