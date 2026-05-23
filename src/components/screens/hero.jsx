import { motion } from "framer-motion";
import heroImg from "../../imgs/delivery.png";
import appStore from "../../imgs/app store.png";
import googleStore from "../../imgs/google play.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const Motion = motion;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/coming-soon");
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24">
      <div className="absolute left-[5%] top-8 h-40 w-40 rounded-full bg-[#1B5E3B]/10 blur-3xl" />
      <div className="absolute -right-16 top-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="absolute -bottom-28 right-[18%] h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,94,59,0.07),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:px-16">
        {/* Text Content */}
        <Motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-9"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1B5E3B] shadow-lg shadow-green-200/40 backdrop-blur">
            🚚 Fast & Fresh Meat Delivery
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-[64px] lg:leading-[1.05]">
            <span className="text-[#1B5E3B]">Fresh Meat,</span> delivered
            <span className="bg-gradient-to-r from-[#1B5E3B] via-green-600 to-emerald-500 bg-clip-text text-transparent">
              {" "}
              fast to your door.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Halal Nation brings premium, halal-certified cuts straight from trusted
            farms to your kitchen. Enjoy a carefully curated selection of meats,
            delivered chilled, hygienic, and ready to cook—without leaving home.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleClick}
              className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-5 py-3 font-semibold text-[#1B5E3B] shadow-lg shadow-green-200 transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1B5E3B] to-emerald-500 text-white shadow-md transition group-hover:scale-105">
                <img src={googleStore} className="w-6" />
              </span>
              Google Play
            </button>
            <button
              onClick={handleClick}
              className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-[#1B5E3B] px-5 py-3 font-semibold text-white shadow-lg shadow-green-300 transition duration-300 hover:-translate-y-1 hover:bg-[#155232]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-inner transition group-hover:scale-105">
                <img src={appStore} className="w-6" />
              </span>
              App Store
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-white/85 p-4 shadow-lg shadow-green-100 backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B5E3B]/10 text-lg text-[#1B5E3B]">
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
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B5E3B]/10 text-lg text-[#1B5E3B]">
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

          <div className="hidden gap-4 pt-6 md:flex">
            <div className="flex-1 rounded-3xl border border-white/60 bg-white/90 p-6 text-left shadow-lg shadow-green-100 backdrop-blur">
              <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1B5E3B]">
                3000+ happy customers
              </p>
            </div>
            <div className="flex-1 rounded-3xl border border-white/60 bg-white/90 p-6 text-left shadow-lg shadow-green-100 backdrop-blur">
              <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1B5E3B]">
                Over 2000 boxes shipped
              </p>
            </div>
          </div>
        </Motion.div>

        {/* Image */}
        <Motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-green-200/40 via-white/60 to-emerald-100/50 blur-2xl" />
            <div className="relative rounded-[3rem] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur">
              <img
                src={heroImg}
                alt="Delivery Guy"
                className="w-full object-contain drop-shadow-2xl"
              />
              <div className="absolute -left-7 top-6 flex items-center gap-2 rounded-full border border-white/40 bg-[#1B5E3B] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-green-500/30">
                <span className="inline-block h-2 w-2 rounded-full bg-white" />
                50+ Products
              </div>
              <div className="absolute -bottom-8 left-6 rounded-2xl border border-white/60 bg-white/95 px-4 py-2 text-xs font-semibold text-[#1B5E3B] shadow-md shadow-green-100">
                3+ Years of expertise
              </div>
              <div className="absolute -right-8 top-1/4 rounded-2xl border border-white/60 bg-white/95 px-5 py-3 text-xs font-semibold text-slate-700 shadow-lg shadow-green-100">
                Halal Certified ✔
              </div>
              <div className="absolute right-8 bottom-10 rounded-2xl bg-[#1B5E3B]/95 px-6 py-3 text-xs font-semibold text-white shadow-xl shadow-green-400/50">
                🌱 Freshness Guarantee
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
