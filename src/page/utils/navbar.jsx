import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import "./util.css";

function navbar() {
  return (
    <nav className="w-full shadow-md py-2 fixed top-0 z-50 bg-white">
      <ul className="flex flex-wrap justify-center gap-16 px-1 items-center">
      <Link to="/" className="flex items-center mr-28">
        <img src={Logo} alt="Logo" className="w-8 h-8 rounded-full" />
      </Link>
        {[
          "Beranda",
          "Tentang Kita",
          "Gerai Layanan",
          "Unit Jasa",
          "Unit Simpan Pinjam",
          "Unit Toko",
          "Info Anggota",
        ].map((item, idx) => (
          <li key={idx}>
            <Link
              to={`/${item.replace(/\s+/g, "-")}`}
              className=" text-black px-4 py-2 text-sm font-semibold hover:bg-orange-500"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default navbar;
