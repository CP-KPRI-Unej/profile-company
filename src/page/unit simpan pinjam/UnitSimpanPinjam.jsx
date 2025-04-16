import Navbar from "../utils/navbar";
import Footer from "../utils/footer";

function UnitSimpanPinjam() {
  return (
    <div
      id="profile"
      className="min-h-screen font-sans justify-center flex flex-wrap"
    >
      <Navbar></Navbar>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">SIMPANAN</h1>
          <ol className="list-decimal text-sm text-justify text-black">
            <li className="font-bold">
              Simpanan Pokok
              <span className="font-normal">
                , simpanan yang di bayar satu kali selama menjadi anggota.
                Besarnya simpanan bergantung dari hasil kesepakatan pengurus dan
                anggota koperasi. Simpanan hanya bisa di ambil kembali ketika
                keluar dari keanggotaan Koperasi. Untuk saat ini Simpanan pokok
                untuk menjadi anggota KP-RI Universitas Jember sebesar Rp.
                100.000
              </span>
            </li>
            <li className="font-bold">
              Simpanan Wajib
              <span className="font-normal">
                , Untuk Layanan Simpan Pinjam bertempat di Kantor Koperasi KPRI
                UNEJ Jl. Sumatra 101 A Jember , jam layanan : Jam 08.00 – 13.30
                ( untuk hari Senin – Jum’at) , untuk hari sabtu layanan hanya
                setengah hari , jam 08.00 – 10.30 , dan untuk Hari Minggu dan
                tanggal Merah layanan Simpan Pinjam Tutup.simpanan yang wajib di
                bayar sebulan sekali. Besarnya simpanan bergantung dari hasil
                kesepakatan pengurus dan anggota koperasi, untuk saat ini
                Simpanan wajib bagi anggota KP-RI Unej sebesar :
                <ul className="list-inside list-disc">
                  <li>Golongan I : Rp. 70.000</li>
                  <li>Golongan II : Rp. 100.000</li>
                  <li>Golongan III : Rp. 125.000</li>
                  <li>Golongan IV : Rp. 200.000</li>
                  <li>Honorer : Rp. 50.000</li>
                </ul>
              </span>
            </li>
            <li className="font-bold">
              Simpanan Khusus
              <span className="font-normal">
                , simpanan yang besarnya tidak di tentukan, tetapi bergantung
                kepada kemampuan anggota. Simpanan sukarela dapat di setorkan
                setiap saat tetapi hanya bisa diambil sesuai jangka waktu
                tertentu ( 1 tahun) , dengan jasa bersaing per Tahun
              </span>
            </li>
            <li className="font-bold">
              Simpanan Sukarela
              <span className="font-normal">
                , simpanan yang besarnya tidak di tentukan, tetapi bergantung
                kepada kemampuan anggota, Simpanan sukarela dapat diambil hanya
                pada jangka waktu tertentu, dengan ketentuan jasa :
                <ul className="list-inside list-disc">
                  <li>Simpanan periode 6 Bulan</li>
                  <li>Simpanan periode 12 Bulan (1 tahun)</li>
                </ul>
              </span>
            </li>
            <li className="font-bold">
              Tabungan Hari Raya
              <span className="font-normal">
                , Tabungan rutin bulanan yang akan dipotongkan kepada Anggota
                yang memilih produk ini, dengan besaran yang tetap, dan hanya
                bisa dibagi / diambil menjelang Hari Raya idul fitri.
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="flex flex-col w-full justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">PINJAMAN</h1>
          <ol className="list-decimal text-sm text-justify text-black">
            <li className="font-bold">
              Pinjaman Uang
              <span className="font-normal">
                : Berupa layanan pinjaman untuk anggota KP-RI UNEJ yang
                diterimakan dalam bentuk uang, dengan maksimal pinjaman sebesar
                350 Juta dan maksimal angsuran selama 15 Tahun (180 Bulan),
                dengan syarat dan ketentuan berlaku (untuk PNS dan HR), jasa
                pinjaman 0,75 % perbulan.
              </span>
            </li>
            <li className="font-bold">
              Pinjaman Barang
              <span className="font-normal">
                : Berupa layanan pinjaman untuk anggota KP-RI UNEJ yang
                diterimakan dalam bentuk pembayaran barang, semisal sepeda
                motor, mobil, alat elektronik dan lainnya (bisa dibeli di toko /
                dealer manapun), dengan maksimal pinjaman sebesar 350 Juta dan
                maksimal angsuran selama 15 Tahun (180 Bulan), dengan syarat dan
                ketentuan berlaku (untuk PNS dan HR) jasa pinjaman 0,75 %
                perbulan.
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="flex flex-col justify-center pt-14 pb-3 text-center px-4 relative">
        <div className="w-3/4 m-auto flex flex-col gap-4 bg-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            DANA SOSIAL
          </h1>
          <p className="text-sm font-bold text-justify text-black">
            KEPUTUSAN PENGURUS <br /> KOPERASI PEGAWAI REPUBLIK INDONESIA
            (KP-RI) UNIVERSITAS JEMBER <br /> NOMOR : 169/40.22/G/XI/2018 <br />{" "}
            TENTANG <br /> DANA SOSIAL KP-RI UNIVERSITAS JEMBER <br /> KETUA
            KP-RI UNIVERSITAS JEMBER,
          </p>
          <p className="font-bold text-justify">
            Menimbang
            <span className="font-normal">
              : bahwa berdasarkan Keputusan Rapat Anggota Rencana Kerja (RARK)
              Tahun Buku 2019 dan peningkatan kinerja KP-RI Universitas Jember
              yang ditandai dengan peningkatan perolehan Sisa Hasil Usaha (SHU),
              maka dipandang perlu untuk meninjau ulang dana sosial bagi
              anggota;bahwa berdasarkan pertimbangan sebagaimana dimaksud pada
              huruf a di atas, maka penyesuaian jumlah dana sosial bagi anggota
              perlu ditetapkan dengan keputusan pengurus;
            </span>
          </p>
          <p className="font-bold text-justify">
            Mengingat
            <span className="font-normal">
              : Undang-Undang Nomor 25 Tahun 1992 tentang Perkoperasian;Anggaran
              Dasar KP-RI Universitas Jember;Anggaran Rumah Tangga KP-RI
              Universitas Jember;Keputusan Pengurus Nomor 016/40.22/G/I/2016;
            </span>
          </p>
          <p className="font-bold text-left">Menetapkan :</p>
          <ol className="list-decimal text-justify pl-4">
            <li>
              Dana Sosial KP-RI Universitas Jember dipergunakan untuk : Uang
              duka wafat/kematian;Bantuan rawat inap;Sumbangan/bantuan untuk
              bencana alam, yayasan/badan/rumah sosial, peringatan hari besar
              keagamaan dan kepentingan sosial lain berdasarkan keputusan rapat
              pengurus.
            </li>
            <li>
              Dana sosial sebagaimana dimaksud pada diktum kesatu keputusan ini,
              diberikan kepada anggota biasa dan anggota luar biasa dengan
              ketentuan : a. Uang duka wafat/kematian : 1. Anggota Rp.
              2.000.000.- (Dua Juta Rupiah) 2. Suami/isteri/anak sah anggota
              (yang tercantum di daftar gaji/ model c) Rp. 1.000.000.- (Satu
              Juta Rupiah). b. Bantuan rawat inap : 1. Anggota maksimal Rp.
              500.000.- (Lima Ratus Ribu Rupiah); 2. Suami/isteri/anak sah
              anggota (yang tercantum di daftar gaji/model c) maksimal
              Rp.300.000.- (Tiga Ratus Ribu Rupiah); c. Sumbangan/bantuan untuk
              bencana alam, yayasan/badan/rumah sosial, peringatan hari besar
              keagamaan dan kepentingan sosial lain ditetapkan berdasarkan
              keputusan rapat pengurus.
            </li>
            <li>
              Bantuan rawat inap sebagaimana dimaksud diktum kesatu huruf b
              keputusan ini diberikan hanya 1 (satu) kali dalam setahun untuk
              anggota atau suami/isteri/anak sah anggota (yang tercantum di
              daftar gaji/model c).
            </li>
            <li>
              Tata cara pengajuan dana sosial diatur tersendiri dengan surat
              edaran pengurus.
            </li>
            <li>
              Dengan ditetapkannya keputusan ini maka keputusan pengurus yang
              bertentangan dengan keputusan ini dinyatakan tidak berlaku.
            </li>
            <li>
              Keputusan ini berlaku terhitung mulai tanggal 1 Januari 2019
              dengan ketentuan apabila dikemudian hari terdapat kekeliruan dalam
              keputusan ini akan diperbaiki sebagaimana mestinya.
            </li>
          </ol>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default UnitSimpanPinjam;
