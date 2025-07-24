import React, { useState } from "react";
import menuData from "./menu.json";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 text-center"
      style={{
        backgroundImage: "linear-gradient(100.1deg, rgba(217,157,38,1) 16.8%, rgba(247,213,110,1) 77.3%)",
      }}
    >
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6 text-center">
        <img src="/Logo_pak_mul_page-0001-removebg-preview.webp" alt="Logo UMKM" className="w-32 mx-auto  rounded-full" />
        <h1 className="text-xl font-bold">Keni Cake & Catring</h1>
        <p className="text-sm text-gray-500 mb-4">2C26+M8R, Bakom, Kec. Darma, Kabupaten Kuningan, Jawa Barat 45562</p>

        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63362.32776073986!2d108.4081988!3d-6.9982559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f3f6d1f390c7f%3A0xe94c24037674d483!2sKeni%20Cake%20%26%20Catering!5e0!3m2!1sid!2sid!4v1721625901243!5m2!1sid!2sid"
            className="w-full h-64 rounded-md border border-gray-300"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <a
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20menu%20Anda%20dan%20ingin%20memesan.%20Boleh%20saya%20tahu%20detail%20lebih%20lanjutnya%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md inline-flex items-center justify-center w-full mb-4 transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.9 11.9 0 0012.01 0C5.37 0 0 5.38 0 12a11.89 11.89 0 001.64 6.02L0 24l6.26-1.64A11.91 11.91 0 0012 24c6.63 0 12-5.38 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.46c-1.8 0-3.55-.48-5.1-1.38l-.36-.21-3.71.97.99-3.62-.23-.37A9.5 9.5 0 012.5 12c0-5.24 4.27-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.27 9.5-9.5 9.5zm5.26-7.31c-.29-.14-1.73-.85-2-1s-.47-.14-.66.14-.76 1-1 1.22-.37.2-.66.06a7.84 7.84 0 01-2.3-1.43 8.44 8.44 0 01-1.55-1.9c-.16-.29 0-.45.12-.6.13-.14.29-.37.43-.55a2 2 0 00.29-.48.55.55 0 000-.52c-.14-.15-.66-1.6-.9-2.2-.23-.55-.47-.47-.66-.48h-.56a1 1 0 00-.72.34 3.1 3.1 0 00-.95 2.3c0 1.36 1 2.7 1.13 2.88s2.17 3.31 5.27 4.63c.73.32 1.29.52 1.74.66a4.17 4.17 0 001.87.12c.57-.08 1.73-.7 2-1.36s.24-1.24.17-1.36-.27-.2-.56-.34z" />
          </svg>
          Pesan via WhatsApp
        </a>
        <a
          href="https://www.instagram.com/namapengguna_ig_anda" // Ganti dengan link IG Anda
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md mb-4 inline-flex items-center justify-center w-full transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5.25-.55a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5A3.25 3.25 0 0119.5 7.75v8.5a3.25 3.25 0 01-3.25 3.25h-8.5A3.25 3.25 0 014.5 16.25v-8.5z" />
          </svg>
          Lihat Menu di Instagram
        </a>

        <button onClick={() => setOpen(!open)} className="bg-[#3B82F6] text-white px-4 py-2 hover:bg-[#2563EB] rounded-md w-full font-medium flex items-center justify-center gap-2 transition">
          {open ? (
            <>
              <ChevronUp size={18} />
              Tutup Menu Best Seller
            </>
          ) : (
            <>
              <ChevronDown size={18} />
              Lihat Menu Best Seller
            </>
          )}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              key="accordion"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {menuData && menuData.length > 0 ? (
                menuData.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-lg mb-2 cursor-pointer" onClick={() => setSelectedImage(item.image)} onError={(e) => (e.target.style.display = "none")} />
                    <p className="text-xs text-gray-400 mb-2">Klik gambar untuk melihat lebih jelas</p>
                    <h4 className="text-sm text-gray-500 mb-1">{item.category}</h4>
                    <h3 className="font-bold text-xl text-gray-900 text-center mb-2">{item.name}</h3>
                    <a
                      href={`https://wa.me/${item.wa}?text=Halo%20saya%20mau%20pesan%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-full text-sm transition"
                    >
                      📩 Pesan via WhatsApp
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Menu tidak tersedia.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal untuk menampilkan gambar besar */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
              <motion.img src={selectedImage} alt="Popup" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
