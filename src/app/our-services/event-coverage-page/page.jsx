// app/event-coverage/page.jsx
"use client";
import React, { useEffect } from 'react';
import { Clock, ShieldCheck, Camera, Radio, Users, Handshake, Calendar } from 'lucide-react';

export default function EventCoveragePage() {
  
  useEffect(() => {
    // Inject native iframe-resizer library safely to prevent duplicate scrollbars
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js";
    script.async = true;
    
    script.onload = () => {
      if (window.iFrameResize) {
        setTimeout(() => {
          window.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
          }, '#iFrameResizerEvent');
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
      {/* Luxury typography layout standard variables mapping */}
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
        
        {/* =========================================================================
            1. EventServiceHero SECTION (As seen in Drone Page Layout Pattern)
           ========================================================================= */}
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-medium block">PRODUCTION SERVICES</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.2em] font-extrabold text-white">
              Event Coverage
            </h1>
          </div>
        </div>

        {/* =========================================================================
            2. EventDetails SECTION (Asymmetric Introduction Layout)
           ========================================================================= */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Sourced Symmetrical Portrait Line Asset */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[5/6] w-full bg-neutral-900 border border-neutral-800/60 overflow-hidden relative group">
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src="https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2024/06/about-photo1-new.jpg" 
                  alt="Final Cut Multimedia Live Production Frame" 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#d4af37]/30 -z-10" />
            </div>

            {/* Right Column: Narrative Blueprint Text */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">EVENT COVERAGE PAGE</span>
                <h2 className="altman-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Event Coverage That <br />
                  <span className="italic text-neutral-300">Extends the Life of Your Event</span>
                </h2>
              </div>
              
              <div className="w-12 h-[1px] bg-neutral-800" />

              <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                <p className="font-medium text-white text-base tracking-wide">
                  Your event may last a day, but the content it generates can create value for months to come.
                </p>
                <p>
                  At Final Cut Multimedia, we provide professional event coverage for conferences, corporate meetings, trade shows, nonprofit events, product launches, company celebrations, and live experiences. Our goal is not only to document the event, but to create valuable content your organization can continue using long after the event ends.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. EventContent SECTION (More Than Event Videography Context)
           ========================================================================= */}
        <div className="border-t border-b border-neutral-900/60 bg-gradient-to-b from-[#060606] to-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h3 className="altman-serif text-3xl lg:text-4xl font-light text-white">More Than Event Videography</h3>
            <div className="w-8 h-[1px] bg-[#d4af37] mx-auto" />
            <p className="text-sm font-medium tracking-wide text-neutral-200 uppercase tracking-[0.15em]">"Many event videos simply show what happened."</p>
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              We focus on capturing the moments, interactions, messaging, and energy that tell the complete story of your event.
            </p>
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              Our team works professionally and discreetly while capturing keynote presentations, attendee engagement, interviews, networking opportunities, sponsor visibility, and branded experiences.
            </p>
          </div>
        </div>

        {/* =========================================================================
            4. EventUseCases SECTION (Dual Lists: Capabilities & Deliverables + Process)
           ========================================================================= */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 space-y-24">
          
          {/* Loop A: Event Coverage Services */}
          <div className="space-y-10">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-[#d4af37] tracking-wide text-center">Event Coverage Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-neutral-400 font-light pt-4">
              {[
                "Conference Coverage", "Corporate Events", "Trade Shows", 
                "Award Ceremonies", "Fundraisers and Nonprofit Events", "Product Launches", 
                "Company Celebrations", "Networking Events", "Speaker Sessions", 
                "Testimonial Interviews", "Photography Add-On Services"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#0b0b0b] border border-neutral-900 p-4">
                  <div className="w-1.5 h-1.5 bg-[#d4af37]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Loop B: Deliverables May Include */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Deliverables May Include</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Event Highlight Videos", "Social Media Clips", "Speaker Recordings", 
                "Session Coverage", "Testimonial Videos", "Photography Galleries", 
                "Promotional Recap Videos", "Branded Marketing Content"
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0b0b0b] border border-neutral-900 p-4 text-center text-xs font-semibold tracking-wider uppercase text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Loop C: Process From Homepage Framework */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {[
                { step: "01", title: "Planning & Strategy", desc: "Pre-production alignment to map your exact vision, event timeline, target milestones, and capture scope parameters." },
                { step: "02", title: "Discreet Production", desc: "Our elite camera crew captures your live environment with minimal interruption using state-of-the-art cinematic tools." },
                { step: "03", title: "Premium Delivery", desc: "Flawless rapid-turnaround post-production editing, custom audio design, color-grading, and cloud asset handoff." }
              ].map((proc, idx) => (
                <div key={idx} className="border-t border-neutral-800 pt-4 space-y-2">
                  <div className="text-xs text-[#d4af37] font-mono">{proc.step}</div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-200">{proc.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loop D: Why Businesses Choose Final Cut Multimedia */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Why Businesses Choose Final Cut Multimedia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
              {[
                { icon: <Users size={16} />, title: "Experienced Team", desc: "Experienced Event Production Team optimized for rapid-scale live tracking." },
                { icon: <Radio size={16} />, title: "Pro Audio & Multi-Cam", desc: "Professional Audio and Multi Camera Coverage for synchronized accuracy." },
                { icon: <ShieldCheck size={16} />, title: "Corporate Experience", desc: "Corporate Event Experience executing enterprise venue specifications seamlessly." },
                { icon: <Camera size={16} />, title: "Unified Solutions", desc: "Integrated high-end Video and Photography Solutions under a single aesthetic umbrella." },
                { icon: <Handshake size={16} />, title: "Reliable Communication", desc: "Reliable Communication from Start to Finish protecting project delivery pipelines." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#060606] p-8 space-y-4 group hover:bg-[#0b0b0b] transition-all duration-300">
                  <div className="text-[#d4af37]">{item.icon}</div>
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{item.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================================================
            5. MyGallery SECTION (Cinematic Showroom Embed Matrix)
           ========================================================================= */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 space-y-12">
          <div className="border-t border-neutral-900 pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light">Recent Event Showroom</h3>
            <p className="text-xs text-neutral-500 font-light">Streaming high-fidelity production snapshots.</p>
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

        {/* =========================================================================
            6. EventRequestForm SECTION (Non-Scrollable Adaptive Iframe)
           ========================================================================= */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 bg-gradient-to-t from-[#0a0a0a] to-transparent border-t border-neutral-900/60">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">STRATEGY LOCK PORTAL</span>
            <h4 className="altman-serif text-3xl font-light text-white">Let's Capture Your Next Event</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Tell us about your event and we'll build a coverage plan that fits your goals.
            </p>
          </div>

          <div className="w-full bg-[#0b0b0b] border border-neutral-900 p-4 sm:p-8">
            <iframe 
              id="iFrameResizerEvent"
              src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
              scrolling="no"
              title="Dubsado Embedded Client Communication Engine Portal"
            />
          </div>
        </div>

        {/* =========================================================================
            7. Map SECTION (Geolocational Accent Grid Map Layer)
           ========================================================================= */}
        <div className="w-full h-[400px] border-t border-neutral-900 relative">
          <iframe 
            loading="lazy" 
            src="https://maps.google.com/maps?q=Charlotte&t=m&z=10&output=embed&iwloc=near" 
            title="Charlotte Headquarters Location Operational Map Matrix" 
            className="w-full h-full filter grayscale invert contrast-125 opacity-60"
            frameBorder="0"
          />
        </div>

      </div>
    </>
  );
}