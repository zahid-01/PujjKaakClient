import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaCertificate, FaUtensils } from "react-icons/fa";

const CATEGORIES = [
  { id: "mutton", label: "Kashmiri Mutton" },
  { id: "poultry", label: "Premium Poultry" },
  { id: "wazwan", label: "Wazwan Specials" },
  { id: "marinades", label: "Grills & Marinades" },
];

const PRODUCTS = {
  mutton: [
    {
      id: "rib-chops",
      name: "Prime Rib Chops (Kari Cut)",
      desc: "Tender ribs chopped to precision by Halal Nation. Exquisite flavor with ideal fat layering.",
      tenderness: 5,
      marbling: 4,
      source: "Gurez Alpine Pastures",
      price: 820,
      unit: "kg",
      bestFor: "Rogan Josh & Wazwan Kari",
    },
    {
      id: "shoulder-shaan",
      name: "Shoulder Cut (Shaan)",
      desc: "Richly marbled shoulder cuts that melt in your mouth when slow-cooked.",
      tenderness: 4,
      marbling: 5,
      source: "Sonamarg Grasslands",
      price: 790,
      unit: "kg",
      bestFor: "Slow Cooking & Stews",
    },
    {
      id: "boneless-mutton",
      name: "Luxury Boneless Mutton",
      desc: "Lean cuts of premium mutton, hand-trimmed of silver skin and excess fat.",
      tenderness: 4.5,
      marbling: 3,
      source: "Drass Valley Pastures",
      price: 890,
      unit: "kg",
      bestFor: "Mutton Kanti & Korma",
    },
  ],
  poultry: [
    {
      id: "chicken-curry",
      name: "Free-Range Chicken (Curry Cut)",
      desc: "Clean, farm-raised organic chicken chopped into perfect curry-sized portions.",
      tenderness: 4,
      marbling: 1.5,
      source: "Pampore Organic Farms",
      price: 380,
      unit: "kg",
      bestFor: "Kokur Yakhni & Chicken Curry",
    },
    {
      id: "chicken-breast",
      name: "Tender Chicken Breast Fillet",
      desc: "Juicy, high-protein breast fillets, double-trimmed for maximum lean meat.",
      tenderness: 5,
      marbling: 1,
      source: "Pampore Organic Farms",
      price: 450,
      unit: "kg",
      bestFor: "Kanti Grills & Pan Fry",
    },
  ],
  wazwan: [
    {
      id: "rista-meat",
      name: "Rista Mutton (Double-Minced)",
      desc: "Fine minced mutton from the leg portion, blended with fresh kidney fat, ready for Rista rolling.",
      tenderness: 5,
      marbling: 5,
      source: "Sonamarg Highlands",
      price: 860,
      unit: "kg",
      bestFor: "Wazwan Rista Curry",
    },
    {
      id: "gushtaba-meat",
      name: "Gushtaba Minced Mutton",
      desc: "Flawlessly ground mutton whipped with natural fats, ideal for making velvety Gushtabas.",
      tenderness: 5,
      marbling: 5,
      source: "Gurez Valley",
      price: 860,
      unit: "kg",
      bestFor: "Wazwan Gushtaba (White Gravy)",
    },
    {
      id: "tabak-maaz-slabs",
      name: "Tabak Maaz Rib Slabs",
      desc: "Double flat rib racks marinated in milk, wild cardamom and fennel, ready for ghee shallow-frying.",
      tenderness: 4,
      marbling: 5,
      source: "Drass High Pastures",
      price: 880,
      unit: "kg",
      bestFor: "Crispy Pan Fried Tabak Maaz",
    },
  ],
  marinades: [
    {
      id: "mutton-kanti-mix",
      name: "Spiced Mutton Kanti Mix",
      desc: "Boneless cubes pre-marinated in Kashmiri red chili paste, mint paste, and local mountain garlic.",
      tenderness: 4.5,
      marbling: 4,
      source: "Halal Nation Spicery",
      price: 490,
      unit: "box",
      bestFor: "Instant Pan Grilling",
    },
    {
      id: "chicken-tujji",
      name: "Kashmiri Chicken Tujji Skewers",
      desc: "Succulent chicken chunks seasoned in our signature Tujji marinade, complete with iron skewers.",
      tenderness: 5,
      marbling: 2,
      source: "Halal Nation Spicery",
      price: 320,
      unit: "box",
      bestFor: "Charcoal BBQ Grilling",
    },
  ],
};

export default function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState("mutton");

  return (
    <section id="butchers-table" className="relative overflow-hidden bg-transparent py-24">
      {/* Visual Accent Gradients */}
      <div className="absolute left-[5%] top-1/4 h-80 w-80 rounded-full bg-emerald-100/20 blur-[100px]" />
      <div className="absolute right-[5%] bottom-1/4 h-80 w-80 rounded-full bg-amber-100/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
            The Butcher's Table
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Explore Premium Cuts & Marinades
          </h2>
          <p className="max-w-2xl text-slate-650 font-sans text-sm md:text-base leading-relaxed">
            Every cut is handpicked and customized by Halal Nation. Order raw mutton, poultry, or specialty marinated skewers directly to your kitchen.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                activeCategory === cat.id
                  ? "bg-[#1B5E3B] text-white shadow-md shadow-[#1B5E3B]/20"
                  : "border border-emerald-100 bg-white text-[#1B5E3B] hover:bg-stone-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {PRODUCTS[activeCategory].map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={prod.id}
                className="group relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white/90 p-6 shadow-md hover:border-emerald-250 hover:shadow-xl transition duration-300 flex flex-col justify-between border-green-glow"
              >
                {/* Highlight line */}
                <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#1B5E3B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Title & Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#1B5E3B] transition-colors duration-300 text-left">
                      {prod.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 text-left">
                    {prod.desc}
                  </p>

                  {/* Sourcing Location Info */}
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-left">
                    <FaCertificate className="text-amber-500/80" />
                    <span>Origin: {prod.source}</span>
                  </div>

                  {/* Specs */}
                  <div className="mt-4 space-y-2 border-t border-stone-100 pt-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-650">
                      <span className="flex items-center gap-1">
                        <FaFire className="text-[#1B5E3B] text-xs" /> Tenderness
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-3 rounded-full ${
                              i < Math.floor(prod.tenderness)
                                ? "bg-amber-400"
                                : "bg-stone-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-650">
                      <span className="flex items-center gap-1">
                        <FaUtensils className="text-amber-500 text-[10px]" /> Marbling
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-3 rounded-full ${
                              i < prod.marbling ? "bg-[#1B5E3B]" : "bg-stone-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                  <div className="text-left">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Estimated Price</span>
                    <span className="text-lg font-serif font-black text-slate-900">
                      ₹{prod.price} <span className="text-xs text-stone-500">/ {prod.unit}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
