import { useState } from "react";
import { motion } from "framer-motion";
import { FaSnowflake, FaThermometerHalf, FaShieldAlt } from "react-icons/fa";

export default function ColdChainSimulator() {
  const [ambientTemp, setAmbientTemp] = useState(30);

  // Even in 42°C summer heat, our insulation maintains it between 1.5°C and 2.8°C
  const calculatedInsideTemp = (1.5 + (ambientTemp - 15) * 0.05).toFixed(1);
  const containmentEfficiency = (100 - (ambientTemp - 15) * 0.12).toFixed(1);
  const freshnessHours = Math.round(36 - (ambientTemp - 15) * 0.3);

  return (
    <section className="relative overflow-hidden bg-transparent py-24 border-t border-stone-200">
      <div className="absolute right-[-5%] bottom-1/3 h-80 w-80 rounded-full bg-emerald-100/10 blur-[120px]" />
      
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
            Thermal Performance
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Live Cold-Chain Simulator
          </h2>
          <p className="max-w-2xl text-slate-655 font-sans text-sm md:text-base leading-relaxed">
            Drag the slider to change the summer heat temperature in Srinagar. See how our advanced triple-layer insulation keeps your cuts at optimal freshness.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Controls & Metrics */}
          <div className="space-y-8 rounded-[2.5rem] border border-emerald-100/80 bg-white/95 p-8 shadow-md border-green-glow">
            
            {/* Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-left">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Ambient External Heat</span>
                <span className="font-mono text-xl font-bold text-[#1B5E3B]">{ambientTemp}°C</span>
              </div>
              <input
                type="range"
                min="15"
                max="42"
                value={ambientTemp}
                onChange={(e) => setAmbientTemp(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#1B5E3B]"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-bold uppercase">
                <span>15°C (Cool Spring)</span>
                <span>30°C (Average Summer)</span>
                <span>42°C (Peak Heat)</span>
              </div>
            </div>

            {/* Simulated Core Stats */}
            <div className="grid gap-4 sm:grid-cols-3 border-t border-stone-100 pt-8">
              
              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-200 text-center">
                <div className="flex justify-center text-sky-500 mb-2">
                  <FaSnowflake className="animate-spin text-lg" style={{ animationDuration: "8s" }} />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Crate Core Temp</span>
                <motion.span
                  key={calculatedInsideTemp}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-serif font-black text-slate-900 mt-1 block"
                >
                  {calculatedInsideTemp}°C
                </motion.span>
              </div>

              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-200 text-center">
                <div className="flex justify-center text-[#1B5E3B] mb-2">
                  <FaThermometerHalf className="text-lg" />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Thermal Hold</span>
                <motion.span
                  key={containmentEfficiency}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-serif font-black text-[#1B5E3B] mt-1 block"
                >
                  {containmentEfficiency}%
                </motion.span>
              </div>

              <div className="rounded-2xl bg-stone-50 p-4 border border-stone-200 text-center">
                <div className="flex justify-center text-emerald-600 mb-2">
                  <FaShieldAlt className="text-lg" />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-bold">Freshness Hold</span>
                <motion.span
                  key={freshnessHours}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-serif font-black text-slate-900 mt-1 block"
                >
                  {freshnessHours} Hrs
                </motion.span>
              </div>

            </div>

          </div>

          {/* Visual Display: Crate Diagram */}
          <div className="relative rounded-[2.5rem] border border-emerald-100 bg-white/95 p-8 shadow-md overflow-hidden text-center border-green-glow flex flex-col justify-center items-center h-[320px]">
            <div className="absolute h-40 w-40 rounded-full bg-emerald-50/10 blur-3xl" />
            
            <div className="relative z-10 w-full max-w-[280px] space-y-6">
              
              <span className="inline-flex rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Status: Chilled & Safe
              </span>

              <div className="space-y-2 text-left">
                <p className="font-serif text-lg font-bold text-slate-900">How it stays cold:</p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1B5E3B]" />
                    Triple-layer insulation reflects ambient heat.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1B5E3B]" />
                    Core vacuum-sealing blocks heat conduction.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1B5E3B]" />
                    High-absorption gel ice packs maintain sub-2°C.
                  </li>
                </ul>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                <motion.div
                  key={containmentEfficiency}
                  initial={{ width: 0 }}
                  animate={{ width: `${containmentEfficiency}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-[#1B5E3B] via-emerald-500 to-amber-400 h-full rounded-full"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
