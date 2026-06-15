"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      subtitle: "PROFESSIONAL",
      title: "VIDEO PRODUCTION",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/11/pbokepuiqgmlaczczfmx1.jpg",
      link: "#",
    },
    {
      id: 2,
      subtitle: "CREATIVE",
      title: "PHOTOGRAPHY",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/ebe708e3-7864-45f8-b7c6-4efaec1b19371.jpg",
      link: "#",
    },
    {
      id: 3,
      subtitle: "CINEMATIC",
      title: "EDITING",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/Mac-Two-Computers-Display.jpg",
      link: "#",
    },
    {
      id: 4,
      subtitle: "EXCLUSIVE",
      title: "CORPORATE EVENTS",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/a8b00388-72df-4154-ac5b-e469b6968b84.jpeg",
      link: "#",
    },
    {
      id: 5,
      subtitle: "ENGAGING",
      title: "CAR DEALERSHIP VIDEOS",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/87d2047b-a769-426a-8539-3d0b3f8f7a01-scaled.jpeg",
      link: "#",
    },
    {
      id: 6,
      subtitle: "DYNAMIC",
      title: "CONTENT FOR SOCIAL MEDIA",
      image: "https://finalcutmultimedia.com/wp-content/uploads/2025/10/1000_F_85861337_0ZeiHG0IC2vPZrQd26KT9SDj4LU9O4fF-1.webp",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] py-[10vh] px-[5vw]">
      
      {/* সেকশন হেডার */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-[4vh] mb-[8vh]">
        <div className="w-full md:w-1/2">
          <span className="text-gray-400 text-[3.5vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium block mb-[2vh]">
            Our Creative Services
          </span>
          <h2 className="text-white text-[7vw] md:text-[3vw] font-bold uppercase leading-tight">
            Tailored Multimedia Solutions To Bring Your Vision To Life
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 flex md:justify-end">
          <Link 
            href="#all-services" 
            className="flex items-center gap-[1vw] text-white text-[3.5vw] md:text-[1vw] font-bold tracking-[0.2em] uppercase hover:text-[#D4AF37] transition-colors"
          >
            MORE SERVICES 
            <svg className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ২-কলাম সার্ভিস গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vh] md:gap-[1.5vw]">
        {services.map((item) => (
          <Link 
            href={item.link} 
            key={item.id} 
            className="relative w-full h-[40vh] md:h-[50vh] group block overflow-hidden bg-black"
          >
            {/* ব্যাকগ্রাউন্ড ইমেজ (ডিফল্ট Grayscale) */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-in-out group-hover:scale-105"
            />

            {/* ডিফল্ট ডার্ক ওভারলে (মাউস নেওয়ার আগে) */}
            <div className="absolute inset-0 bg-black/60 group-hover:opacity-0 transition-opacity duration-500 z-0"></div>

            {/* হোভার গোল্ড ওভারলে (রেফারেন্স ৩ নং ছবির মতো সোনালী রঙ) */}
            <div className="absolute inset-0 bg-[#D4AF37]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-in-out z-0"></div>

            {/* অ্যানিমেটেড ফ্রেম এবং টেক্সট কনটেইনার */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              
              {/* এই বক্সটির ভেতরেই বর্ডার অ্যানিমেশনটি হবে */}
              <div className="relative flex flex-col items-center justify-center w-[85%] h-[55%] md:h-[50%]">
                
                {/* ১. উপরের লাইন (মাউস নিলে কালার চেঞ্জ হয়ে ফুল উইডথ হবে) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[0.4vh] md:h-[0.2vh] w-[40%] bg-[#D4AF37] group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>
                
                {/* ২. নিচের লাইন (মাউস নিলে কালার চেঞ্জ হয়ে ফুল উইডথ হবে) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.4vh] md:h-[0.2vh] w-[40%] bg-[#D4AF37] group-hover:bg-white/90 group-hover:w-full transition-all duration-[400ms] ease-in-out"></div>

                {/* ৩. বাম দিকের লাইন (উপর-নিচের লাইন শেষ হওয়ার পর ഇത് উপর থেকে নিচে নামবে) */}
                <div className="absolute top-0 left-0 w-[0.4vw] md:w-[0.15vw] h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                {/* ৪. ডান দিকের লাইন (বাম দিকের মতই একসাথে নিচে নামবে) */}
                <div className="absolute top-0 right-0 w-[0.4vw] md:w-[0.15vw] h-0 bg-white/90 group-hover:h-full transition-all duration-[400ms] ease-in-out delay-[300ms]"></div>

                {/* ভেতরের টেক্সট */}
                <span className="text-white text-[3vw] md:text-[1vw] font-medium tracking-[0.3em] uppercase mb-[1.5vh] drop-shadow-md z-10 transition-transform duration-[400ms] group-hover:-translate-y-[1vh]">
                  {item.subtitle}
                </span>
                <h3 className="text-white text-[6vw] md:text-[2.2vw] font-bold tracking-wider uppercase text-center px-[2vw] drop-shadow-lg leading-tight z-10 transition-transform duration-[400ms] group-hover:-translate-y-[1vh]">
                  {item.title}
                </h3>

              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </section>
  );
}