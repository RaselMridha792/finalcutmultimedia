"use client";
import React, { useEffect } from 'react';

export default function AdditionalProductionServicesPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    script.async = true;

    script.onload = () => {
      if (window.iFrameResize) {
        setTimeout(() => {
          window.iFrameResize(
            { checkOrigin: false, heightCalculationMethod: 'taggedElement' },
            '#iFrameResizerAdditional'
          );
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

  const servicePillars = [
    { title: 'Headshots', text: 'Professional portraits for executives, teams, and personal brands that look polished across every platform.' },
    { title: 'Live Streaming', text: 'Reliable event and webinar coverage that keeps remote audiences engaged in real time.' },
    { title: 'Drone Coverage', text: 'Aerial storytelling that gives properties, projects, and campaigns greater scale and perspective.' },
    { title: 'Training Content', text: 'Clear onboarding and educational videos that simplify complex information and support internal teams.' },
  ];

  const highlights = [
    'Corporate teams and executive branding',
    'Conference and webinar broadcasts',
    'Aerial marketing and property storytelling',
    'Training and documentary production',
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <main className="min-h-screen bg-[#060606] text-white">
        <section className="relative min-h-[78vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg" alt="Additional production services" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-red-600">Specialized Core Capabilities</p>
              <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                Additional Production Services
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Final Cut Multimedia brings together production support for headshots, live streaming, drone motion, training videos, and documentary-style storytelling under one focused team.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
                  Request a Quote
                </a>
                <a href="#services" className="rounded border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-red-600 hover:text-red-400">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hidden rounded border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur lg:block">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Why clients choose us</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-gray-300">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Production support that fits the project</p>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                Crafted for brands, teams, and organizations that need more than standard coverage.
              </h2>
              <p className="text-base leading-8 text-gray-400">
                Whether the goal is a polished executive image, a livestreamed event, or a thoughtful documentary-style feature, we shape each production around your audience and message.
              </p>
              <div className="rounded border border-white/10 bg-[#111111] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Project approach</p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  We focus on planning, visual clarity, and clean execution so every asset feels intentional from first frame to final delivery.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {servicePillars.map((service, index) => (
                <article key={service.title} className="rounded border border-white/10 bg-[#111111] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold uppercase tracking-[0.2em] text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#060606] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 border-l-4 border-red-600 pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Service delivery</p>
              <h2 className="text-3xl font-black uppercase sm:text-4xl">Built around your message, audience, and timeline.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                ['Visual strategy', 'Every project begins with a clear creative direction so the final content supports your goals rather than simply filling a brief.'],
                ['Professional execution', 'We handle shooting, lighting, direction, and post-production so your team can stay focused on the broader objective.'],
                ['Flexible support', 'From one-off productions to recurring content, we structure the workflow around your availability and turnaround needs.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded border border-white/10 bg-[#0a0a0a] p-6">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Start the conversation</p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Let’s build the production plan that fits your next project.</h2>
            </div>
            <div className="rounded border border-white/10 bg-[#111111] p-4 sm:p-8">
              <iframe
                id="iFrameResizerAdditional"
                src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381"
                frameBorder="0"
                style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
                scrolling="no"
                title="Dubsado Embedded Additional Production Request Form"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
