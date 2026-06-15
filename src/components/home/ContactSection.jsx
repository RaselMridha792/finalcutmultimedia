"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <>
      {/* ==================== CONTACT FORM SECTION (DARK) ==================== */}
      <section className="relative w-full py-[15vh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* কন্টাক্ট ব্যাকগ্রাউন্ড ইমেজ এবং ডার্ক ওভারলে */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/openart-image__TppSKgk_1759689640429_raw.jpg"
            alt="Contact Background"
            fill
            className="object-cover object-center"
            unoptimized
          />
          {/* ডার্ক ওভারলে */}
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>

        {/* কন্টাক্ট ফর্ম কন্টেইনার */}
        <div className="relative z-10 w-full max-w-[90vw] md:max-w-[60vw] flex flex-col items-center">
          
          {/* হেডার */}
          <div className="flex flex-col items-center text-center mb-[8vh]">
            <span className="text-gray-400 text-[3vw] md:text-[0.9vw] tracking-[0.2em] uppercase font-medium mb-[1.5vh]">
              CONTACT US
            </span>
            <div className="flex items-center gap-[1.5vw]">
              <div className="w-[0.8vw] md:w-[0.2vw] h-[4vh] bg-[#D4AF37]"></div>
              <h2 className="text-white text-[8vw] md:text-[4vw] font-black tracking-widest uppercase leading-none">
                GET IN TOUCH
              </h2>
            </div>
          </div>

          {/* ফর্ম (আন্ডারলাইন স্টাইল ইনপুট) */}
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[4vw] gap-y-[5vh]">
            
            <div className="w-full">
              <input 
                type="text" 
                placeholder="FIRST NAME" 
                className="w-full bg-transparent border-b-[0.2vw] md:border-b-[0.1vw] border-white/40 text-white text-[3.5vw] md:text-[0.9vw] py-[1.5vh] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-500 uppercase tracking-widest"
              />
            </div>

            <div className="w-full">
              <input 
                type="text" 
                placeholder="LAST NAME" 
                className="w-full bg-transparent border-b-[0.2vw] md:border-b-[0.1vw] border-white/40 text-white text-[3.5vw] md:text-[0.9vw] py-[1.5vh] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-500 uppercase tracking-widest"
              />
            </div>

            <div className="w-full">
              <input 
                type="tel" 
                placeholder="PHONE NO." 
                className="w-full bg-transparent border-b-[0.2vw] md:border-b-[0.1vw] border-white/40 text-white text-[3.5vw] md:text-[0.9vw] py-[1.5vh] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-500 uppercase tracking-widest"
              />
            </div>

            <div className="w-full">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b-[0.2vw] md:border-b-[0.1vw] border-white/40 text-white text-[3.5vw] md:text-[0.9vw] py-[1.5vh] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-500 uppercase tracking-widest"
              />
            </div>

            <div className="w-full md:col-span-2">
              <input 
                type="text" 
                placeholder="MESSAGE" 
                className="w-full bg-transparent border-b-[0.2vw] md:border-b-[0.1vw] border-white/40 text-white text-[3.5vw] md:text-[0.9vw] py-[1.5vh] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-500 uppercase tracking-widest"
              />
            </div>

            <div className="w-full md:col-span-2 flex justify-center mt-[4vh]">
              <button 
                type="button"
                className="border-[0.3vw] md:border-[0.1vw] border-white text-white font-bold text-[3.5vw] md:text-[0.9vw] tracking-[0.2em] uppercase px-[10vw] py-[2vh] md:px-[5vw] md:py-[1.5vh] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300"
              >
                SEND
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* ==================== WHITE LOGO BAR (Reference Image) ==================== */}
      <div className="w-full bg-white py-[6vh] md:py-[5vh] flex items-center justify-center">
        <div className="flex items-center gap-[2vw] md:gap-[1vw]">
          
          {/* ভার্টিক্যাল সোনালী লাইন */}
          <div className="w-[0.8vw] md:w-[0.2vw] h-[6vh] md:h-[5vh] bg-[#D4AF37]"></div>
          
          {/* লোগো এবং নাম */}
          <div className="flex items-center gap-[2vw] md:gap-[1vw]">
            {/* লোগো ইমেজ */}
            <div className="relative w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw]">
              <Image
                src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
                alt="Final Cut Multimedia Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            
            {/* কোম্পানির নাম (ডার্ক টেক্সট যাতে সাদা ব্যাকগ্রাউন্ডে ফুটে ওঠে) */}
            <div className="flex flex-col justify-center">
              <span className="text-black text-[6vw] md:text-[2vw] font-black leading-none tracking-tight">
                FINAL CUT
              </span>
              <span className="text-black text-[2.5vw] md:text-[0.75vw] tracking-[0.3em] font-bold mt-[0.5vh] uppercase">
                MULTIMEDIA
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}