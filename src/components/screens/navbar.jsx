import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaChevronDown,
  FaShieldAlt,
  FaUtensils,
  FaSnowflake,
  FaBox,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaBookOpen
} from "react-icons/fa";
import Button from "../ui/button/page";
import logoImg from "../../imgs/logo.png";

// Transition configuration for smooth spring animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 14,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export default function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setMobileMenuOpen(false);
    navigate("/coming-soon");
  };

  const handleLinkClick = (hash) => {
    setActive(null);
    setMobileMenuOpen(false);
    if (hash.startsWith("/")) {
      navigate(hash);
    } else {
      if (window.location.pathname !== "/") {
        navigate("/" + hash);
      } else {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <header
      onMouseLeave={() => setActive(null)}
      className="sticky top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-emerald-100/50 bg-white/85 px-4 py-2.5 shadow-[0_15px_40px_rgba(27,94,59,0.06)] backdrop-blur-xl transition-all duration-300 md:px-8 border-green-glow">

        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <Link to="/" onClick={() => handleLinkClick("#")} className="inline-flex items-center gap-3 group">
            {/* Logo image container */}
            <div className="flex h-11 w-auto items-center justify-center overflow-hidden rounded-lg bg-emerald-50/20 p-1 border border-emerald-100/50 group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src={logoImg}
                alt="Halal Nation Logo"
                className="h-9 w-auto object-contain rounded-md"
              />
            </div>


          </Link>
        </div>

        {/* Navigation links (Desktop - Aceternity Hover Menu) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">

          {/* Menu Item 1: Our Cuts */}
          <div onMouseEnter={() => setActive("cuts")} className="relative">
            <button className="flex items-center gap-1 hover:text-[#1B5E3B] py-2 transition-colors cursor-pointer">
              <span>Our Cuts</span>
              <FaChevronDown className={`text-[8px] transition-transform duration-200 ${active === "cuts" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {active === "cuts" && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={transition}
                  className="absolute top-[calc(100%_+_10px)] left-1/2 -translate-x-1/2 pt-2 z-50"
                >
                  <div className="rounded-[2rem] border border-emerald-150/40 bg-white/95 backdrop-blur-xl p-6 shadow-xl shadow-green-900/5 min-w-[540px] border-green-glow">
                    <div className="grid grid-cols-3 gap-6 p-1 text-left">

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Premium Lamb</span>
                        <button onClick={() => handleLinkClick("#butchers-table")} className="group text-left mt-2">
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Prime Rib Chops</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Ideal fat layering, premium bone-in chops.</p>
                        </button>
                        <button onClick={() => handleLinkClick("#butchers-table")} className="group text-left mt-3">
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Shoulder Cut (Shaan)</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Fleshy, marbled cuts optimal for slow cooking.</p>
                        </button>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Wazwan Specials</span>
                        <button onClick={() => handleLinkClick("#butchers-table")} className="group text-left mt-2">
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Rista Mutton Mince</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Silky fine double-minced lamb leg meat.</p>
                        </button>
                        <button onClick={() => handleLinkClick("#butchers-table")} className="group text-left mt-3">
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Tabak Maaz Ribs</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Traditional double-fat cap rib slabs.</p>
                        </button>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Poultry & Grills</span>
                        <button onClick={() => handleLinkClick("#butchers-table")} className="group text-left mt-2">
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Spiced Kanti Mix</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Boneless chunks pre-marinated in local garlic.</p>
                        </button>
                        <button onClick={() => handleLinkClick("#butchers-table")} className="group text-left mt-3">
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Premium Poultry</h4>
                          <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Skinless, clean breast and curry cuts.</p>
                        </button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Menu Item 2: Interactive Tools */}
          <div onMouseEnter={() => setActive("tools")} className="relative">
            <button className="flex items-center gap-1 hover:text-[#1B5E3B] py-2 transition-colors cursor-pointer">
              <span>Interactive Tools</span>
              <FaChevronDown className={`text-[8px] transition-transform duration-200 ${active === "tools" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {active === "tools" && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={transition}
                  className="absolute top-[calc(100%_+_10px)] left-1/2 -translate-x-1/2 pt-2 z-50"
                >
                  <div className="rounded-[2rem] border border-emerald-150/40 bg-white/95 backdrop-blur-xl p-5 shadow-xl shadow-green-900/5 min-w-[340px] border-green-glow">
                    <div className="flex flex-col gap-4 text-left">

                      <button onClick={() => handleLinkClick("#box-builder")} className="flex gap-3 group text-left items-start">
                        <div className="h-9 w-9 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-[#1B5E3B] group-hover:bg-[#1B5E3B] group-hover:text-white transition-colors duration-300">
                          <FaBox className="text-sm" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Custom Crate Builder</h4>
                          <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">Weigh cuts and customize wool packaging.</p>
                        </div>
                      </button>

                      <button onClick={() => handleLinkClick("#cold-chain-simulator")} className="flex gap-3 group text-left items-start">
                        <div className="h-9 w-9 shrink-0 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                          <FaSnowflake className="text-sm" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Live Cold-Chain Simulator</h4>
                          <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">Test sub-2°C thermal preservation in real-time.</p>
                        </div>
                      </button>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Menu Item 3: Brand Journey */}
          <div onMouseEnter={() => setActive("journey")} className="relative">
            <button className="flex items-center gap-1 hover:text-[#1B5E3B] py-2 transition-colors cursor-pointer">
              <span>Brand Journey</span>
              <FaChevronDown className={`text-[8px] transition-transform duration-200 ${active === "journey" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {active === "journey" && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={transition}
                  className="absolute top-[calc(100%_+_10px)] left-1/2 -translate-x-1/2 pt-2 z-50"
                >
                  <div className="rounded-[2rem] border border-emerald-150/40 bg-white/95 backdrop-blur-xl p-5 shadow-xl shadow-green-900/5 min-w-[340px] border-green-glow">
                    <div className="flex flex-col gap-4 text-left">

                      <button onClick={() => handleLinkClick("#wazwan-planner")} className="flex gap-3 group text-left items-start">
                        <div className="h-9 w-9 shrink-0 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                          <FaUtensils className="text-sm" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Wazwan Cooking Planner</h4>
                          <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">Match recipes with precise culinary cuts.</p>
                        </div>
                      </button>

                      <button onClick={() => handleLinkClick("#sourcing")} className="flex gap-3 group text-left items-start">
                        <div className="h-9 w-9 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-[#1B5E3B] group-hover:bg-[#1B5E3B] group-hover:text-white transition-colors duration-300">
                          <FaShieldAlt className="text-sm" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Vet-Certified Sourcing</h4>
                          <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">Inspect direct farm partnerships & rearing standards.</p>
                        </div>
                      </button>

                      <button onClick={() => handleLinkClick("/support")} className="flex gap-3 group text-left items-start">
                        <div className="h-9 w-9 shrink-0 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 group-hover:bg-stone-600 group-hover:text-white transition-colors duration-300">
                          <FaPhoneAlt className="text-sm" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xs font-bold text-slate-800 group-hover:text-[#1B5E3B] transition-colors">Customer Care & FAQs</h4>
                          <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">24/7 hotline support & delivery scheduling queries.</p>
                        </div>
                      </button>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </nav>

        {/* CTA Buttons & Mobile Burger */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Button
              text="Android"
              className="compact outline"
              icon={<FaAndroid className="text-[#1B5E3B]" />}
              onClick={handleClick}
            />
            <Button
              text="Get App"
              className="compact"
              icon={<FaApple className="text-white" />}
              onClick={handleClick}
            />
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50/50 text-[#1B5E3B] md:hidden cursor-pointer hover:bg-emerald-100 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-[100%] mx-4 mt-2 z-50 md:hidden"
          >
            <div className="rounded-3xl border border-emerald-100 bg-white/95 p-6 shadow-2xl backdrop-blur-xl border-green-glow">
              <div className="flex flex-col gap-6 text-left">

                {/* Section: Cuts */}
                <div>
                  <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Meat Selection</p>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button onClick={() => handleLinkClick("#butchers-table")} className="text-left py-1 text-slate-800 hover:text-[#1B5E3B] text-xs font-bold font-serif">Prime Rib Chops</button>
                    <button onClick={() => handleLinkClick("#butchers-table")} className="text-left py-1 text-slate-800 hover:text-[#1B5E3B] text-xs font-bold font-serif">Rista Mutton Mince</button>
                    <button onClick={() => handleLinkClick("#butchers-table")} className="text-left py-1 text-slate-800 hover:text-[#1B5E3B] text-xs font-bold font-serif">Spiced Kanti Mix</button>
                    <button onClick={() => handleLinkClick("#butchers-table")} className="text-left py-1 text-slate-800 hover:text-[#1B5E3B] text-xs font-bold font-serif">Premium Poultry</button>
                  </div>
                </div>

                {/* Section: Interactive Tools */}
                <div className="border-t border-stone-100 pt-4">
                  <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Interactive Tools</p>
                  <div className="flex flex-col gap-3 mt-3">
                    <button onClick={() => handleLinkClick("#box-builder")} className="flex items-center gap-3 text-left">
                      <FaBox className="text-[#1B5E3B] text-xs shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Custom Crate Builder</span>
                    </button>
                    <button onClick={() => handleLinkClick("#cold-chain-simulator")} className="flex items-center gap-3 text-left">
                      <FaSnowflake className="text-sky-600 text-xs shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Cold-Chain Simulator</span>
                    </button>
                  </div>
                </div>

                {/* Section: Sourcing & Brand */}
                <div className="border-t border-stone-100 pt-4">
                  <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Brand Journey</p>
                  <div className="flex flex-col gap-3 mt-3">
                    <button onClick={() => handleLinkClick("#wazwan-planner")} className="flex items-center gap-3 text-left">
                      <FaUtensils className="text-amber-600 text-xs shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Wazwan Cooking Guide</span>
                    </button>
                    <button onClick={() => handleLinkClick("#sourcing")} className="flex items-center gap-3 text-left">
                      <FaShieldAlt className="text-[#1B5E3B] text-xs shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Vet-Certified Sourcing</span>
                    </button>
                    <button onClick={() => handleLinkClick("/support")} className="flex items-center gap-3 text-left">
                      <FaPhoneAlt className="text-stone-500 text-xs shrink-0" />
                      <span className="text-xs font-bold text-slate-800">Customer Care & FAQs</span>
                    </button>
                  </div>
                </div>

                {/* App Download Buttons */}
                <div className="flex items-center gap-3 border-t border-stone-100 pt-5">
                  <Button
                    text="Android App"
                    className="flex-1 outline"
                    icon={<FaAndroid className="text-[#1B5E3B]" />}
                    onClick={handleClick}
                  />
                  <Button
                    text="Get App"
                    className="flex-1"
                    icon={<FaApple className="text-white" />}
                    onClick={handleClick}
                  />
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
