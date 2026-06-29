"use client";
import React, { useEffect } from 'react';
import { Clock, ShieldCheck, Camera, Radio, Users, Handshake } from 'lucide-react';

export default function AboutPage() {
  
  useEffect(() => {
    // 1. Inject native iframe-resizer library globally
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js";
    script.async = true;
    
    script.onload = () => {
      // 2. Initialize resize engine after iframe element gets completely mounted
      if (window.iFrameResize) {
        setTimeout(() => {
          window.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
          }, '#iFrameResizer5');
        }, 30);
      }
    };
    
    document.body.appendChild(script);
    
    // Clean-up loop to protect memory leakage
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Structural typography layout standard variables mapping */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap');
        .altman-serif {
          font-family: 'Cormorant Garamond', serif !important;
        }
        .altman-raleway {
          font-family: 'Raleway', sans-serif !important;
        }
      `}</style>

      <div className="min-h-screen bg-[#060606] text-white antialiased selection:bg-neutral-800 altman-raleway">
        
        {/* SECTION 1: TOP HERO BANNER */}
        <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2020/12/Banner1.jpg')` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 h-full flex justify-between items-end pointer-events-none">
            <div className="w-16 h-[2px] bg-[#d4af37] transform translate-y-[-50px]" />
            <div className="w-16 h-[2px] bg-[#d4af37] transform translate-y-[-50px]" />
          </div>

          <div className="relative z-10 text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-medium block">CINEMATIC LEADERS</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.2em] font-extrabold text-white">
              About Us
            </h1>
          </div>
        </div>

        {/* SECTION 2: BRAND FOCUS GRID */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-4 bg-[#0b0b0b] p-8 sm:p-12 border border-neutral-900">
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-bold block">PHILOSOPHY</span>
              <h3 className="altman-serif text-3xl font-light text-white leading-tight">Capturing Stories Beyond the Frame</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Every photo and video we create is more than just content, it’s a story crafted with vision, passion, and artistry.
              </p>
            </div>

            <div className="space-y-4 bg-[#0b0b0b] p-8 sm:p-12 border border-neutral-900">
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-bold block">STRATEGY</span>
              <h3 className="altman-serif text-3xl font-light text-white leading-tight">A Little More About Us</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                At Final Cut Multimedia we create marketing videos that boost your online presence. Whether it’s for your website, social media, or content strategy. We handle everything from start to finish, making sure your business stands out and attracts more customers.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 3: IMAGE CONTENT ASYMMETRIC SYSTEM SPLIT */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="aspect-[5/6] w-full bg-neutral-900 border border-neutral-800/60 overflow-hidden relative group">
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src="https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2024/06/about-photo1-new.jpg" 
                  alt="Final Cut Multimedia Business Showcase" 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#d4af37]/30 -z-10" />
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">LEADER IN VIDEO PRODUCTION</span>
                <h2 className="altman-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  About Final Cut Multimedia <br />
                  <span className="italic text-neutral-300">We Don’t Just Create Videos. We Create Results.</span>
                </h2>
              </div>
              
              <div className="w-12 h-[1px] bg-neutral-800" />

              <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                <p>
                  At Final Cut Multimedia, we specialize in high-quality video production, photography, and drone videography that help businesses in Charlotte, North Carolina, increase visibility, grow their audience, and boost revenue.
                </p>
                <p>
                  We believe every brand deserves cinematic storytelling that connects with people and converts attention into results. Whether it is a corporate video, promotional commercials, or event photography, our mission is to bring your vision to life with precision and creativity.
                </p>
                <p>
                  Our team combines the art of filmmaking with the strategy of marketing. Every project is built to strengthen your brand identity, improve your online presence, and set you apart from competitors.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 4: OUR STORY */}
        <div className="border-t border-b border-neutral-900/60 bg-gradient-to-b from-[#060606] to-[#0a0a0a] py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-semibold block mb-2">THE FOUNDATION</span>
                <h3 className="altman-serif text-3xl font-light tracking-wide text-white">Our Story</h3>
                <div className="w-10 h-[1px] bg-[#d4af37] mt-4" />
              </div>

              <div className="lg:col-span-8 space-y-6 text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                <p>
                  Founded by <span className="text-white font-medium">Tyrell Scott</span>, Final Cut Multimedia began with a single focus: to raise the standard for video production companies in Charlotte. Over the years, we have become a trusted partner for businesses, schools, and organizations that need professional visuals that perform.
                </p>
                <p>
                  We have worked with corporate clients, community leaders, and local entrepreneurs to create content that tells their story, builds trust, and drives measurable growth. From drone cinematography and event coverage to business marketing videos, we deliver excellence from the first idea to the final edit.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 5: PARTNERSHIP OVERVIEW */}
        <div className="py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="altman-serif text-3xl lg:text-4xl font-light text-white">More Than a Production Company</h3>
          <div className="w-8 h-[1px] bg-[#d4af37] mx-auto" />
          <p className="text-sm font-medium tracking-wide text-neutral-200 uppercase tracking-[0.15em]">"We're not simply a camera crew hired for the day."</p>
          <p className="text-neutral-400 text-sm font-light leading-relaxed tracking-wide">
            We serve as a creative production partner, helping clients develop content strategies, streamline production, and build a library of professional assets that can be used across websites, social media, presentations, internal communications, recruiting, and marketing campaigns.
          </p>
          <p className="text-neutral-500 text-xs italic font-serif">
            Whether we're producing a single project or providing ongoing monthly content, our goal is always the same: create content with purpose and deliver an experience our clients can rely on.
          </p>
        </div>

        {/* SECTION 6: SERVICE SUITE STACK */}
        <div className="bg-[#0a0a0a] border-t border-b border-neutral-900/60 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-900 pb-8">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-neutral-500 font-bold block mb-2">OUR CREATIVE SERVICES</span>
                <h3 className="altman-serif text-3xl font-light">Tailored Multimedia Solutions</h3>
              </div>
              <p className="max-w-md text-xs text-neutral-400 font-light leading-relaxed">
                From cinematic productions to professional event coverage, Final Cut Multimedia delivers a full suite of services designed to capture, create, and communicate with impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Expert Storytelling", desc: "At Final Cut Multimedia, we believe every project has a story worth telling. Our team of skilled videographers and photographers bring your vision to life." },
                { title: "High-Quality Production", desc: "We combine creativity with cutting-edge technology to deliver professional-grade results. From 4K video production to crystal clear optics." },
                { title: "Tailored Solutions", desc: "No two brands are the same, nor are our projects. We take the time to understand your goals for each production to fit your message, audience, and platform needs." },
                { title: "Reliable & Efficient Team", desc: "Our clients choose us for our dedication and dependability. We meet deadlines without compromising quality and treat every project at its best." }
              ].map((service, index) => (
                <div key={index} className="border-l border-neutral-800 pl-6 py-2 space-y-3 group hover:border-[#d4af37] transition-colors duration-300">
                  <h4 className="text-sm font-semibold tracking-wider text-neutral-200 group-hover:text-white">{service.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SECTION 7: WHY BUSINESSES CHOOSE US */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold block">THE METRICS</span>
            <h3 className="altman-serif text-3xl sm:text-4xl font-light">Why Businesses Choose Final Cut Multimedia</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {[
              { icon: <Clock size={16} />, title: "20+ Years Experience", desc: "Proven results in video marketing and brand visibility across various sectors." },
              { icon: <Radio size={16} />, title: "Business Focused Approach", desc: "A creative partnership focused on results, not just content creation metrics." },
              { icon: <Camera size={16} />, title: "Cinema cameras & Equipment", desc: "Experienced team using professional equipment and industry-standard production methods." },
              { icon: <Users size={16} />, title: "Reliable Communication", desc: "Fast turnaround with precision editing and high-quality post-production tracking loops." },
              { icon: <ShieldCheck size={16} />, title: "Full Service Production", desc: "Local experts serving Charlotte, Rock Hill, and surrounding marketplace boundaries." },
              { icon: <Handshake size={16} />, title: "Long Term Partnership Mindset", desc: "Your business has a story that deserves to be seen. Let us help you share it through powerful visuals." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#060606] p-10 space-y-5 group hover:bg-[#0b0b0b] transition-all duration-300">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-[#d4af37] group-hover:text-white group-hover:border-neutral-700 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{item.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 8: NATIVE PORTFOLIO MOVIE BLOCK ROW */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 space-y-16">
          <div className="text-center space-y-2">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light">Cinematic Media Showroom</h3>
            <p className="text-xs text-neutral-500">Review high fidelity marketing results streaming across active platform clusters.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="aspect-video bg-neutral-900 border border-neutral-800/60 overflow-hidden">
              <iframe 
                className="w-full h-full" 
                allowFullScreen 
                src="https://player.vimeo.com/video/299711587?color&title=0&byline=0&portrait=0"
                title="Final Cut Multimedia Portfolio One"
              />
            </div>
            <div className="aspect-video bg-neutral-900 border border-neutral-800/60 overflow-hidden">
              <iframe 
                className="w-full h-full" 
                allowFullScreen 
                src="https://player.vimeo.com/video/862023617?color&title=0&byline=0&portrait=0"
                title="Final Cut Multimedia Portfolio Two"
              />
            </div>
            <div className="aspect-video bg-neutral-900 border border-neutral-800/60 overflow-hidden">
              <iframe 
                className="w-full h-full" 
                allowFullScreen 
                src="https://player.vimeo.com/video/659551134?h=981ca1e9a1"
                title="Final Cut Multimedia Portfolio Three"
              />
            </div>
          </div>
        </div>

        {/* SECTION 9: MISSION STATEMENT */}
        <div className="relative py-28 border-t border-b border-neutral-900/60 bg-gradient-to-b from-[#060606] to-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 block">OUR STATEMENT</span>
            <h3 className="altman-serif text-3xl font-light text-white">Our Mission</h3>
            <p className="altman-serif text-xl sm:text-2xl font-light italic text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              "To help businesses communicate their story through professional video and photography that inspires confidence, builds stronger brands, and creates lasting value."
            </p>
          </div>
        </div>

        {/* SECTION 10: REAL-TIME RESPONSIBLE DUBSADO APPOINTMENT SCHEDULER WIDGET */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">REGISTRATION ENGINE</span>
            <h4 className="altman-serif text-3xl font-light text-white">Let's Create Something Meaningful</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Whether you're planning your first project or looking for a long-term production partner, select a convenient date inside our corporate scheduler portal.
            </p>
          </div>

          {/* EXACT SOURCED EMBED IMPLEMENTATION LOOP FROM CLIENT SOURCE LOGS */}
          <div className="w-full bg-[#0b0b0b] border border-neutral-900 p-4 sm:p-8">
            <iframe 
              id="iFrameResizer5"
              src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381"
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
              scrolling="no"
              title="Dubsado Embedded Client Communication Engine"
            />
          </div>
        </div>

        {/* SECTION 11: GEOLOCATION ACCENT LAYER */}
        <div className="w-full h-[400px] border-t border-neutral-900 relative">
          <iframe 
            loading="lazy" 
            src="https://maps.google.com/maps?q=Charlotte&t=m&z=10&output=embed&iwloc=near"
            title="Charlotte Headquarters Location Map Location String" 
            className="w-full h-full filter grayscale invert contrast-125 opacity-60"
            frameBorder="0"
          />
        </div>

      </div>
    </>
  );
}