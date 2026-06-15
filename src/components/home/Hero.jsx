import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* ব্যাকগ্রাউন্ড ভিডিও */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source 
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/vide-3.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* ভিডিওর উপর একটি হালকা কালো ওভারলে, যাতে টেক্সট স্পষ্ট বোঝা যায় */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* হিরো কন্টেন্ট */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-[90%] mx-auto mt-16 md:mt-0">
        
        {/* মেইন টাইটেল */}
        <h1 className="text-white font-bold tracking-wider uppercase mb-8 md:mb-10
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.4vh] leading-tight">
          FINAL CUT MULTIMEDIA.
        </h1>

        {/* প্রিমিয়াম বাটন (পিক্সেল বা rem প্যাডিং ছাড়া, সম্পূর্ণ vh/vw ভিত্তিক) */}
        <Link 
          href="#our-work" 
          className="group relative inline-flex items-center justify-center 
                     w-[75vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw]
                     h-[7vh] sm:h-[8vh] md:h-[6vh]
                     border border-white text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase 
                     transition-all duration-500 ease-out overflow-hidden"
        >
          {/* বাটনের ভেতরের টেক্সট */}
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            VIEW OUR EXCLUSIVE WORK
          </span>
          
          {/* হোভার ব্যাকগ্রাউন্ড অ্যানিমেশন */}
          <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
        </Link>
        
      </div>
    </section>
  );
}