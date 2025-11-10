import { motion } from "framer-motion";
import heroImg from "../../imgs/delivery.png";
import appStore from "../../imgs/app store.png";
import googleStore from "../../imgs/google play.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/coming-soon");
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-orange-50 py-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d50b23]/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-200/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-10 lg:px-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d50b23] shadow-sm backdrop-blur">
            🚚 Fast & Fresh Meat Delivery
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            <span className="text-[#d50b23]">Fresh Meat,</span> delivered
            <span className="bg-gradient-to-r from-[#d50b23] via-rose-500 to-orange-400 bg-clip-text text-transparent">
              {" "}
              fast to your door.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            PUJJ KAAK brings premium, halal-certified cuts straight from trusted
            farms to your kitchen. Enjoy a carefully curated selection of meats,
            delivered chilled, hygienic, and ready to cook—without leaving home.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleClick}
              className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-5 py-3 font-semibold text-[#d50b23] shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d50b23] to-amber-500 text-white shadow-md transition group-hover:scale-105">
                <img src={googleStore} className="w-6" />
              </span>
              Google Play
            </button>
            <button
              onClick={handleClick}
              className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-[#d50b23] px-5 py-3 font-semibold text-white shadow-lg shadow-red-300 transition duration-300 hover:-translate-y-1 hover:bg-[#b90a1d]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-inner transition group-hover:scale-105">
                <img src={appStore} className="w-6" />
              </span>
              App Store
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d50b23]/10 text-lg text-[#d50b23]">
                ✓
              </span>
              <p className="text-sm text-slate-700">
                Fastest delivery service
                <span className="block text-xs text-slate-500">
                  Free doorstep delivery, always on time.
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d50b23]/10 text-lg text-[#d50b23]">
                ✓
              </span>
              <p className="text-sm text-slate-700">
                100% fresh & halal
                <span className="block text-xs text-slate-500">
                  Farm-to-table quality, expertly curated.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-rose-200/40 via-white/60 to-amber-100/50 blur-2xl" />
            <div className="relative rounded-[3rem] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur">
              <img
                src={heroImg}
                alt="Delivery Guy"
                className="w-full object-contain drop-shadow-2xl"
              />
              {/* Optional Badge Overlay */}
              <div className="absolute -left-6 top-6 rounded-full border border-white/50 bg-[#d50b23] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-500/30">
                50+ Products
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-semibold text-[#d50b23] shadow-md">
                3+ Years of expertise
              </div>
              <div className="absolute -right-6 top-1/4 rounded-2xl bg-white/90 px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg">
                Halal Certified ✔
              </div>
              <div className="absolute right-8 bottom-10 rounded-2xl bg-[#d50b23]/90 px-5 py-3 text-xs font-semibold text-white shadow-xl">
                🌱 Freshness Guarantee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
