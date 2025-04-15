import Kiri from "../../assets/kiri-bawah.png";
import Kanan from "../../assets/kanan-bawah.png";
import './util.css';

function footer() {
  return (
    <>
      <section id="footer" className="w-full relative py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full max-w-full mx-auto px-4">
          <img
            src={Kiri}
            alt="Koperasi KPRI"
            className="h-40 md:h-64 w-auto mb-6 md:mb-0"
          />
          <div className="flex space-x-3 mb-6 md:mb-0">
            {[...Array(4)].map((_, idx) => (
              <span
                key={idx}
                className="w-4 h-4 md:w-5 md:h-5 border-2 border-orange-400 rounded-full"
              />
            ))}
          </div>
          <img
            src={Kanan}
            alt="Koperasi KPRI"
            className="h-40 md:h-64 w-auto"
          />
        </div>
      </section>
      <footer className="text-center text-xs text-orange-500 pt-8">
        © 2025 KOPERASI KPRI UNIVERSITAS JEMBER
      </footer>
    </>
  );
}

export default footer;
