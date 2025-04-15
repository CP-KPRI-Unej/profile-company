import "./GeraiLayanan.css";
import Info from "../../assets/info.png";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function GeraiLayanan() {
  return (
    <div
      id="profile"
      className="min-h-screen font-sans justify-center flex flex-wrap"
    >
      <Navbar></Navbar>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            LAYANAN ANGGOTA
          </h1>
          <ol className="list-decimal text-sm text-justify text-black">
            <li className="font-bold">
              Layanan Toko
              <span className="font-normal">
                , Layanan Toko Koperasi KPRI UNEJ berada di Jl. Kalimantan 27
                Jember dan Jl. Sumatra 101 A Jember , buka pada : jam 08.00 –
                21.00 ( untuk hari Senin – Sabtu ) khusus hari Minggu Buka jam
                09.00 – 15.00 wib. Unit Toko Koperasi KPRI UNEJ juga melayani
                pembayaran kredit, wajib belanja atau voucer ( khusus anggota )
                , juga melayani pesan antar .
              </span>
            </li>
            <li className="font-bold">
              Layanan Simpan Pinjam
              <span className="font-normal">
                , Untuk Layanan Simpan Pinjam bertempat di Kantor Koperasi KPRI
                UNEJ Jl. Sumatra 101 A Jember , jam layanan : Jam 08.00 – 13.30
                ( untuk hari Senin – Jum’at) , untuk hari sabtu layanan hanya
                setengah hari , jam 08.00 – 10.30 , dan untuk Hari Minggu dan
                tanggal Merah layanan Simpan Pinjam Tutup.
              </span>
            </li>
            <li className="font-bold">
              Layanan Pendaftaran Anggota Baru
              <span className="font-normal">
                , untuk layanan Pendaftaran Anggota Baru, form pendaftaran bisa
                di download di web : www.kpriunej.com , untuk syarat dan
                ketentuan sudah tertera di formulir pendaftaran. Pelayanan
                Anggota baru hanya bisa di lakukan pada jam kerja aktiv : jam
                08.00 – 13.30 ( senin – sampai Jum’at )
              </span>
            </li>
            <li className="font-bold">
              Layanan Unit Jasa dan Rental
              <span className="font-normal">
                , Untuk unit jasa pembayaran PPOB dan rekening lainnya anggota
                bisa membayarkan di loket Koperasi KPRI UNEJ baik secara
                langsung maupun lewat potong gaji bulanan. sedang untuk unit
                sewa kendaraan dan ruko bisa langsung datang ke Kantor Koperasi
                KPRI UNEJ Jl. Sumatra.
              </span>
            </li>
            <li className="font-bold">
              Layanan Umum Lainnya
              <span className="font-normal">
                , meliputi : Layanan Keluhan anggota, Layanan Dana Sosial dan
                Tali asih . Anggota Koperasi KPRI UNEJ bisa menghubungi langsung
                perwakilan yang sudah ditunjuk di tiap masing masing unit kerja.
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="flex flex-col w-full justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            LAYANAN UMUM
          </h1>
          <ol className="list-decimal text-sm text-justify text-black">
            <li className="font-bold">Pembayaran Listrik</li>
            <li className="font-bold">
              Pembayaran Tagihan TELKOM (Telepon, Speedy, dll)
            </li>
            <li className="font-bold">
              Pembayaran Tagihan Telkomsel (Paket HALO)
            </li>
            <li className="font-bold">Pembayaran Tagihan PDAM</li>
            <li className="font-bold">Penjualan Voucher Listrik TOKEN</li>
            <li className="font-bold">Pembayaran Tagihan INDOVISION</li>
          </ol>
        </div>
      </section>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            LAYANAN PERWAKILAN
          </h1>
          <p className="text-sm text-justify text-black">
            Koperasi Pegawai Republik Indonesia Universitas Jember (KP-RI UNEJ)
            didirikan pada 2 Agustus 1979 dengan nama awal Koperasi Pegawai
            Negeri Universitas Jember (KPN-UNEJ). Tujuan utama pendiriannya
            adalah untuk membantu masalah keuangan serta meningkatkan
            kesejahteraan tenaga dosen dan tenaga administrasi di lingkungan
            Universitas Jember.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default GeraiLayanan;
