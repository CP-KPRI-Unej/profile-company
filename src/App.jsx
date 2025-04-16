
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profil from "./page/profile/Profile";
import LandingPage from "./page/landing page/LandingPage";
import GeraiLayanan from "./page/gerai layanan/GeraiLayanan";
import UnitJasa from "./page/unit jasa/UnitJasa";
import UnitSimpanPinjam from "./page/unit simpan pinjam/UnitSimpanPinjam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Gerai-Layanan" element={<GeraiLayanan />} />
        <Route path="/Unit-Jasa" element={<UnitJasa />} />
        <Route path="/Unit-Simpan-Pinjam" element={<UnitSimpanPinjam />} />
        <Route path="/Unit-Toko" element={<Profil />} />
        <Route path="/Info-Anggota" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
