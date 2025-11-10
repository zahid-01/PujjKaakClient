"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ autoplay = false }) => {
  const testimonials = [
    {
      quote:
        "The quality, convenience, and freshness have completely transformed how we buy meat. This is exactly what Kashmir has been waiting for!",
      name: "Basit Bashir",
      designation: "Srinagar",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Ordering was seamless, and the quality exceeded our expectations. The platform’s flexibility—from cut selection to delivery timing—is remarkable.",
      name: "Mateen Ahmed",
      designation: "Srinagar",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
    },

    {
      quote:
        "Outstanding service and quality! It's rare to find a platform that truly delivers on all its promises—freshness, speed, and trust.",
      name: "Zahid Hussain Khan",
      designation: "Srinagar",
      src: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D0",
    },
  ];
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-100 py-28">
      <div className="absolute -right-12 top-10 h-72 w-72 rounded-full bg-[#d50b23]/15 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-6xl rounded-[3.5rem] border border-white/50 bg-white/85 px-6 py-18 shadow-[0_45px_120px_rgba(213,11,35,0.12)] backdrop-blur-xl antialiased md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-[#d50b23]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d50b23]">
                Voices from Srinagar
              </span>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-[38px] md:leading-[1.1]">
                Loved by families that value flavour, freshness, and trust.
              </h2>
              <p className="text-base text-slate-600">
                Hear how PUJJ KAAK elevates the everyday meal—from weekday dinners
                to weekend feasts.
              </p>
            </div>
            <div className="relative hidden w-full overflow-hidden rounded-3xl border border-[#d50b23]/15 bg-[#d50b23]/5 p-6 text-left shadow-inner shadow-red-200 md:block">
              <div className="absolute right-6 top-6 text-5xl text-[#d50b23]/30">✓</div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d50b23]">
                Fastest service
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Free of cost delivery
              </p>
            </div>
          </div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
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
                    className="absolute inset-0 origin-bottom rounded-[3rem] border border-white/60 bg-white/90 shadow-[0_40px_90px_rgba(213,11,35,0.12)] backdrop-blur"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-[3rem] object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-12 md:mt-10 md:flex-row md:items-end">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="max-w-xl rounded-[2.5rem] border border-white/60 bg-white/90 p-10 shadow-[0_25px_80px_rgba(213,11,35,0.08)] backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d50b23]/10 text-[#d50b23]">
                “
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm font-medium uppercase tracking-wide text-[#d50b23]">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>
            <motion.p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 self-start md:self-center">
            <button
              onClick={handlePrev}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/95 text-[#d50b23] shadow-lg shadow-rose-200 transition hover:-translate-y-1 hover:border-[#d50b23]/30 hover:text-[#b50a1d]"
            >
              <IconArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-[#d50b23] bg-[#d50b23] text-white shadow-lg shadow-rose-300 transition hover:-translate-y-1 hover:bg-[#b50a1d]"
            >
              <IconArrowRight className="h-6 w-6 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
