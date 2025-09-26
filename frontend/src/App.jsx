import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import ConsultAI from "./pages/ConsultAI";
import PatientProfile from "./pages/profile"
import Posture from "./pages/posture";

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/consultai","/posture"]; // pages where footer should not appear

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultai" element={<ConsultAI />} />
        <Route path="/profile" element={<PatientProfile />} />
        <Route path="/posture" element={<Posture />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
