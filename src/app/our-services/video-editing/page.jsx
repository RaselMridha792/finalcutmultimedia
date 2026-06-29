"use client";
import React, { useEffect } from 'react';
import { Clock, ShieldCheck, Camera, Radio, Users, Handshake, Calendar } from 'lucide-react';

export default function VideoEditingPage() {
  
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
          }, '#iFrameResizerEditing');
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
      {/* Premium typography layout custom variables layer */}
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-medium block">POST PRODUCTION SERVICES</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.2em] font-extrabold text-white">
              Video Editing Page
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Box Image Portrait Panel */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[5/6] w-full bg-neutral-900 border border-neutral-800/60 overflow-hidden relative group">
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src="https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2024/06/about-photo1-new.jpg" 
                  alt="Final Cut Multimedia Video Post Editing Framework" 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#d4af37]/30 -z-10" />
            </div>

            {/* Right Box Title Narrative Blocks */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">POST PRODUCTION SOLUTIONS</span>
                <h2 className="altman-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Professional Video Editing <br />
                  <span className="italic text-neutral-300">Services for Businesses</span>
                </h2>
              </div>
              
              <div className="w-12 h-[1px] bg-neutral-800" />

              <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                <p className="font-medium text-white text-base tracking-wide">
                  Great content doesn't happen in the camera alone. Professional editing is where footage becomes a compelling story, a clear message, and a polished final product.
                </p>
                <p>
                  At Final Cut Multimedia, we provide video editing services for businesses, agencies, production companies, marketing teams, and content creators who need reliable post production support. Whether the footage was captured by our team or yours, we help transform raw files into professional content ready for distribution.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-b border-neutral-900/60 bg-gradient-to-b from-[#060606] to-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h3 className="altman-serif text-3xl lg:text-4xl font-light text-white">Turn Raw Footage Into Professional Content</h3>
            <div className="w-8 h-[1px] bg-[#d4af37] mx-auto" />
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              Many businesses have valuable footage sitting on hard drives that never gets used. Others have internal teams that need additional editing support to keep up with content demands.
            </p>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-3xl mx-auto tracking-wide italic font-serif">
              Our editing team helps bridge that gap by handling the post production process from start to finish, allowing your team to focus on strategy, marketing, and business operations.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 space-y-24">
          
          {/* Grid A: Video Editing Services List */}
          <div className="space-y-10">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-[#d4af37] tracking-wide text-center">Video Editing Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-neutral-400 font-light pt-4">
              {[
                "Corporate Video Editing", "Event Highlight Videos", "Customer Testimonial Videos", 
                "Training Videos", "Promotional Videos", "YouTube Videos", 
                "Social Media Videos", "Podcast Editing", "Interview Editing", 
                "Construction and Development Content", "Automotive Video Content", "Multi Camera Editing"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#0b0b0b] border border-neutral-900 p-4">
                  <div className="w-1.5 h-1.5 bg-[#d4af37]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid B: What's Included Minimal Block Items */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">What's Included</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "Footage Organization", "Professional Editing", "Color Correction", 
                "Audio Cleanup", "Licensed Music", "Text Overlays", 
                "Basic Motion Graphics", "Captioning Options", "Multiple Format Deliverables", "Review and Revision Process"
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0b0b0b] border border-neutral-900 p-4 text-center text-xs font-semibold tracking-wider uppercase text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Grid C: Who We Work With Minimal Layout Elements */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Who We Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-neutral-400 text-center font-light">
              {[
                "Businesses and Brands", "Marketing Agencies", "Production Companies", 
                "Corporate Teams", "Event Organizers", "Construction Companies", 
                "Automotive Businesses", "Nonprofits", "Content Creators"
              ].map((who, idx) => (
                <div key={idx} className="bg-[#0b0b0b] border border-neutral-900 p-4 hover:border-neutral-800 transition-colors">
                  <span className="text-xs uppercase font-medium tracking-wide text-neutral-200">{who}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid D: Our Process Engine Logic Blocks */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {[
                { step: "01", title: "Planning & Strategy", desc: "Pre-production alignment to map your exact vision, event timeline, target milestones, and capture scope parameters." },
                { step: "02", title: "Professional Editing", desc: "Our editing crew processes footage with cutting-edge tools to organize, color-grade, and sound-design raw files flawlessly." },
                { step: "03", title: "Premium Delivery", desc: "Flawless rapid-turnaround deliverable deployment, revision review process, and final cloud asset handoff." }
              ].map((proc, idx) => (
                <div key={idx} className="border-t border-neutral-800 pt-4 space-y-2">
                  <div className="text-xs text-[#d4af37] font-mono">{proc.step}</div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-200">{proc.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grid E: Why Choose Final Cut Multimedia Matrix Cards */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Why Choose Final Cut Multimedia?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
              {[
                { icon: <Camera size={16} />, title: "Business Focused", desc: "Business Focused Storytelling structured to explicitly map your commercial audience metrics." },
                { icon: <Clock size={16} />, title: "Fast Turnaround", desc: "Fast and Reliable Turnaround supporting tight media pipeline management schedules." },
                { icon: <ShieldCheck size={16} />, title: "Professional Workflow", desc: "Professional Post Production Workflow maintaining strict studio accuracy guidelines." },
                { icon: <Radio size={16} />, title: "Consistent Loop", desc: "Consistent Communication across all iterations from blueprint mapping to wrap." },
                { icon: <Users size={16} />, title: "Scalable Support", desc: "Scalable Editing Support customized specifically to keep up with active layout demands." },
                { icon: <Handshake size={16} />, title: "High Quality Deliverables", desc: "High Quality Deliverables ready to stream across all active multi-channel clusters." }
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

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 space-y-12">
          <div className="border-t border-neutral-900 pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light">Recent Editing Portfolio</h3>
            <p className="text-xs text-neutral-500 font-light">Streaming high-fidelity post-production samples.</p>
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">STRATEGY LOCK PORTAL</span>
            <h4 className="altman-serif text-3xl sm:text-4xl font-light text-white">Need Help With Editing?</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Whether you need support for a single project or ongoing post production assistance, we're ready to help.
            </p>
          </div>

          <div className="w-full bg-[#0b0b0b] border border-neutral-900 p-4 sm:p-8">
            <iframe 
              id="iFrameResizerEditing"
              src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
              scrolling="no"
              title="Dubsado Embedded Video Editing Request Portal"
            />
          </div>
        </div>

        <div className="w-full h-[400px] border-t border-neutral-900 relative">
          <iframe 
            loading="lazy" 
            src="https://maps.google.com/maps?q=Charlotte&t=m&z=10&output=embed&iwloc=near" 
            title="Charlotte Headquarters Location Map" 
            className="w-full h-full filter grayscale invert contrast-125 opacity-60"
            frameBorder="0"
          />
        </div>

      </div>
    </>
  );
}