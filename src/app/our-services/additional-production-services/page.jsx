"use client";
import React, { useEffect } from 'react';
import { Camera, Radio, Video, Award, ShieldCheck, Users, Handshake, Calendar } from 'lucide-react';

export default function AdditionalProductionServicesPage() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js";
    script.async = true;
    
    script.onload = () => {
      if (window.iFrameResize) {
        setTimeout(() => {
          window.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
          }, '#iFrameResizerAdditional');
        }, 30);
      }
    };
    
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Premium typography layout settings variable injection layer */}
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
        
        <div className="relative h-[420px] w-full overflow-hidden flex items-center justify-center border-b border-neutral-900/60">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2020/12/Banner1.jpg')` }}
          />
          <div className="absolute inset-0 bg-black/65" />
          
          <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 h-full flex justify-between items-end pointer-events-none">
            <div className="w-16 h-[2px] bg-[#d4af37] transform translate-y-[-50px]" />
            <div className="w-16 h-[2px] bg-[#d4af37] transform translate-y-[-50px]" />
          </div>

          <div className="relative z-10 text-center space-y-3">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-semibold block">SPECIALIZED CORE CAPABILITIES</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white uppercase">
              Additional Production Services
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-36 border-b border-neutral-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column Image Portrait Panel */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[5/6] w-full bg-neutral-900 border border-neutral-800/60 overflow-hidden relative group">
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src="https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2024/06/about-photo1-new.jpg" 
                  alt="Final Cut Multimedia Specialized Media Production Operations" 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#d4af37]/30 -z-10" />
            </div>

            {/* Right Column Content Data Stack */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">SPECIALIZED SUPPORT</span>
                <h2 className="altman-serif text-4xl sm:text-5xl font-light text-white leading-tight">
                  Specialized Production Services <br />
                  <span className="italic text-neutral-300">for Unique Projects</span>
                </h2>
              </div>
              
              <div className="w-12 h-[1px] bg-neutral-800" />

              <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                <p className="font-medium text-white text-base tracking-wide leading-relaxed">
                  Some projects require more than traditional video production or event coverage. Final Cut Multimedia offers specialized production services that help businesses, organizations, and agencies communicate, educate, document, and engage their audiences in meaningful ways.
                </p>
                <p>
                  Whether you need executive headshots, live event streaming, aerial footage, training content, or documentary storytelling, our team provides professional production support tailored to your goals.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-36 space-y-36">
          
          {/* Sub-section 1: Headshots */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="altman-serif text-2xl font-light text-[#d4af37]/40">01 /</div>
              <h3 className="altman-serif text-3xl font-light text-white tracking-wide">Headshots</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Professional headshots help establish credibility and create a strong first impression.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                We provide executive headshots, team photography, staff portraits, and branding imagery for businesses, organizations, and professionals looking to present themselves confidently across websites, social media, marketing materials, and internal communications.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block border-b border-neutral-800 pb-2">Ideal For:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400 font-light">
                {["Corporate Teams", "Executives", "Business Owners", "Professional Service Firms", "Healthcare Organizations", "Sales Teams", "Recruiting and Hiring Initiatives"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#d4af37]" />
                    <span className="hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-section 2: Live Streaming */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-24 border-t border-neutral-900/60">
            <div className="lg:col-span-5 space-y-4">
              <div className="altman-serif text-2xl font-light text-[#d4af37]/40">02 /</div>
              <h3 className="altman-serif text-3xl font-light text-white tracking-wide">Live Streaming</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Extend your reach beyond the venue.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Our live streaming services help businesses and organizations broadcast conferences, meetings, presentations, webinars, training sessions, and special events to remote audiences in real time. We handle the technical production so your team can focus on delivering the message.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block border-b border-neutral-800 pb-2">Live Streaming Solutions</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400 font-light">
                {["Conferences", "Webinars", "Panel Discussions", "Training Sessions", "Community Events", "Fundraisers", "Special Presentations"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#d4af37]" />
                    <span className="hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-section 3: Drone Services */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-24 border-t border-neutral-900/60">
            <div className="lg:col-span-5 space-y-4">
              <div className="altman-serif text-2xl font-light text-[#d4af37]/40">03 /</div>
              <h3 className="altman-serif text-3xl font-light text-white tracking-wide">Drone Services</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Aerial video and photography add scale, perspective, and visual impact to your content.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Our drone services provide professional aerial coverage for construction projects, commercial developments, corporate videos, events, tourism campaigns, and marketing initiatives.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block border-b border-neutral-800 pb-2">Drone Applications</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400 font-light">
                {["Construction Progress Tracking", "Land Development Projects", "Commercial Properties", "Corporate Marketing Videos", "Event Coverage", "Promotional Content", "Aerial Photography", "Project Documentation"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#d4af37]" />
                    <span className="hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-section 4: Training Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-24 border-t border-neutral-900/60">
            <div className="lg:col-span-5 space-y-4">
              <div className="altman-serif text-2xl font-light text-[#d4af37]/40">04 /</div>
              <h3 className="altman-serif text-3xl font-light text-white tracking-wide">Training Videos</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Effective training content helps businesses educate employees, improve consistency, and streamline onboarding.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                We create professional training videos that simplify complex information and provide teams with clear, repeatable learning resources.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block border-b border-neutral-800 pb-2">Training Video Solutions</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400 font-light">
                {["Employee Onboarding", "Safety Training", "Operational Procedures", "Software Training", "Leadership Development", "Customer Service Training", "Internal Communications", "Educational Content"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#d4af37]" />
                    <span className="hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-section 5: Documentary Production */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-24 border-t border-neutral-900/60">
            <div className="lg:col-span-5 space-y-4">
              <div className="altman-serif text-2xl font-light text-[#d4af37]/40">05 /</div>
              <h3 className="altman-serif text-3xl font-light text-white tracking-wide">Documentary Production</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Every organization has a story worth telling.
              </p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                Our documentary production services focus on authentic storytelling that highlights people, missions, communities, projects, and meaningful experiences. From nonprofit initiatives and community programs to company stories and personal journeys, we create documentary-style content that informs, inspires, and connects with audiences.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block border-b border-neutral-800 pb-2">Documentary Projects</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400 font-light">
                {["Company Stories", "Nonprofit Campaigns", "Community Initiatives", "Historical Projects", "Mission-Driven Organizations", "Personal and Family Documentaries", "Educational Films", "Cause Awareness Campaigns"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#d4af37]" />
                    <span className="hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-t border-neutral-900">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold block">EXPERIENCE PROFILES</span>
            <h3 className="altman-serif text-3xl sm:text-4xl font-light">Why Choose Final Cut Multimedia?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {[
              { icon: <Award size={16} />, title: "10+ Years of Production Experience", desc: "A decade of mastering complex cinematic layouts and custom multi-camera loops." },
              { icon: <Camera size={16} />, title: "Professional Cinema Cameras and Audio", desc: "High fidelity post production hardware configuration layer for premium outputs." },
              { icon: <Users size={16} />, title: "Experienced Production Team", desc: "Vetted industry experts ensuring precise synchronization loops on every single set." },
              { icon: <Radio size={16} />, title: "Story-Driven Approach", desc: "Artistic content construction layered with performance-focused marketing blueprints." },
              { icon: <ShieldCheck size={16} />, title: "Corporate and Commercial Expertise", desc: "Flawless integration with modern enterprise venue standard architectures securely." },
              { icon: <Handshake size={16} />, title: "Reliable Communication and Delivery", desc: "Transparent loop milestones keeping final content pipelines running on schedule." },
              { icon: <Video size={16} />, title: "Full Service Production Support", desc: "Comprehensive structural support tracking loops from initial blueprint to edit warp." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#060606] p-8 sm:p-10 space-y-4 group hover:bg-[#0b0b0b] transition-all duration-300">
                <div className="text-[#d4af37] group-hover:text-white transition-colors">{item.icon}</div>
                <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{item.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 space-y-12">
          <div className="border-t border-neutral-900 pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light">Specialized Media Showroom</h3>
            <p className="text-xs text-neutral-500 font-light">Streaming live execution portfolios.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="aspect-video bg-neutral-900 border border-neutral-800/60 overflow-hidden">
              <iframe className="w-full h-full" allowFullScreen src="https://player.vimeo.com/video/299711587?color&title=0&byline=0&portrait=0" />
            </div>
            <div className="aspect-video bg-neutral-900 border border-neutral-800/60 overflow-hidden">
              <iframe className="w-full h-full" allowFullScreen src="https://player.vimeo.com/video/862023617?color&title=0&byline=0&portrait=0" />
            </div>
            <div className="aspect-video bg-neutral-900 border border-neutral-800/60 overflow-hidden">
              <iframe className="w-full h-full" allowFullScreen src="https://player.vimeo.com/video/659551134?h=981ca1e9a1" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 bg-gradient-to-t from-[#0a0a0a] to-transparent border-t border-neutral-900/60">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">PROJECT BOARD LOCK</span>
            <h4 className="altman-serif text-3xl sm:text-4xl font-light text-white">Let's Discuss Your Project</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Tell us about your goals and we'll help determine the best production approach for your project.
            </p>
          </div>

          <div className="w-full bg-[#0b0b0b] border border-neutral-900 p-4 sm:p-8">
            <iframe 
              id="iFrameResizerAdditional"
              src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
              scrolling="no"
              title="Dubsado Embedded Additional Production Request Form Portal"
            />
          </div>
        </div>

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