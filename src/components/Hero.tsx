import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const yearsRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: yearsRef, delay: 800 },
      { ref: subtitleRef, delay: 1600 },
      { ref: quoteRef, delay: 2400 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        }, delay);
      }
    });
  }, []);

  return (
    <section id="top" className="relative h-screen flex flex-col justify-center bg-neutral-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1569982/pexels-photo-1569982.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 text-center z-10 flex-1 flex flex-col justify-center">
        <div className="space-y-4">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal opacity-0 translate-y-8 scale-95 transition-all duration-1000 ease-out"
          >
            Amy Torrilhon
          </h1>
          <h2
            ref={yearsRef}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light opacity-0 translate-y-8 scale-95 transition-all duration-1000 ease-out"
          >
            100 ans
          </h2>
          <h3
            ref={subtitleRef}
            className="text-2xl md:text-3xl font-serif font-light opacity-0 translate-y-8 scale-95 transition-all duration-1000 ease-out"
          >
            Une Anthologie
          </h3>
        </div>

        <p
          ref={quoteRef}
          className="text-xl md:text-2xl italic max-w-2xl mx-auto mt-16 mb-32 opacity-0 translate-y-8 scale-95 transition-all duration-1000 ease-out"
        >
          « L’art est le cœur de la vie ! »
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-neutral-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-neutral-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
