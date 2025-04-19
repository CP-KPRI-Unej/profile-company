import "./LandingPage.css";
import Info from "../../assets/info.png";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Gambar1 from "../../assets/gambar1.png";
import Gambar2 from "../../assets/gambar2.png";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function LandingPage() {
  return (
    <div
      id="landingPage"
      className="min-h-screen font-sans justify-center flex flex-wrap"
    >
      <Navbar></Navbar>
      <section className="relative w-full h-[500px] flex items-center bg-cover bg-center bg-[url(/src/assets/hero.png)]">
        <div className="absolute inset-0 w-full"></div>
        <div className="relative z-10 text-white text-left px-4 w-3/4 pl-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            KPRI Universitas Jember untuk Masa Depan yang Lebih Sejahtera
          </h1>
          <p className="text-sm md:text-base max-w-2xl mb-6">
            Solusi keuangan dan kebutuhan harian yang dikelola secara
            profesional dan transparan.
          </p>
          <a
            href="https://wa.me/62xxxxxxxxxxx"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-sm"
          >
            Chat Kami di Whatsapp
          </a>
        </div>
      </section>

      <section className="py-12 h-[550px] mx-auto px-4 mb-5">
        <div className="flex h-full gap-20 justify-center">
          <div className="flex gap-9">
            <div className="h-3/4 w-1/2">
              <img
                src={Gambar1}
                alt="Cooperative Officials"
                className="w-full h-full object-cover rounded-s-3xl rounded-e-3xl"
              />
            </div>
            <div className="h-full w-1/2">
              <img
                src={Gambar2}
                alt="Cooperative Officials"
                className="w-full h-full object-cover rounded-s-3xl rounded-e-3xl"
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-orange-500 text-left text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                Visi
                <div className="flex w-16 gap-1">
                  <hr className="border-2 w-10 border-red-600 rounded-sm" />
                  <hr className="border-2 w-2 border-red-600 rounded-sm" />
                </div>
              </h2>
              <p>
                "Menjadi Koperasi Terbaik Dalam Mensejahterakan Anggota dan
                Bermitra Dengan Stakeholders"
              </p>
            </div>

            <div className="border text-left border-gray-200 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 pb-2 ">
                Misi
                <div className="flex w-16 gap-1">
                  <hr className="border-2 w-10 border-red-600 rounded-sm" />
                  <hr className="border-2 w-2 border-red-600 rounded-sm" />
                </div>
              </h2>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li>Menyediakan Pelayanan Prima bagi anggota.</li>
                <li>
                  Mewujudkan Sumber Daya Manusia koperasi yang profesional.
                </li>
                <li>Menyediakan teknologi informasi yang handal.</li>
                <li>
                  Membangun jaringan usaha dengan pihak yang berkepentingan.
                </li>
                <li>
                  Meningkatkan sosial kepada anggota dan masyarakat sekitar.
                </li>
                <li>Bersinergi dengan perguruan tinggi.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10 px-6">
        <div className=" bg-orange-400 h-[352px] rounded-lg pl-7 grid grid-cols-2 md:flex-row text-left gap-6 overflow-visible relative mx-5">
          <div className="flex-2 text-sm pt-8">
            <h3 className="font-bold text-lg mb-5 text-white">
              KOPERASI KPRI UNEJ ADALAH SALAH SATU KOPERASI PERCONTOHAN TERBAIK
              DI INDONESIA
            </h3>
            <p className="pr-3 text-justify text-white">
              Koperasi Pegawai Republik Indonesia (KPRI) Universitas Jember
              merupakan salah satu koperasi percontohan terbaik di Indonesia
              yang telah berdiri sejak 1979. Dengan layanan simpan pinjam, toko
              kebutuhan harian, dan pengelolaan yang profesional serta
              transparan, KPRI UNEJ berhasil meraih berbagai penghargaan
              nasional dan menjadi inspirasi bagi koperasi lain. Didukung penuh
              oleh civitas akademika Universitas Jember, koperasi ini terus
              berinovasi dan berkembang sebagai koperasi modern yang
              mengedepankan kesejahteraan anggota dan semangat gotong royong.
            </p>
          </div>
          <img
            src={Info}
            alt="Koperasi KPRI"
            className="w-full md:w-1/3 h-auto rounded absolute -right-10 -top-10 "
          />
        </div>
      </section>
      <section className="py-10 px-4 w-full">
        <h2 className="text-center text-2xl font-bold text-orange-500 mb-6">
        Artikel Terbaru
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
      <section className="py-10 w-full text-center px-4">
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

export default LandingPage;
