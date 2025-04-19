import "./UnitJasa.css";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
import UnitJasa1 from "../../assets/unit-jasa.png";
import UnitJasa2 from "../../assets/unit-jasa-2.png";
import "@splidejs/react-splide/css";

function UnitJasa() {
  return (
    <div
      id="profile"
      className="min-h-screen font-sans justify-center flex flex-wrap"
    >
      <Navbar></Navbar>
      <section className="flex flex-col w-full justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 pb-4 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            JASA UMUM DAN PPOB
          </h1>
          <div className="flex gap-8">
            <img
              src={UnitJasa1}
              alt="Cooperative Officials"
              className="w-80 object-cover rounded-s-3xl rounded-e-3xl"
            />
            <ol className="list-decimal text-sm text-justify text-black mt-5">
              <li>
                Jasa Pembayaran PPOB (Listrik, PDAM, Telepon, BPJS, Pulsa, dll)
              </li>
              <li>Jasa Layanan Tiket Kereta Api</li>
              <li>
                Jasa Sewa Aula, Sewa Tempat Outdor, dan Cafe
              </li>
              <li>Jasa Pengurusan STNK</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center pt-3 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <img
            src={UnitJasa2}
            alt="Cooperative Officials"
            className="w-full mb-4 object-cover rounded-s-3xl rounded-e-3xl m-auto"
          />
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            JASA RENTAL KENDARAAN DAN PUJASERA
          </h1>
          <p className="text-sm text-justify text-black">
            Koperasi KPRI UNEJ juga menyediakan layanan sewa atau rental
            Kendaraan, untuk umum dan anggota ( khusus anggota akan mendapatkan
            harga sewa khusus ) . Armada yang tersedia di Koperasi KPRI UNEJ
            untuk saat ini tersedia 2 unit Toyota Hi-Ace ( include driver ) .
            Selain layanan rental kendaraan , Koperasi KPRI UNEJ juga mempunyai
            tempat / lapak Pujasera yang disewakan untuk umum dan anggota. untuk
            info sewa dan rental ,{" "}
            <span className="font-bold">
              Hubungi : Sdr. Agus Praptomo, 0852-3682-7345
            </span>
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default UnitJasa;
