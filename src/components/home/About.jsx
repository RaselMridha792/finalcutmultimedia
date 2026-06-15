import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-[#0A0A0A] overflow-hidden">
      
      {/* বাম পাশ: কন্টেন্ট এবং ওয়াটারমার্ক লোগো */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 xl:px-32 z-10 min-h-[50vh] lg:min-h-screen">
        
        {/* ব্যাকগ্রাউন্ড লোগো (ওয়াটারমার্ক ইফেক্ট) */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 w-[120%] h-[120%] opacity-[0.03] pointer-events-none z-0">
          <Image
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/FINALCUT-LOGO-23582.png"
            alt="Final Cut Background Watermark"
            fill
            className="object-contain"
          />
        </div>

        {/* মূল কন্টেন্ট (টেক্সট এবং বাটন) */}
        <div className="relative z-10">
          <span className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
            About Us
          </span>
          
          <div className="flex items-center gap-4 mt-3 mb-8 md:mb-10">
            {/* সোনালী ভার্টিক্যাল লাইনটি এখন পিক্সেলের বদলে vh ইউনিটে রেসপন্সিভ (w-[0.2vw] h-[5vh]) */}
            <div className="w-[0.2vw] min-w-[2px] h-[5vh] bg-[#D4AF37]"></div>
            <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold tracking-wide uppercase leading-tight">
              Final Cut <br className="hidden lg:block xl:hidden" /> Multimedia
            </h2>
          </div>

          {/* প্যারাগ্রাফ টেক্সট */}
          <div className="space-y-6 text-[#A0A0A0] text-sm md:text-base leading-relaxed font-light pr-0 xl:pr-10">
            <p>
              Final Cut Multimedia stands as a dynamic, high-performing leader in the global video production and photography sector. Based in Charlotte, NC, we consistently achieve record-shattering results and rank among the top creative agencies in the region.
            </p>
            <p>
              Our portfolio includes extensive work across corporate videography, real estate video tours, event coverage, and documentary production. We provide unparalleled cinematic experiences tailored to our clients unique visions.
            </p>
            <p>
              This success is underpinned by extensive experience and a robust network of creative professionals. Final Cut Multimedia is renowned for its ability to effectively shoot, edit, and market the most stunning visuals.
            </p>
          </div>

          {/* Read More বাটন (পিক্সেল বা rem প্যাডিং ছাড়া, সম্পূর্ণ vh/vw ভিত্তিক) */}
          <Link 
            href="#about-details" 
            className="inline-flex items-center justify-center mt-10 
                       w-[50vw] sm:w-[30vw] md:w-[22vw] lg:w-[16vw] xl:w-[12vw]
                       h-[6vh] sm:h-[7vh] md:h-[5.5vh]
                       border border-white/50 text-white text-xs font-semibold tracking-[0.2em] uppercase 
                       transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* ডান পাশ: ক্লায়েন্টের ছবি */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/488528975_2472962053040791_5356663683752375839_n.jpg"
          alt="Final Cut Multimedia Team"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
  );
}