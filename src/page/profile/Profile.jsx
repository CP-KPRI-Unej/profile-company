import "./Profile.css";
import Info from "../../assets/info.png";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function Profil() {
  return (
    <div id="profile" className="min-h-screen font-sans justify-center flex flex-wrap">
      <Navbar></Navbar>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative w-full">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Visi</h1>
        <p className="text-sm text-black">
          “Menjadi Koperasi Terbaik Dalam Mensejahterakan Anggota dan Bermitra
          Dengan Stakeholders”
        </p>
        <h1 className="text-4xl mt-5 font-bold text-orange-500 mb-2">Misi</h1>
        <ol className="list-decimal text-sm  text-black m-auto md:pl-5 space-y-1 pl-10 text-left">
          <li>Menyediakan Pelayanan Prima bagi anggota.</li>
          <li>Mewujudkan Sumber Daya Manusia koperasi yang professional.</li>
          <li>Menyediakan teknologi informasi yang handal.</li>
          <li>Membangun jaringan usaha dengan pihak yang berkepentingan.</li>
          <li>Meningkatkan social kepada anggota dan masyarakat sekitar.</li>
          <li>Bersinergi dengan perguruan tinggi..</li>
        </ol>
      </section>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            SEJARAH SINGKAT
          </h1>
          <p className="text-sm text-justify text-black">
            Koperasi Pegawai Republik Indonesia Universitas Jember (KP-RI UNEJ)
            didirikan pada 2 Agustus 1979 dengan nama awal Koperasi Pegawai
            Negeri Universitas Jember (KPN-UNEJ). Tujuan utama pendiriannya
            adalah untuk membantu masalah keuangan serta meningkatkan
            kesejahteraan tenaga dosen dan tenaga administrasi di lingkungan
            Universitas Jember.
          </p>

          <p className="text-sm text-black text-justify">
            Seiring perkembangannya, keanggotaan koperasi tidak hanya terdiri
            dari Pegawai Negeri Sipil (PNS) tetapi juga non-PNS. Oleh karena
            itu, pada tahun 1993, namanya diubah menjadi Koperasi Pegawai
            Republik Indonesia Universitas Jember (KP-RI UNEJ) agar lebih
            mencerminkan anggotanya secara luas.
          </p>

          <p className="text-sm text-black text-justify">
            Hingga tahun 2013, KP-RI UNEJ menunjukkan perkembangan yang positif,
            ditandai dengan peningkatan partisipasi anggota, jumlah transaksi di
            toko koperasi, serta peningkatan jumlah pinjaman dan simpanan
            sukarela. Keberhasilan ini didukung oleh peningkatan kualitas
            layanan koperasi, sesuai dengan moto "Pelayanan Prima adalah Visi
            Kami, Kepuasan Anda adalah Kebahagiaan Kami."
          </p>

          <p className="text-sm text-black text-justify">
            Selain itu, KP-RI UNEJ juga berperan dalam program Pendidikan Sistem
            Ganda (PSG) dan magang, memberikan kesempatan bagi siswa dan
            mahasiswa di Kabupaten Jember untuk mendapatkan pengalaman dalam
            praktek penjualan, pergudangan, serta pembukuan akuntansi.
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 md:w-3/4 m-auto flex flex-col gap-4">
          <div className="border-2 border-orange-400 rounded-xl p-6 flex flex-col items-center shadow-md space-y-6">
            <h1 className="text-4xl font-bold text-orange-500 mb-4">
              STRUKTUR ORGANISASI
            </h1>
            <div className="shadow-black shadow w-auto p-5 rounded-md bg-white">
              <h2 className="text-orange-500 font-semibold">KETUA</h2>
              <p>Prof. Dr. Yuli Witono, S.TP., MP.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow-black shadow w-auto p-5 rounded-md bg-white">
                <h2 className="text-orange-500 font-semibold">SEKRETARIS</h2>
                <p>Echwan Iriyanto, SH., MH.</p>
              </div>
              <div className="shadow-black shadow w-auto p-5 rounded-md bg-white">
                <h2 className="text-orange-500 font-semibold">BENDAHARA</h2>
                <p>Hadi Paramu, SE., M.BA., Ph.D.</p>
              </div>
            </div>

            <div className="shadow-black shadow w-1/3 p-5 rounded-md bg-white">
              <h2 className="text-orange-500 font-semibold">ANGGOTA</h2>
              <ul className="space-y-1">
                <li>dr. Al Munawir, M.Kes., Ph.D.</li>
                <li>Dr. Ir. Herlina, MP., IPM.</li>
                <li>Dr. Slamet Hariyadi, S.Pd., M.Si.</li>
                <li>Adeharda Boru Sibasopait, SS</li>
              </ul>
            </div>

            <div className="shadow-black shadow w-1/3 p-5 rounded-md bg-white">
              <h2 className="text-orange-500 font-semibold">PENGAWAS</h2>
              <ul className="space-y-1">
                <li>Dr. Adenan, MM.</li>
                <li>Prof. Dr. Hadi Prayitno, M.Kes</li>
                <li>Nur Hisamuddin, SE., M.SA., Ak., CA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 w-full">
        <h2 className="text-center text-2xl font-bold text-orange-500 mb-6">
          GALERI FOTO
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
              url: Info,
            },
            {
              url: Info,
            },
            {
              url: Info,
            },
          ].map((item, idx) => (
            <SplideSlide className={"p-2"} key={idx}>
              <img
                src={item.url}
                alt="Koperasi KPRI"
                className="w-full md:w-3/4 rounded shadow-md"
              />
            </SplideSlide>
          ))}
        </Splide>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Profil;
