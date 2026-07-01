"use client";
import React, { useEffect } from 'react';

export default function VideoEditingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    script.async = true;

    script.onload = () => {
      if (window.iFrameResize) {
        setTimeout(() => {
          window.iFrameResize(
            { checkOrigin: false, heightCalculationMethod: 'taggedElement' },
            '#iFrameResizerEditing'
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

  const services = [
    'Corporate and commercial edits',
    'Event highlight films',
    'Testimonial and interview edits',
    'Training and explainer videos',
    'Short-form content for social platforms',
    'Podcast and multi-camera finishing',
  ];

  const deliverables = [
    'Color correction and audio cleanup',
    'Motion graphics and text overlays',
    'Captioning and platform-ready exports',
    'Revision rounds and final delivery',
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
            <img src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2836-scaled.jpeg" alt="Video editing" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-red-600">Post Production Services</p>
              <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">Video Editing</h1>
              <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
                Raw footage becomes polished content when it is shaped with strong pacing, thoughtful sound, and a clear visual story.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700">
                  Request Editing
                </a>
                <a href="#services" className="rounded border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-red-600 hover:text-red-400">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Finish the story properly</p>
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">Professional editing that gives your footage purpose and polish.</h2>
              <p className="text-base leading-8 text-gray-400">
                We turn footage into compelling content for websites, campaigns, presentations, social media, and internal communications without losing your brand tone.
              </p>
              <div className="rounded border border-white/10 bg-[#111111] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Included support</p>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  We handle organization, storytelling, pacing, audio refinement, and final exports so the result feels clean and ready to publish.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {services.map((item) => (
                <div key={item} className="rounded border border-white/10 bg-[#111111] p-5 text-sm leading-7 text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#060606] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 border-l-4 border-red-600 pl-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">What’s included</p>
              <h2 className="text-3xl font-black uppercase sm:text-4xl">The finishing touches that make the final cut feel professional.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="rounded border border-white/10 bg-[#0a0a0a] p-6 text-sm leading-7 text-gray-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Start your edit</p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Let’s turn your footage into polished content that works.</h2>
            </div>
            <div className="rounded border border-white/10 bg-[#111111] p-4 sm:p-8">
              <iframe
                id="iFrameResizerEditing"
                src="https://hello.dubsado.com/public/form/view/615ca7817e143cd0e3e7e381"
                frameBorder="0"
                style={{ width: '1px', minWidth: '100%', overflow: 'hidden', height: '1560px' }}
                scrolling="no"
                title="Dubsado Embedded Video Editing Request Form"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
