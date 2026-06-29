"use client";
import React, { useState } from 'react';
import { Clock, MessageSquare, Lightbulb, ShieldCheck, Mail, Phone, MapPin, Globe, Camera } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

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
        
        {/* TOP HERO BANNER - Match with image_33e7bc.jpg top section view */}
        <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://cdn.agentimagehosting.com/vYHcZxEnzr47srpPPrW8h/2020/12/Banner1.jpg')` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Decorative Gold Cross-Lines inspired by Altman interface schema */}
          <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 h-full flex justify-between items-end pointer-events-none">
            <div className="w-16 h-[2px] bg-[#d4af37] transform translate-y-[-50px]" />
            <div className="w-16 h-[2px] bg-[#d4af37] transform translate-y-[-50px]" />
          </div>

          <div className="relative z-10 text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.2em] font-extrabold text-white">
              Contact
            </h1>
            <div className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">Final Cut Multimedia</div>
          </div>
        </div>

        {/* CLIENT TEXT ARCHITECTURE / LEAD GENERATION HEADLINE */}
        <div className="border-b border-neutral-900 bg-gradient-to-b from-[#0a0a0a] to-[#060606] py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-semibold block mb-4">
              Ready to Talk About Your Project?
            </span>
            <h2 className="altman-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-snug">
              Let's Talk About Your <span className="italic text-neutral-300">Project</span>
            </h2>
            <div className="w-12 h-[1px] bg-neutral-800 mx-auto my-6" />
            <p className="text-neutral-400 max-w-2xl mx-auto text-sm font-light leading-relaxed tracking-wide">
              Whether you're planning a corporate video, event coverage, recurring monthly content, or another production project, we're here to help. Tell us about your goals, and our team will guide you through the next steps.
            </p>
          </div>
        </div>

        {/* MAIN BODY CONFIG: SPLIT BLOCK COMBINING INPUT FORM & SIDEBAR INFO (image_33e746.jpg layout architecture) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* LEFT SPLIT COLUMN: Corporate Office Details & Approach Metadata */}
            <div className="lg:col-span-5 space-y-14">
              <div className="space-y-4">
                <h3 className="altman-serif text-2xl lg:text-3xl font-light tracking-wide text-[#d4af37]">Our Approach</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  We'll discuss your vision, answer your questions, and recommend the best production approach based on your needs. No matter where you are in the planning process, we'd love to hear about your project.
                </p>
              </div>

              {/* Real Local Address Blocks matched from image_33e746.jpg wrapper structure */}
              <div className="border-t border-neutral-900 pt-8 space-y-6 text-sm text-neutral-400">
                <div className="flex items-start gap-4">
                  <Phone size={16} className="text-[#d4af37] mt-0.5" />
                  <a href="tel:+17044911283" className="hover:text-white transition-colors">704.491.1283</a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-[#d4af37] mt-0.5" />
                  <a href="mailto:info@finalcutmultimedia.com" className="hover:text-white transition-colors">info@finalcutmultimedia.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-[#d4af37] mt-0.5" />
                  <div>
                    <span className="font-medium text-white block mb-1">Charlotte HQ Office</span>
                    <span>Charlotte, NC, USA</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Vector Links */}
              <div className="flex items-center gap-6 pt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#d4af37] transition-colors">
                  <Globe size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#d4af37] transition-colors">
                  <Camera size={18} />
                </a>
              </div>
            </div>

            {/* RIGHT SPLIT COLUMN: Altman Premium Minimal Form Grid System */}
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 p-8 sm:p-12 relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#d4af37] via-transparent to-transparent" />
              
              <div className="space-y-4 mb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block">GET IN TOUCH</span>
                <h3 className="altman-serif text-3xl font-light tracking-wide text-white">Contact Us</h3>
                <p className="text-xs text-neutral-500 font-light">Send us a message and we'll get right back in touch.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative border-b border-neutral-800 focus-within:border-white transition-colors py-2">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">First Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-transparent border-none outline-none text-sm text-white pt-1" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="relative border-b border-neutral-800 focus-within:border-white transition-colors py-2">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-transparent border-none outline-none text-sm text-white pt-1" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative border-b border-neutral-800 focus-within:border-white transition-colors py-2">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Phone No.</label>
                    <input 
                      type="tel" 
                      required 
                      className="w-full bg-transparent border-none outline-none text-sm text-white pt-1" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="relative border-b border-neutral-800 focus-within:border-white transition-colors py-2">
                    <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-transparent border-none outline-none text-sm text-white pt-1" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="relative border-b border-neutral-800 focus-within:border-white transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full bg-transparent border-none outline-none text-sm text-white pt-1 resize-none" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-400 px-12 py-3 text-[11px] uppercase tracking-[0.3em] font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* PERSONNEL PRESENTATION ROW: Tyrell Scott & Jane Profile Display */}
        <div className="bg-[#0a0a0a] border-t border-b border-neutral-900 py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h3 className="altman-serif text-3xl font-light">Meet Your Strategy Team</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                When you book a call, you'll meet directly with Tyrell Scott, Owner of Final Cut Multimedia, and Jane, our Operations Coordinator.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Profile Card 1: Tyrell Scott */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-48 h-64 bg-neutral-900 border border-neutral-800 overflow-hidden relative mb-6">
                  <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-all duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">
                    Tyrell Scott Photo
                  </span>
                </div>
                <h4 className="altman-serif text-xl font-light text-white tracking-wide">
                  <span className="font-bold">Tyrell</span> Scott
                </h4>
                <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Owner / Creative Director</p>
              </div>

              {/* Profile Card 2: Jane */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-48 h-64 bg-neutral-900 border border-neutral-800 overflow-hidden relative mb-6">
                  <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-all duration-500" />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">
                    Jane Photo
                  </span>
                </div>
                <h4 className="altman-serif text-xl font-light text-white tracking-wide">
                  <span className="font-bold">Jane</span>
                </h4>
                <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Operations Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT PROCESS EXPECTATION GRID AREA */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold">What to Expect</h3>
            <p className="text-neutral-400 text-sm font-light">Transparent consultation metrics tailored explicitly to map target business scales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={16} />, title: "15-Minute Consultation", desc: "Quick, focused session to map out your initial creative requirements." },
              { icon: <MessageSquare size={16} />, title: "Goals & Budget", desc: "Aligning your specific vision metrics with smart production practicalities." },
              { icon: <Lightbulb size={16} />, title: "Creative Concept Review", desc: "Brainstorming unique cinematic strategies for optimal asset scaling." },
              { icon: <ShieldCheck size={16} />, title: "No Pressure Contract", desc: "Receive transparent professional strategy paths 100% risk-free." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0b0b0b] border border-neutral-900 p-8 space-y-4 group hover:border-neutral-800 transition-colors duration-300">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#d4af37] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-sm font-semibold tracking-wide text-white">{item.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* DYNAMIC APPOINTMENT RESIZER SCHEDULER BLOCK - Injected from image_33e7bc.jpg widget specifications */}
          <div className="mt-28 space-y-8">
            <div className="text-center">
              <h4 className="altman-serif text-2xl font-light text-white tracking-wide">Ready to Get Started?</h4>
              <p className="text-xs text-neutral-500 mt-1">Select a comfortable scheduling threshold inside our appointment manager engine below.</p>
            </div>

            <div className="w-full bg-[#0b0b0b] border border-neutral-900 p-4 sm:p-8">
              {/* Dynamic Embed iFrame from finalcutmultimedia.com native framework configuration logs */}
              <iframe 
                src="https://charlotte.finalcutmultimedia.com/public/appointment-scheduler/63ed52a48c25ce8374dbe6c6/schedule?iframe=true" 
                frameBorder="0" 
                width="100%" 
                height="750" 
                scrolling="no" 
                className="w-full overflow-hidden min-h-[750px]"
              />
            </div>
          </div>
        </div>

        {/* MAP FOOTER INTERFACE SEGMENT - Injected from image_33e7bc.jpg base engine matrix */}
        <div className="w-full h-[400px] border-t border-neutral-900 relative">
          <iframe 
            loading="lazy" 
            src="https://maps.google.com/maps?q=Charlotte&t=m&z=11&output=embed&iwloc=near" 
            title="Charlotte Headquarters Location Map" 
            className="w-full h-full filter grayscale invert contrast-125 opacity-60"
            frameBorder="0"
          />
        </div>

      </div>
    </>
  );
}