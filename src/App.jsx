import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent p-4 backdrop-blur-md shadow-sm">
        <ul className="flex justify-center space-x-4">
          {[
            "Home",
            "About",
            "Services",
            "Portfolio",
            "Team",
            "Blog",
            "Contact",
          ].map((item, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-70 px-4 py-2 rounded-2xl shadow hover:bg-opacity-100 transition"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="pt-32 pb-16 relative flex flex-col items-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 bg-blue-200 rounded-full top-10 left-10 animate-pulse" />
          <div
            className="absolute w-24 h-24 bg-yellow-300 rotate-45 top-20 right-16 animate-spin-slow"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div className="absolute w-40 h-40 bg-pink-200 rounded-full bottom-10 right-32 opacity-70" />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 z-10">
          Selamat Datang di Website Kami
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl z-10">
          Kami adalah perusahaan yang berkomitmen dalam memberikan solusi
          digital terbaik untuk Anda.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 pb-16">
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md max-w-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Visi</h2>
          <p className="text-gray-700">
            Menjadi perusahaan teknologi terdepan yang memberikan dampak positif
            melalui inovasi digital.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl shadow-md max-w-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Misi</h2>
          <p className="text-gray-700">
            Memberikan solusi teknologi yang berkualitas, terpercaya, dan sesuai
            dengan kebutuhan klien kami.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App
