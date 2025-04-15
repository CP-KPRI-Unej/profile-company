import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav className="w-full shadow-md py-4 fixed top-0 z-50">
      <ul className="flex flex-wrap justify-center gap-16 px-1">
        {[
          "Home",
          "Profil",
          "Gerai Layanan",
          "Unit Jasa",
          "Unit Simpan Pinjam",
          "Unit Toko",
          "Info Anggota",
        ].map((item, idx) => (
          <li key={idx}>
            <Link
              to={`/${item.replace(/\s+/g, "-")}`}
              className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500"
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
