"use client";
import React from 'react';

export default function AboutPage() {
  const principles = [
    '20+ years of production experience',
    'Business-focused creative approach',
    'Professional cinema cameras and production equipment',
    'Reliable communication throughout every project',
    'Full service production from planning to delivery',
    'Long-term partnership mindset',
  ];

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative flex min-h-[72vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/IMG_2841-scaled.jpeg"
            alt="Final Cut Multimedia production team"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">About us</p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
            About Final Cut Multimedia
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Charlotte&apos;s trusted video production agency for businesses that want to grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://charlotte.finalcutmultimedia.com/public/form/view/615ca7817e143cd0e3e7e381"
              className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6 rounded border border-white/10 bg-[#111111] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Our story</p>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
              We believe great video content should do more than look impressive.
            </h2>
            <p className="text-base leading-8 text-gray-400">
              It should communicate clearly, build trust, strengthen your brand, and support your business goals.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-[#111111] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Who we work with</p>
            <p className="mt-4 text-base leading-8 text-gray-400">
              We partner with businesses, organizations, agencies, and nonprofits to create professional video and photography content that helps them connect with their audience and stand out in a competitive market.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-400">
              From promotional videos and corporate events to recurring content creation and post-production, we manage the creative process from planning to final delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#060606] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded border border-white/10 bg-[#111111]">
            <img
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781697016/Use_this_picture_k9euqa.jpg"
              alt="Final Cut Multimedia creative team"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">More than a production company</p>
            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
              We are a creative production partner, not just a camera crew for the day.
            </h2>
            <p className="text-base leading-8 text-gray-400">
              We help clients develop content strategies, streamline production, and build a library of professional assets that can be used across websites, social media, presentations, recruiting, and marketing campaigns.
            </p>
            <p className="text-base leading-8 text-gray-400">
              Whether we are producing a single project or providing ongoing monthly content, our goal is always the same: create content with purpose and deliver an experience our clients can rely on.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 border-l-4 border-red-600 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Why businesses choose us</p>
            <h2 className="text-3xl font-black uppercase sm:text-4xl">A production partner built around clarity, quality, and trust.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((item) => (
              <div key={item} className="rounded border border-white/10 bg-[#111111] p-6">
                <div className="mb-4 h-2.5 w-2.5 rounded-full bg-red-600" />
                <p className="text-sm leading-7 text-gray-400">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#060606] px-6 py-20">
        <div className="mx-auto max-w-4xl rounded border border-white/10 bg-[#111111] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">Our mission</p>
          <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl">To help businesses communicate their story through professional video and photography that inspires confidence and creates lasting value.</h2>
          <p className="mt-6 text-base leading-8 text-gray-400">
            Whether you&apos;re planning your first project or looking for a long-term production partner, we&apos;d love to learn more about your business and your goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://charlotte.finalcutmultimedia.com/public/form/view/615ca7817e143cd0e3e7e381"
              className="rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}