"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Counter Animation Component
const CounterItem = ({ target, suffix = "", text }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% screen e asle animation suru hobe
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      const duration = 2000; // 2 seconds a count complete hobe

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for smooth stop
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * target));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isVisible, target]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center text-center w-full px-[2vw]">
      <h3 className="text-white text-[8vw] md:text-[4vw] font-bold leading-none">
        {count}{suffix}
      </h3>
      <p className="text-gray-300 text-[2.5vw] md:text-[0.9vw] font-medium tracking-[0.15em] uppercase mt-[1.5vh] max-w-[80%] md:max-w-[70%]">
        {text}
      </p>
    </div>
  );
};

export default function StatsCounter() {
  const statsData = [
    { target: 500, suffix: "+", text: "Projects Completed" },
    { target: 10, suffix: "+", text: "Years of Experience" },
    { target: 99, suffix: "%", text: "Client Satisfaction" },
    { target: 50, suffix: "+", text: "Corporate Partners" },
  ];

  return (
    <section className="relative w-full py-[12vh] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://finalcutmultimedia.com/wp-content/uploads/2025/10/492938573_2539452473058415_7828940050462539546_n.jpg"
          alt="Final Cut Multimedia Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay (Screenshot er moto background ta dark korar jonno) */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[90vw] flex flex-col items-center">
        
        {/* Title Section */}
        <div className="flex flex-col items-center mb-[8vh]">
          <span className="text-gray-400 text-[3vw] md:text-[1vw] tracking-[0.2em] uppercase font-medium mb-[1vh]">
            Our Stats
          </span>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[0.8vw] md:w-[0.2vw] h-[4vh] bg-[#D4AF37]"></div>
            <h2 className="text-white text-[6vw] md:text-[3vw] font-bold tracking-widest uppercase leading-none">
              Why Work With Us
            </h2>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-y-[5vh] md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {statsData.map((stat, index) => (
            <div key={index} className="pt-[4vh] md:pt-0">
              <CounterItem target={stat.target} suffix={stat.suffix} text={stat.text} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}