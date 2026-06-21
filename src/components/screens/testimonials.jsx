"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCallback, useEffect, useState } from "react";

export const AnimatedTestimonials = ({ autoplay = false }) => {
  const Motion = motion;
  const testimonials = [
    {
      quote:
        "The quality, convenience, and freshness of Halal Nation's mutton have completely transformed how our family cooks. Sourced straight from Gurez pasture sheep—absolute perfection!",
      name: "Basit Bashir",
      designation: "Srinagar Foodie",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote:
        "Ordering was seamless. The precision of the Rogan Josh and Gushtaba cuts exceeded our expectations. Truly a gold standard butchery in Kashmir.",
      name: "Mateen Ahmed",
      designation: "Culinary Enthusiast",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&auto=format&fit=crop",
    },
    {
      quote:
        "Outstanding cold-chain preservation and premium packaging! The meat was cold, completely dry-sealed, and exceptionally tender. Halal Nation is highly recommended.",
      name: "Zahid Khan",
      designation: "Executive Chef",
      src: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=200&auto=format&fit=crop",
    },
  ];
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-28 border-t border-stone-200">
      {/* Background Orbs */}
      <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-emerald-100/20 blur-[120px]" />
      <div className="absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-amber-100/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl rounded-[3.5rem] border border-emerald-100 bg-white/85 px-6 py-16 shadow-[0_30px_70px_rgba(27,94,59,0.04)] backdrop-blur-xl border-green-glow antialiased md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-12 items-center">
          
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6 text-left">
              <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
                Gourmet Reviews
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 md:text-[38px] md:leading-[1.1]">
                Loved by families that value culinary precision.
              </h2>
              <p className="text-base text-slate-655 font-sans">
                Hear how Halal Nation elevates the everyday home meal from weekday dinners to luxury Wazwan banquets.
              </p>
            </div>
            
            <div className="relative hidden w-full overflow-hidden rounded-3xl border border-stone-200 bg-stone-50/50 p-6 text-left md:block shadow-inner">
              <div className="absolute right-6 top-6 text-5xl text-[#1B5E3B]/10 font-serif">“</div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1B5E3B]">
                Premium Sourcing Guarantee
              </p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed font-medium">
                Premium quality ethical sourcing, 100% traceably sourced sheep from local Kashmiri meadows.
              </p>
            </div>
          </div>

          {/* Testimonial Photo frame */}
          <div className="relative h-72 w-full flex justify-center items-center">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <Motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : 10,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute w-52 h-52 origin-bottom rounded-[2rem] border border-stone-200 bg-white shadow-lg overflow-hidden"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500"
                    draggable={false}
                  />
                </Motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

        {/* Testimonial Quote details */}
        <div className="mt-12 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <Motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl rounded-[2.5rem] border border-emerald-100 bg-white/95 p-8 md:p-10 shadow-md border-green-glow text-left"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#1B5E3B] font-serif text-lg font-bold">
                “
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  {testimonials[active].name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1B5E3B] mt-0.5">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-655 font-sans italic">
              {testimonials[active].quote}
            </p>
          </Motion.div>

          {/* Nav buttons */}
          <div className="flex gap-4 self-start md:self-center">
            <button
              onClick={handlePrev}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:text-[#1B5E3B] hover:bg-stone-50"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-[#1B5E3B] bg-[#1B5E3B] text-white shadow-md shadow-[#1B5E3B]/20 transition hover:-translate-y-1 hover:bg-[#154b2f]"
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
