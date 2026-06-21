import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaChevronRight, FaSnowflake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import luxuryMeatImg from "../../imgs/luxury_meat_cuts.png";

// Circular Customer/Chef Avatars
const AVATARS = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
];

// bottom cards array
const SHOWCASE_CARDS = [
  {
    image: luxuryMeatImg,
    category: "Lamb Cuts",
    title: "Prime Lamb Rib Chops",
    desc: "Double-layered fat cap chops.",
    spec: "Chilled to 1.8°C"
  },
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=80",
    category: "Wazwan Specials",
    title: "Double-Minced Mince",
    desc: "Leg cuts pounded with mallets.",
    spec: "100% Traceable"
  },
  {
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=80",
    category: "Grills & Marinades",
    title: "Kashmiri Chicken Tujji",
    desc: "Skewers in mountain garlic paste.",
    spec: "Hygienically Sealed"
  },
  {
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop&q=80",
    category: "Poultry cuts",
    title: "Premium Poultry Cut",
    desc: "Skinless, fresh farm breast fillet.",
    spec: "Fresh & Vacuum-Packed"
  }
];

// Spotlight Left Component
const SpotlightLeft = ({ className, fill = "white" }) => {
  return (
    <motion.svg
      initial={{ opacity: 0, x: -120, y: -120, scale: 0.85 }}
      animate={{ opacity: 0.35, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`pointer-events-none absolute z-[1] h-[160%] w-[120%] lg:w-[80%] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter-left)">
        <ellipse
          cx="1924.57"
          cy="273.501"
          rx="1924.57"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 0.568943 -0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter-left"
          x="0.860352"
          y="-893.873"
          width="3786.15"
          height="3735.06"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </motion.svg>
  );
};

// Spotlight Right Component
const SpotlightRight = ({ className, fill = "white" }) => {
  return (
    <motion.svg
      initial={{ opacity: 0, x: 120, y: -120, scale: 0.85 }}
      animate={{ opacity: 0.28, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      className={`pointer-events-none absolute z-[1] h-[160%] w-[120%] lg:w-[80%] scale-x-[-1] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter-right)">
        <ellipse
          cx="1924.57"
          cy="273.501"
          rx="1924.57"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 0.568943 -0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter-right"
          x="0.860352"
          y="-893.873"
          width="3786.15"
          height="3735.06"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </motion.svg>
  );
};

// Text Highlight Effect Component
const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: 0.4,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={`relative inline-block px-4 py-1 rounded-2xl bg-gradient-to-r from-emerald-100 to-green-100 text-[#1B5E3B] ${className}`}
    >
      {children}
    </motion.span>
  );
};

// Aurora Background Blob Component
const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -70, 40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-200/20 blur-[110px] md:blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[10%] h-[500px] w-[500px] rounded-full bg-amber-100/18 blur-[110px] md:blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[30%] h-[400px] w-[400px] rounded-full bg-[#1B5E3B]/4 blur-[100px]"
      />
    </div>
  );
};

export default function HeroSection() {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/coming-soon");
  };

  const handlePreOrder = () => {
    const el = document.querySelector("#box-builder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-20 pb-32 flex flex-col items-center justify-center bg-transparent"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(27,94,59,0.05) 1px, transparent 0)`,
        backgroundSize: "28px 28px"
      }}
    >
      {/* Background visual components */}
      <AuroraBackground />
      <SpotlightLeft className="-top-40 left-0" fill="#1B5E3B" />
      <SpotlightRight className="-top-40 right-0 left-auto" fill="#D4AF37" />

      {/* Radial fade to blur out dot grid toward edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95 pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(255,255,255,0.92)_85%)] pointer-events-none z-[2]" />

      {/* Centered Contents */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-10 flex flex-col items-center pt-8">

        {/* Chef & Customer Overlap Avatar stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center -space-x-4"
        >
          {AVATARS.map((src, index) => (
            <div
              key={index}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white bg-stone-150 overflow-hidden shadow-md flex-shrink-0"
              style={{ zIndex: 10 - index }}
            >
              <img src={src} alt="Kashmiri Chef" className="h-full w-full object-cover" />
            </div>
          ))}
          <div className="h-10 md:h-12 px-3 md:px-4 rounded-full border-2 border-white bg-[#1B5E3B] text-white flex items-center justify-center shadow-md font-sans text-[10px] md:text-xs font-black uppercase tracking-wider z-20">
            3,000+ happy families
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl font-extrabold leading-[1.15] text-slate-900 md:text-5xl lg:text-7xl max-w-4xl"
        >
          Your premium destination for{" "}
          <Highlight className="font-serif font-black bg-gradient-to-r from-emerald-100/75 to-green-150/75 mt-2 md:mt-0">
            HALAL & FRESH MEAT 🥩
          </Highlight>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-slate-655 font-sans font-medium text-base md:text-lg leading-relaxed"
        >
          Premium Kashmiri cuts custom-crafted to your recipes and delivered fresh to your kitchen within hours. Fast, hygienic, and tailored exactly to your choice.
        </motion.p>

        {/* Centered CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <button
            onClick={handlePreOrder}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-[#1B5E3B] text-white px-7 py-4 font-bold text-xs uppercase tracking-wider hover:bg-[#14472d] transition shadow-lg shadow-[#1B5E3B]/25 cursor-pointer"
          >
            <span>Pre-order Crate</span>
            <FaChevronRight className="text-[10px]" />
          </button>

          <button
            onClick={handleCTA}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-2xl border border-stone-250 bg-white/80 hover:bg-stone-50 text-slate-800 px-7 py-4 font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
          >
            <FaApple className="text-sm text-slate-900" />
            <FaAndroid className="text-sm text-emerald-600" />
            <span>Get Mobile App</span>
          </button>
        </motion.div>

        {/* Trust Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-6 w-full text-center"
        >
          <p className="text-[10px] uppercase font-extrabold tracking-[0.25em] text-[#1B5E3B]">
            Trusted by thousands of home chefs & families across Kashmir
          </p>
        </motion.div>

        {/* 3D Perspective Cards Grid (Adaptation of the Images Grid at bottom of layout) */}
        <div className="w-full pt-12" style={{ perspective: "1000px" }}>
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 12 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full"
            style={{
              transformStyle: "preserve-3d",
              transform: "skewY(-1.5deg)"
            }}
          >
            {SHOWCASE_CARDS.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  y: -15,
                  scale: 1.03,
                  z: 30
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="rounded-3xl border border-emerald-100/70 bg-white/95 p-3.5 shadow-xl shadow-green-950/5 flex flex-col justify-between text-left hover:border-[#1B5E3B]/30 hover:shadow-2xl transition-all duration-300 border-green-glow"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Visual Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />

                  {/* Crate Temp indicator on image */}
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 border border-stone-200 px-2 py-0.5 text-[8px] font-bold text-slate-600 shadow-sm">
                    <FaSnowflake className="text-[#1B5E3B] text-[7px]" />
                    <span>{card.spec.split(" ")[0] === "Chilled" ? "1.8°C" : "Safe"}</span>
                  </span>
                </div>

                {/* Text Content */}
                <div className="mt-4 space-y-1">
                  <span className="text-[9px] uppercase font-bold text-[#1B5E3B] tracking-wider block">
                    {card.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-slate-800 tracking-tight">
                    {card.title}
                  </h4>
                  <p className="text-[10px] leading-relaxed text-slate-500 font-sans">
                    {card.desc}
                  </p>
                </div>

                {/* Spec Tag */}
                <div className="mt-4 border-t border-stone-100 pt-3 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-slate-450 uppercase tracking-wider">
                    {card.spec}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
