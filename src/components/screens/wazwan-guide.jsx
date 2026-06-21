import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUtensils, FaArrowRight, FaClock, FaCheckCircle } from "react-icons/fa";

const WAZWAN_DISHES = [
  {
    id: "rista",
    name: "Wazwan Rista",
    desc: "Spiced, tender lamb meatballs pounded with wooden mallets and simmered in a rich, red chili saffron gravy.",
    cut: "Rista Mutton (Double-Minced)",
    cutId: "rista-meat",
    price: 860,
    prepTime: "90 Mins",
    spices: "Pran (Kashmiri shallots), red pepper powder, wild cardamom, and animal fat binder.",
    technique: "Leg meat must be hammered hot on a stone block with wooden mallets until the fibers fully emulsify with the fat.",
  },
  {
    id: "rogan-josh",
    name: "Rogan Josh",
    desc: "The crown jewel of Kashmiri curries. Boneless and bone-in mutton slow-cooked with yogurt, fennel, and local spices.",
    cut: "Prime Rib Chops (Kari Cut)",
    cutId: "rib-chops",
    price: 820,
    prepTime: "120 Mins",
    spices: "Mawal (cockscomb flower extraction), Kashmiri chili, fennel powder, and ginger.",
    technique: "Use a mix of chops and shoulder blocks. The bone marrow dissolves into the gravy to create the signature velvet body.",
  },
  {
    id: "gushtaba",
    name: "Wazwan Gushtaba",
    desc: "Soft, white mutton meatballs pounded to a silky smooth paste and slow-cooked in a tangy, spiced yogurt gravy.",
    cut: "Gushtaba Minced Mutton",
    cutId: "gushtaba-meat",
    price: 860,
    prepTime: "150 Mins",
    spices: "Asafoetida, dry mint, green cardamom, and dense mutton suet fat.",
    technique: "Meat must be completely trimmed of silver skin and tendons, then hammered with suet fat until a velvety, light dough forms.",
  },
  {
    id: "tabak-maaz",
    name: "Tabak Maaz",
    desc: "Flat rib ribs parboiled in seasoned milk and cardamom, then pan-fried in pure Kashmiri ghee to a golden crisp.",
    cut: "Tabak Maaz Rib Slabs",
    cutId: "tabak-maaz-slabs",
    price: 880,
    prepTime: "75 Mins",
    spices: "Fennel, turmeric, garlic extract, cardamoms, boiled in local whole-cream milk.",
    technique: "Requires double-layered fat cap ribs. Boiled first to tenderize the tissues, then pan-roasted until the fat crisp shell locks in.",
  },
];

export default function WazwanGuide() {
  const [selectedDish, setSelectedDish] = useState("rista");
  const [added, setAdded] = useState(false);

  const activeDish = WAZWAN_DISHES.find((d) => d.id === selectedDish);

  const handleAddCut = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);

    const event = new CustomEvent("addToCrate", {
      detail: {
        id: activeDish.cutId,
        name: activeDish.cut,
        price: activeDish.price,
        unit: "kg",
        source: "Traditional Wazwan Cut",
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <section id="wazwan-planner" className="relative overflow-hidden bg-transparent py-24 border-t border-stone-200">
      <div className="absolute left-[-5%] top-1/3 h-80 w-80 rounded-full bg-emerald-100/15 blur-[100px]" />
      
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
            Wazwan Culinary Guide
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Which Wazwan Dish Are You Cooking?
          </h2>
          <p className="max-w-2xl text-slate-600 font-sans text-sm md:text-base leading-relaxed">
            Kashmiri cooking requires precision butchery. Select your target dish below to discover the exact cut of meat needed and add the raw ingredients directly to your custom box.
          </p>
        </div>

        {/* Interactive layout */}
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] items-start">
          
          {/* List of dishes */}
          <div className="flex flex-col gap-3">
            {WAZWAN_DISHES.map((dish) => (
              <button
                key={dish.id}
                onClick={() => setSelectedDish(dish.id)}
                className={`relative w-full rounded-2xl p-5 text-left border transition-all duration-300 ${
                  selectedDish === dish.id
                    ? "border-[#1B5E3B] bg-emerald-50/30 shadow-sm"
                    : "border-stone-200 bg-white/60 hover:border-stone-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base font-bold text-slate-800">
                    {dish.name}
                  </span>
                  {selectedDish === dish.id && <FaArrowRight className="text-xs text-[#1B5E3B]" />}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 font-sans">{dish.desc}</p>
              </button>
            ))}
          </div>

          {/* Dish Detail Showcase Card */}
          <div className="rounded-[2.5rem] border border-emerald-100 bg-white/95 p-8 md:p-10 shadow-md relative border-green-glow min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDish.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Title & Stats */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-5">
                  <div className="text-left">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">{activeDish.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 font-sans">{activeDish.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-50 border border-stone-200 px-3 py-1 text-[10px] text-slate-600 font-bold uppercase shadow-sm">
                    <FaClock className="text-[#1B5E3B] text-[9px]" /> Prep: {activeDish.prepTime}
                  </span>
                </div>

                {/* Specifics */}
                <div className="grid gap-6 sm:grid-cols-2 text-left">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-[#1B5E3B] font-bold">Traditional Spice Blend</h4>
                    <p className="text-xs leading-relaxed text-slate-600 font-sans font-medium">{activeDish.spices}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-[#1B5E3B] font-bold">Chef's Technique</h4>
                    <p className="text-xs leading-relaxed text-slate-600 font-sans font-medium">{activeDish.technique}</p>
                  </div>
                </div>

                {/* Meat Cut details */}
                <div className="rounded-2xl bg-stone-50 p-4 border border-stone-200 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider font-semibold block">Required Meat Cut</span>
                    <span className="font-serif text-base font-bold text-slate-800 mt-0.5 block">{activeDish.cut}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-500 tracking-wider font-semibold block">Est. Price</span>
                    <span className="font-serif text-base font-bold text-[#1B5E3B] mt-0.5 block">₹{activeDish.price}/kg</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex justify-end">
              <button
                onClick={handleAddCut}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition duration-300 ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-[#1B5E3B] text-white hover:bg-[#154b2f] shadow-md shadow-[#1B5E3B]/20"
                }`}
              >
                {added ? (
                  <>
                    <FaCheckCircle />
                    <span>Added Recommended Cut</span>
                  </>
                ) : (
                  <>
                    <FaUtensils className="text-[10px]" />
                    <span>Queue Chef's Cut (1 kg)</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
