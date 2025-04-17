import "./Profile.css";
import Info from "../../assets/info.png";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import GambarKiri from "../../assets/profile-kiri.png";
import GambarKanan from "../../assets/profile-kanan.png";
import "@splidejs/react-splide/css";

function Profil() {
  return (
    <div
      id="profile"
      className="min-h-screen font-sans justify-center flex flex-wrap"
    >
      <Navbar></Navbar>
      <section className="flex flex-col justify-center pt-3 pb-3 text-center h-[500px] px-4 relative w-full bg-[url(/src/assets/hero-profile.png)]">
        <h1 className="text-4xl font-bold text-orange-500 mb-2">Visi</h1>
        <p className="text-sm text-black">
          “Menjadi Koperasi Terbaik Dalam Mensejahterakan Anggota dan Bermitra
          Dengan Stakeholders”
        </p>
        <h1 className="text-4xl mt-5 font-bold text-orange-500 mb-2">Misi</h1>
        <ol className="list-decimal text-sm  text-black mx-auto md:pl-5 pl-10 text-left">
          <li>Menyediakan Pelayanan Prima bagi anggota.</li>
          <li>Mewujudkan Sumber Daya Manusia koperasi yang professional.</li>
          <li>Menyediakan teknologi informasi yang handal.</li>
          <li>Membangun jaringan usaha dengan pihak yang berkepentingan.</li>
          <li>Meningkatkan social kepada anggota dan masyarakat sekitar.</li>
          <li>Bersinergi dengan perguruan tinggi.</li>
        </ol>
      </section>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            SEJARAH SINGKAT
          </h1>
          <div className="flex justify-center gap-16 py-8">
            <img
              src={GambarKiri}
              alt="Cooperative Officials"
              className="w-96 h-96 object-cover rounded-s-3xl rounded-e-3xl"
            />
            <img
              src={GambarKanan}
              alt="Cooperative Officials"
              className="w-96 h-96 object-cover rounded-s-3xl rounded-e-3xl"
            />
          </div>
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
