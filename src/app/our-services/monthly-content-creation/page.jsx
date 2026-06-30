// app/monthly-content-creation/page.jsx
"use client";
import React, { useEffect } from 'react';
import { Clock, ShieldCheck, Camera, Radio, Users, Handshake, Calendar, RefreshCw } from 'lucide-react';

export default function MonthlyContentCreationPage() {
  
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
          }, '#iFrameResizerMonthly');
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-medium block">RECURRING PRODUCTION SERVICES</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.2em] font-extrabold text-white">
              Monthly Content Creation Page
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column Image Portrait Panel */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[5/6] w-full bg-neutral-900 border border-neutral-800/60 overflow-hidden relative group">
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img 
                  src="https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2024/06/about-photo1-new.jpg" 
                  alt="Final Cut Multimedia Recurring Monthly Production Operations" 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#d4af37]/30 -z-10" />
            </div>

            {/* Right Column Title Narrative Blocks */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold block">RECURRING MEDIA ENGINE</span>
                <h2 className="altman-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Consistent Content Without <br />
                  <span className="italic text-neutral-300">Starting From Scratch Every Month</span>
                </h2>
              </div>
              
              <div className="w-12 h-[1px] bg-neutral-800" />

              <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed tracking-wide">
                <p className="font-medium text-white text-base tracking-wide">
                  Creating content consistently is one of the biggest challenges businesses face today. Most companies know they need regular content, but finding the time, resources, and expertise to create it month after month can be difficult.
                </p>
                <p>
                  Our Monthly Content Creation service provides a simple solution. We help businesses create a steady stream of professional video content through an efficient production system designed for long term growth and visibility.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-b border-neutral-900/60 bg-gradient-to-b from-[#060606] to-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h3 className="altman-serif text-3xl lg:text-4xl font-light text-white">Stay Visible. Stay Relevant. Stay Consistent.</h3>
            <div className="w-8 h-[1px] bg-[#d4af37] mx-auto" />
            <p className="text-sm font-medium tracking-wide text-neutral-200 uppercase tracking-[0.15em]">"The businesses that stay in front of their audience consistently are often the businesses that earn the most trust."</p>
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              Instead of producing one video at a time, we help you build a content library that supports your marketing efforts throughout the month. During a single production session, we capture multiple pieces of content that can be transformed into a variety of finished deliverables.
            </p>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-3xl mx-auto tracking-wide italic font-serif">
              This allows your business to maintain a consistent presence without constantly planning new productions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 space-y-24">
          
          {/* Loop A: What Monthly Content Creation May Include */}
          <div className="space-y-10">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-[#d4af37] tracking-wide text-center">What Monthly Content Creation May Include</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-neutral-400 font-light pt-4">
              {[
                "Educational Videos", "Promotional Videos", "Customer Testimonials", 
                "Behind the Scenes Content", "Company Updates", "Recruitment Videos", 
                "Project Highlights", "Interview Videos", "Short Form Videos", 
                "Content for YouTube, LinkedIn, and Websites"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#0b0b0b] border border-neutral-900 p-4">
                  <div className="w-1.5 h-1.5 bg-[#d4af37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Loop B: How It Works sequential steps from documentation */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
              {[
                { title: "Planning", desc: "We identify the content opportunities that align with your goals and audience." },
                { title: "Scheduled Production Day", desc: "We capture multiple pieces of content during a scheduled filming session." },
                { title: "Editing & Content Creation", desc: "The footage is edited into a variety of deliverables throughout the month." },
                { title: "Delivery", desc: "Your content is delivered and ready to publish across your marketing channels." },
                { title: "Repeat & Scale", desc: "As your content library grows, your business builds greater visibility, authority, and consistency." }
              ].map((step, idx) => (
                <div key={idx} className="bg-[#0b0b0b] border border-neutral-900 p-6 space-y-3 relative">
                  <div className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest">Phase 0{idx + 1}</div>
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{step.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loop C: Who Is This For? Elements */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Who Is This For?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-neutral-400 text-center font-light">
              {[
                "Construction Companies", "Land Development Firms", "Automotive Businesses", 
                "Corporate Organizations", "Professional Service Providers", "Healthcare Organizations", 
                "Manufacturers", "Nonprofits", "Growing Brands", "Businesses Looking to Stay Visible Year Round"
              ].map((who, idx) => (
                <div key={idx} className="bg-[#0b0b0b] border border-neutral-900 p-4 hover:border-neutral-800 transition-colors">
                  <span className="text-xs uppercase font-medium tracking-wide text-neutral-200">{who}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Loop D: Why Businesses Choose Monthly Content Creation */}
          <div className="space-y-10 pt-12 border-t border-neutral-900/60">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center">Why Businesses Choose Monthly Content Creation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">
              {[
                { title: "Consistent Professional Content", desc: "High-grade premium assets deployed recurrently loop after loop." },
                { title: "Efficient Content Production", desc: "Streamlined operational timelines minimizing corporate friction." },
                { title: "Better Return on Filming Days", desc: "Maximum deliverable asset metrics generated from single sessions." },
                { title: "Stronger Brand Visibility", desc: "Sustained algorithmic visibility footprint across target sectors." },
                { title: "Ongoing Marketing Assets", desc: "Evergreen asset pools built systematically month after month." },
                { title: "Scalable Content Strategy", desc: "Adaptable structures optimized to expand with target platform tiers." },
                { title: "Dedicated Production Partner", desc: "Full end-to-end alignment managing micro details securely." },
                { title: "No Need to Start From Scratch", desc: "Eliminates monthly scrambling via evergreen system pipelines." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#060606] p-8 space-y-3 group hover:bg-[#0b0b0b] transition-all duration-300">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                  <h4 className="text-sm font-semibold tracking-wider text-white uppercase">{item.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Loop E: Frequently Asked Question (Verbatim Parsing Block) */}
          <div className="space-y-6 pt-12 border-t border-neutral-900/60 max-w-3xl mx-auto">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light text-white tracking-wide text-center mb-8">Frequently Asked Question</h3>
            <div className="bg-[#0b0b0b] border border-neutral-900 p-8 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">Is this social media management?</h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                No. Monthly Content Creation focuses on producing professional video content for your business. We create the assets your team can publish across social media, websites, email campaigns, and other marketing channels, but we do not manage accounts or provide social media management services.
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 space-y-12">
          <div className="border-t border-neutral-900 pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="altman-serif text-2xl lg:text-3xl font-light">Recent Content Deployments</h3>
            <p className="text-xs text-neutral-500 font-light">Streaming recurring production loops.</p>
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">PRODUCTION BLUEPRINT LOCK</span>
            <h4 className="altman-serif text-3xl sm:text-4xl font-light text-white">Build a Content Engine for Your Business</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              If you're tired of scrambling for content every month, let's create a system that keeps your business visible with professional video content year round.
            </p>
          </div>

          <div className="w-full bg-[#0b0b0b] border border-neutral-900 p-4 sm:p-8">
            <iframe 
              id="iFrameResizerMonthly"
              src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381" 
              frameBorder="0" 
              style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
              scrolling="no"
              title="Dubsado Embedded Monthly Production Form System"
            />
          </div>
        </div>

        <div className="w-full h-[400px] border-t border-neutral-900 relative">
          <iframe 
            loading="lazy" 
            src="https://maps.google.com/maps?q=Charlotte&t=m&z=10&output=embed&iwloc=near" 
            title="Charlotte Headquarters Location Mapping System" 
            className="w-full h-full filter grayscale invert contrast-125 opacity-60"
            frameBorder="0"
          />
        </div>

      </div>
    </>
  );
}