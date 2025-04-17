import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import UnitToko1 from "../../assets/unit-toko.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Produk from "../../assets/produk.png";
import Produk1 from "../../assets/produk-1.png";
import Produk2 from "../../assets/produk-2.png";

function UnitToko() {
  return (
    <div
      id="profile"
      className="min-h-screen font-sans justify-center flex flex-wrap"
    >
      <Navbar></Navbar>

      <section className="flex flex-col justify-center pt-12 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <img
            src={UnitToko1}
            alt="Cooperative Officials"
            className="w-full mb-4 object-cover rounded-s-3xl rounded-e-3xl m-auto"
          />
          <h1 className="text-4xl font-bold text-orange-500 mb-2">PRODUK</h1>
          <p className="text-sm text-justify text-black">
            Produk-produk yang disediakan oleh KP-RI Universitas Jember
            sangatlah beragam dan memliki harga yang bersaing, jenis produk yang
            dijual antara lain :
          </p>
          <p className="font-bold text-left">LANTAI 1 KP-RI UNEJ</p>
          <ol className="list-decimal list-inside text-left">
            <li>
              Kebutuhan pokok (Konsumsi) : merupakan bahan pokok sehari-hari
              seperti Beras, gula, minyak, bumbu-bumbu dapur, mie instan, susu
              bayi, susu dewasa, dll.
            </li>
            <li>
              Kebutuhan pokok (non-konsumsi) : sabun mandi, sabun cuci,
              kosmetik, pembersih ruangan, parfume dan banyak lagi
            </li>
            <li>Snack, softdrink dan makanan ringan</li>
          </ol>
          <p className="font-bold text-left">LANTAI 2 KP-RI UNEJ</p>
          <ol className="list-decimal list-inside text-left">
            <li>
              Peralatan Elektronik : kipas angin, TV, Tape, DVD, Magic com,
              Setrika, Lampu dll
            </li>
            <li>
              Alat-alat listrik : sekering, stop kontak, skakel, kabel listrik,
              adaptor, dll
            </li>
            <li>
              Peralatan rumah tangga : bak mandi bayi, keranjang, alat makan,
              alat kebersihan dll
            </li>
            <li>
              Tekstil : pakaian, kerudung, sarung, mukena, tas, dompet dll
            </li>
          </ol>
          <p className="font-bold text-left">PESANAN PRODUK KHUSUS</p>
          <p className="text-left">
            Untuk memenuhi kebutuhan anggota, KP-RI Universitas Jember juga
            menyediakan produk yang tidak tersedia di koperasi melalui rekanan /
            mitra usaha, beberapa produk yang dilayani antara lain seperti
            komputer, laptop, tablet, alat elektronik berat, sepeda motor,
            mobil, rumah dll.
          </p>
          <h1 className="text-4xl font-bold mt-4 text-orange-500 mb-2">
            PROMO
          </h1>
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
            aria-label="Informasi Terbaru"
          >
            {[
              {
                url: Produk,
                text: "Gula Pasir Rose Brand",
                harga: "Rp 15.000",
            },
            {
                url: Produk1,
                text: "Chi Sparkling Water",
                harga: "Rp 15.000",
            },
            {
                url: Produk2,
                text: "Minyak Goreng Bimoli",
                harga: "Rp 15.000",
              },
            ].map((item, idx) => (
              <SplideSlide className={"p-2 flex flex-col gap-4"} key={idx}>
                <div className="flex flex-col items-center border-2 border-orange-400 rounded-lg py-4">
                  <img
                    src={item.url}
                    alt="Koperasi KPRI"
                    className="w-full md:w-3/4 rounded shadow-md"
                  />
                  <h2 className="text-center font-bold text-green-800">{item.text}</h2>
                  <h2 className="text-center font-bold text-black">{item.harga}</h2>
                </div>
                <div className="flex flex-col items-center border-2 border-orange-400 rounded-lg py-4">
                  <img
                    src={item.url}
                    alt="Koperasi KPRI"
                    className="w-full md:w-3/4 rounded shadow-md"
                  />
                  <h2 className="text-center font-bold text-green-800">{item.text}</h2>
                  <h2 className="text-center font-bold text-black">{item.harga}</h2>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default UnitToko;
