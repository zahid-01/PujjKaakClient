import { motion } from "framer-motion";
import { FaShieldAlt, FaUtensilSpoon, FaLayerGroup, FaTruck } from "react-icons/fa";

const JOURNEY_STEPS = [
  {
    icon: <FaShieldAlt className="text-xl text-[#1B5E3B]" />,
    title: "1. Vet-Certified Sourcing",
    desc: "We partner directly with trusted local Kashmiri farms. Every animal is subjected to strict veterinary health clearance to ensure disease-free, high-quality, and ethical rearing.",
  },
  {
    icon: <FaUtensilSpoon className="text-xl text-[#1B5E3B]" />,
    title: "2. The Art of Halal Nation",
    desc: "Prepared by local artisanal butchers who have kept the craft alive for generations. We ensure traditional hand-slaughtered Halal methods are met with zero compromise on dignity and precision.",
  },
  {
    icon: <FaLayerGroup className="text-xl text-[#1B5E3B]" />,
    title: "3. Triple-Layer Containment",
    desc: "Cuts are instantly vacuum-sealed in a sterile chamber to halt oxidation. We pack them with compostable organic insulation panels and reusable food-grade gel ice packs.",
  },
  {
    icon: <FaTruck className="text-xl text-[#1B5E3B]" />,
    title: "4. Chilled Doorstep Express",
    desc: "Delivered directly to your Srinagar residence via climate-controlled courier vehicles. Your meat reaches your refrigerator at exactly 1.8°C to 3°C, ready to cook.",
  },
];

export default function BeliefSection() {
  return (
    <section
      id="sourcing"
      className="relative overflow-hidden bg-cover bg-center py-28 px-6 text-slate-900"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470093014438-2ede8d7a4818?w=1000&auto=format&fit=crop&q=80')",
      }}
    >
      {/* Light overlay for rich contrast on white gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/92 to-white/70" />

      <div className="relative mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-center">
        
        {/* Left Side text */}
        <div className="space-y-8 text-left">
          <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
            Heritage & Trust
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-slate-900">
            A meaningful connection between pasture, butcher & kitchen.
          </h2>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-slate-600">
            Taste, transparency, and hygiene shouldn't be mutually exclusive. Since our founding, we have set a goal to elevate the local meat delivery experience, building trust with Kashmiri families who value culinary precision and absolute freshness.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 pt-6">
            <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm shadow-green-100/50">
              <p className="text-3xl font-serif font-black text-[#1B5E3B]">30 Tons</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Styrofoam waste saved
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm shadow-green-100/50">
              <p className="text-3xl font-serif font-black text-[#1B5E3B]">100%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Traceable alpine farms
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline Steps */}
        <div className="space-y-6">
          {JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx}
              className="flex gap-5 rounded-2xl border border-emerald-100 bg-white/95 p-5 md:p-6 shadow-sm hover:border-[#1B5E3B]/30 hover:shadow-md transition-all duration-300 group border-green-glow"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-[#1B5E3B] group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>
              <div className="space-y-1 text-left">
                <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#1B5E3B] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-650 font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
