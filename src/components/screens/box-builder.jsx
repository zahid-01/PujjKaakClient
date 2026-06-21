import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaBox, FaSnowflake, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BoxBuilder() {
  const navigate = useNavigate();
  const [crateItems, setCrateItems] = useState([
    { id: "rib-chops", name: "Prime Rib Chops (Kari Cut)", price: 820, unit: "kg", weight: 1.0 },
    { id: "chicken-tujji", name: "Kashmiri Chicken Tujji Skewers", price: 320, unit: "box", weight: 2 },
  ]);
  const [packaging, setPackaging] = useState("wool"); // wool or cedar

  // Listen to external addToCrate events
  useEffect(() => {
    const handleAdd = (e) => {
      const { id, name, price, unit } = e.detail;
      setCrateItems((prev) => {
        const existing = prev.find((item) => item.id === id);
        if (existing) {
          return prev.map((item) =>
            item.id === id
              ? { ...item, weight: item.weight + (unit === "kg" ? 0.5 : 1) }
              : item
          );
        } else {
          return [...prev, { id, name, price, unit, weight: unit === "kg" ? 1.0 : 1 }];
        }
      });
    };

    window.addEventListener("addToCrate", handleAdd);
    return () => window.removeEventListener("addToCrate", handleAdd);
  }, []);

  const updateWeight = (id, delta) => {
    setCrateItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextWeight = item.weight + delta;
            return { ...item, weight: Math.max(0, nextWeight) };
          }
          return item;
        })
        .filter((item) => item.weight > 0)
    );
  };

  const removeItem = (id) => {
    setCrateItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalWeightKg = crateItems.reduce((acc, item) => {
    return acc + (item.unit === "kg" ? item.weight : item.weight * 0.4);
  }, 0);

  const subtotal = crateItems.reduce((acc, item) => acc + item.price * item.weight, 0);
  const packagingFee = packaging === "cedar" ? 150 : 0;
  const totalCost = subtotal > 0 ? subtotal + packagingFee : 0;

  const handleCheckout = () => {
    navigate("/coming-soon");
  };

  return (
    <section id="box-builder" className="relative overflow-hidden bg-transparent py-24 border-t border-stone-200">
      {/* Background visual accents */}
      <div className="absolute right-[10%] top-1/4 h-96 w-96 rounded-full bg-amber-100/20 blur-[120px]" />
      <div className="absolute left-[10%] bottom-1/4 h-96 w-96 rounded-full bg-emerald-100/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
            Curate Your Crate
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Interactive Box Builder
          </h2>
          <p className="max-w-2xl text-slate-650 font-sans text-sm md:text-base leading-relaxed">
            Mix and match your preferred meat cuts. Adjust weights in real-time, select packaging, and preview your custom cold-chain shipping box.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left panel: Crate Manager */}
          <div className="rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-md flex flex-col justify-between border-green-glow">
            <div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-6 mb-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FaBox className="text-[#1B5E3B] text-sm" /> Your Custom Crate
                </h3>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                  {crateItems.length} Distinct Cuts
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4 min-h-[220px]">
                <AnimatePresence initial={false}>
                  {crateItems.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-[200px] flex flex-col items-center justify-center text-center text-stone-400"
                    >
                      <FaBox className="text-4xl text-stone-300 mb-3" />
                      <p className="font-medium text-sm">Your crate is empty.</p>
                      <p className="text-xs text-stone-500 mt-1">Select cuts above to begin curating your box.</p>
                    </motion.div>
                  ) : (
                    crateItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-50/50 bg-emerald-50/10 p-4 hover:border-emerald-100 transition text-left"
                      >
                        <div className="flex-1 min-w-[200px]">
                          <p className="font-serif text-sm font-bold text-slate-800">{item.name}</p>
                          <p className="text-[10px] text-slate-500 mt-0.5 font-sans">
                            ₹{item.price} per {item.unit}
                          </p>
                        </div>

                        {/* Adjuster */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateWeight(item.id, item.unit === "kg" ? -0.5 : -1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-slate-700 hover:bg-stone-50 transition text-sm font-bold shadow-sm"
                          >
                            -
                          </button>
                          <span className="min-w-[50px] text-center font-mono text-xs font-bold text-[#1B5E3B]">
                            {item.weight.toFixed(1)} {item.unit}
                          </span>
                          <button
                            onClick={() => updateWeight(item.id, item.unit === "kg" ? 0.5 : 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-stone-200 bg-white text-slate-700 hover:bg-stone-50 transition text-sm font-bold shadow-sm"
                          >
                            +
                          </button>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-2 text-stone-400 hover:text-red-500 transition duration-200"
                            title="Remove Cut"
                          >
                            <FaTrash className="text-xs" />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Packaging Options */}
              <div className="border-t border-stone-100 pt-6 mt-8 space-y-4 text-left">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500">Choose Insulation & Packaging</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => setPackaging("wool")}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      packaging === "wool"
                        ? "border-[#1B5E3B] bg-emerald-50/20 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-slate-800">Insulated Fiber Shield</span>
                      <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-emerald-800 font-bold uppercase">Free</span>
                    </div>
                    <p className="text-[11px] text-slate-650 mt-2">
                      Vacuum-sealed in compostable starch & wool pads. Keeps meat chilled for up to 36 hours.
                    </p>
                  </button>
                  <button
                    onClick={() => setPackaging("cedar")}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      packaging === "cedar"
                        ? "border-[#1B5E3B] bg-emerald-50/20 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-slate-800">Halal Nation Cedar Crate</span>
                      <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded font-bold uppercase">+₹150</span>
                    </div>
                    <p className="text-[11px] text-slate-655 mt-2">
                      Handcrafted reusable cedar crate, insulated with wool lining. Ideal for gifts and Wazwan banquets.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Live Crate Visualization */}
          <div className="rounded-[2.5rem] border border-emerald-100 bg-white/95 p-8 shadow-md flex flex-col justify-between gap-8 border-green-glow">
            
            {/* Visual Crate Graphic */}
            <div className="relative rounded-3xl bg-stone-50 p-6 border border-stone-200 overflow-hidden flex flex-col items-center">
              {/* Core Temp Sensor Badge */}
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/90 px-3 py-1 text-[10px] font-bold text-slate-600 shadow-sm">
                <FaSnowflake className="text-[#1B5E3B] animate-spin" style={{ animationDuration: "10s" }} />
                <span>Internal Temp: 1.8°C</span>
              </div>

              {/* Dynamic visual representation */}
              <div className="mt-8 flex flex-col items-center w-full">
                <div className="relative w-36 h-28 border-2 border-dashed border-stone-300 rounded-2xl flex items-center justify-center p-3 bg-white">
                  <div className="absolute inset-0 bg-[#1B5E3B]/5 rounded-2xl animate-pulse" />
                  
                  {crateItems.length === 0 ? (
                    <span className="text-[10px] uppercase text-stone-400 font-bold">Crate Empty</span>
                  ) : (
                    <div className="flex flex-wrap gap-1 items-center justify-center w-full max-h-full overflow-hidden">
                      {crateItems.slice(0, 5).map((item, index) => (
                        <span
                          key={item.id}
                          className="bg-[#1B5E3B] text-white border-none px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider animate-bounce"
                          style={{ animationDelay: `${index * 0.1}s`, animationDuration: "2s" }}
                        >
                          {item.name.split(" ")[0]}
                        </span>
                      ))}
                      {crateItems.length > 5 && (
                        <span className="bg-amber-500 text-white px-1.5 py-0.5 rounded-full text-[8px] font-bold">
                          +{crateItems.length - 5} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="w-44 h-2 bg-stone-200 rounded-full shadow-inner mt-1 opacity-60" />
                <p className="text-[10px] uppercase text-slate-500 tracking-widest font-semibold mt-4">
                  Visual Crate Loading Status
                </p>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="space-y-4 text-left">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Total Cuts Weight:</span>
                <span className="font-mono text-slate-800 font-bold">{totalWeightKg.toFixed(2)} kg</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Meat Subtotal:</span>
                <span className="font-mono text-slate-800 font-bold">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Insulation Packaging:</span>
                <span className="font-mono text-slate-800 font-bold">₹{packagingFee}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-655 border-b border-stone-100 pb-4">
                <span>Delivery:</span>
                <span className="text-emerald-700 font-bold uppercase text-[10px] bg-emerald-100 px-2.5 py-0.5 rounded">Free</span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <div>
                  <span className="text-xs uppercase text-slate-500 block">Total Est. Price</span>
                  <span className="font-serif text-3xl font-black text-[#1B5E3B]">
                    ₹{totalCost.toLocaleString()}
                  </span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={crateItems.length === 0}
                  className={`flex items-center gap-2 rounded-2xl px-6 py-4 font-bold text-xs uppercase tracking-wider transition duration-300 ${
                    crateItems.length === 0
                      ? "bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200"
                      : "bg-[#1B5E3B] text-white hover:bg-[#154b2f] hover:-translate-y-0.5 shadow-lg shadow-[#1B5E3B]/20"
                  }`}
                >
                  <span>Pre-order Crate</span>
                  <FaChevronRight className="text-[10px]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
