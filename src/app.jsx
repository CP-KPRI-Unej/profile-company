
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profil from "./page/profile/Profile";
import LandingPage from "./page/landing page/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Gerai-Layanan" element={<Profil />} />
        <Route path="/Unit-Jasa" element={<Profil />} />
        <Route path="/Unit-Simpan-Pinjam" element={<Profil />} />
        <Route path="/Unit-Toko" element={<Profil />} />
        <Route path="/Info-Anggota" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
