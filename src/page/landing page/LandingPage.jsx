import "./LandingPage.css";
import Info from "../../assets/info.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans justify-center flex flex-wrap">
      <nav className="w-full bg-white shadow-md py-4 fixed top-0 z-50">
        <ul className="flex justify-center flex-wrap gap-3 px-4">
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
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="pt-32 pb-8 text-center px-4 relative">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">
          KPRI Universitas Jember
        </h1>
        <p className="text-sm text-orange-400">
          KPRI Universitas Jember, sejak 1979, berupaya meningkatkan
          kesejahteraan anggota dan masyarakat melalui koperasi, layanan prima,
          dan peran dalam pembangunan nasional.
        </p>

        <div className="absolute top-10 left-10 w-16 h-16 bg-green-700" />
        <div className="absolute top-20 left-4 w-12 h-12 border-2 border-green-600 rounded-full" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-green-700 rotate-45" />
      </section>
      <section className="flex flex-col md:flex-row justify-center gap-6 px-4 py-10">
        <div className="border-2 border-orange-400 rounded-xl p-2 w-full md:w-1/3 md:h-72 shadow flex flex-col justify-center">
          <h2 className="text-xl font-bold text-center">VISI</h2>
          <p className="text-center text-gray-700 text-sm  m-auto">
            “Menjadi Koperasi Terbaik Dalam Mensejahterakan Anggota dan Bermitra
            Dengan Stakeholders”
          </p>
        </div>
        <div className="border-2 border-orange-400 rounded-xl p-2 w-full md:w-1/3 md:h-72 shadow flex flex-col justify-center ">
          <h2 className="text-xl font-bold text-center">MISI</h2>
          <ol className="list-decimal text-sm text-gray-700 m-auto md:pl-5 space-y-1 pl-10 text-left">
            <li>Menyediakan Pelayanan Prima bagi anggota.</li>
            <li>Mewujudkan Sumber Daya Manusia koperasi yang profesional.</li>
            <li>Menyediakan teknologi informasi yang handal.</li>
            <li>Membangun jaringan usaha dengan pihak yang berkompeten.</li>
            <li>Meningkatkan sosial kepada anggota dan masyarakat sekitar.</li>
            <li>Bersinergi dengan perguruan tinggi.</li>
          </ol>
        </div>
      </section>
      <section className="w-5/6 py-10 px-6">
        <h2 className=" text-orange-400 text-4xl font-bold text-center mb-6">
          INFO
        </h2>
        <div className=" bg-orange-400 flex flex-col md:flex-row text-left gap-6">
          <img
            src={Info}
            alt="Koperasi KPRI"
            className="w-full md:w-1/3 h-80 rounded shadow-md"
          />
          <div className="flex-1 text-sm pt-8">
            <h3 className="font-bold text-lg mb-5">
              KOPERASI KPRI UNEJ ADALAH SALAH SATU KOPERASI PERCONTOHAN TERBAIK
              DI INDONESIA
            </h3>
            <p className="pr-3">
              Koperasi KPRI UNEJ saat ini sudah berusia 45 tahun. Koperasi yang
              didirikan sejak tahun 1979 dan disahkan secara Badan Hukum sejak
              1980, adalah salah satu koperasi yang...
            </p>
            <div className="flex justify-end pr-5">
              <button className="text-right mt-5 px-4 py-2 bg-white text-orange-500 rounded-full text-sm font-semibold hover:bg-gray-100">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 w-5/6">
        <h2 className="text-center text-2xl font-bold text-orange-500 mb-6">
          BERITA TERKINI
        </h2>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            arrows: true,
            pagination: false,
            gap: "1rem",
          }}
          extensions={{ AutoScroll }}
          aria-label="Informasi Terbaru"
        >
          {[
            {
              title:
                "PENINGKATAN KAPASITAS PENGELOLA KPRI UNEJ UNTUK KOPERASI YANG MANDIRI DAN BERKELAS",
              text: "Pelatihan dan peningkatan kapasitas Pengelola KPRI UNEJ...",
            },
            {
              title:
                "PENANDATANGANAN KERJA SAMA ANTARA KOPERASI UNEJ DENGAN MITRA",
              text: "Pada Rabu pagi, 3 Juli 2024, telah diadakan penandatanganan kerja sama...",
            },
            {
              title: "PELATIHAN KEUANGAN DIGITAL UNTUK ANGGOTA KPRI UNEJ",
              text: "Memberikan edukasi keuangan digital untuk anggota koperasi...",
            },
          ].map((item, idx) => (
            <SplideSlide className={"p-2"} key={idx}>
              <div className="bg-white border-black shadow-md rounded-lg p-4 w-full h-full mx-2">
                <h4 className="text-orange-500 font-bold text-sm mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm mb-2">{item.text}</p>
                <button className="bg-orange-400 text-white px-3 py-1 text-sm rounded hover:bg-orange-500">
                  Read More
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>
      <section className="py-10 w-full bg-white text-center px-4">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">DOWNLOAD</h2>
        <div className="border-2 border-orange-400 rounded-xl p-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm text-blue-700">
          {[
            "Form Pengajuan Kredit Uang",
            "Form Pengajuan Kredit Barang",
            "Form Pendaftaran Anggota Baru",
            "Tabel Angsuran Pinjaman Uang 350 Juta",
            "Tabel Angsuran Pinjaman Barang 350 Juta",
            "Tabel Angsuran Pinjaman 300 Juta",
            "Form Pengajuan Dana Sosial Rawat Inap",
            "Form Pengunduran Diri Anggota",
            "Form Belanja Bulanan",
            "Form Pinjaman Khusus",
          ].map((text, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:underline hover:text-blue-900"
            >
              {text}
            </a>
          ))}
        </div>
      </section>
      <section className="w-full relative py-10 bg-white">
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-10">
          <div className="flex space-x-4">
            <div className="w-10 h-10 border-2 border-green-700" />
            <div className="w-10 h-10 bg-green-600 rotate-45" />
            <div className="w-8 h-8 border-2 rounded-full border-green-700" />
          </div>
          <div className="flex space-x-2 items-center">
            <span className="w-3 h-3 bg-green-700 rounded-full" />
            <span className="w-3 h-3 bg-orange-400 rounded-full" />
            <span className="w-3 h-3 bg-orange-400 rounded-full" />
            <span className="w-3 h-3 bg-orange-400 rounded-full" />
          </div>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-green-700" />
            <div className="w-10 h-10 border-2 border-green-700 rotate-45" />
            <div className="w-8 h-8 border-2 rounded-full border-green-700" />
          </div>
        </div>
      </section>
      <footer className="text-center text-xs text-orange-500 pt-8 bg-white">
        © 2025 KOPERASI KPRI UNIVERSITAS JEMBER
      </footer>
    </div>
  );
}

export default LandingPage;
