import "../landing page/LandingPage.css";
import Info from "../../assets/info.png";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function Profil() {
    return (
      <div className="min-h-screen bg-white font-sans justify-center flex flex-wrap">
        <Navbar></Navbar>
        <section className="pt-32 pb-8 text-center px-4 relative">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            Testing
          </h1>
          <p className="text-sm text-orange-400">
            KPRI Universitas Jember, sejak 1979, berupaya meningkatkan
            kesejahteraan anggota dan masyarakat melalui koperasi, layanan prima,
            dan peran dalam pembangunan nasional.
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-center gap-16 px-4 py-10">
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
        <section className="w-full py-10 px-6">
          <h2 className=" text-orange-400 text-4xl font-bold text-center mb-6">
            INFO
          </h2>
          <div className=" bg-orange-400 flex flex-col md:flex-row text-left gap-6">
            <img
              src={Info}
              alt="Koperasi KPRI"
              className="w-full md:w-1/3 h-80 rounded shadow-md"
            />
            <div className="flex-2 text-sm pt-8">
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
        <section className="py-10 px-4 w-full">
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
                <div className="bg-white border-black shadow-md rounded-lg p-10 w-full h-60 mx-2 flex flex-col justify-between">
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
          <div className="border-2 border-orange-400 rounded-xl p-6 max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-sm text-blue-700">
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
        <Footer></Footer>
      </div>
    );
  }
  
  export default Profil;
  