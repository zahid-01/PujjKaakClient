import { FaGlobeAmericas, FaTractor, FaStar } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-amber-50 py-20">
      <div className="absolute left-1/2 top-8 h-32 w-32 -translate-x-1/2 rounded-full bg-[#d50b23]/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center md:px-10">
        <div className="space-y-4">
          <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d50b23] shadow-sm">
            Why Families Choose Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Elevated meat delivery, crafted for discerning kitchens.
          </h2>
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            From sourcing to delivery, every step is engineered to preserve
            freshness, traceability, and flavour—so you can cook with confidence.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 text-left shadow-xl shadow-rose-100 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#d50b23]/30 hover:shadow-rose-200/80">
            <div className="absolute -right-16 top-0 h-32 w-32 rounded-full bg-[#d50b23]/5 transition group-hover:scale-125 group-hover:bg-[#d50b23]/10" />
            <FaGlobeAmericas className="text-4xl text-[#d50b23]" />
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Sustainably Sourced
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              All of our meats are sourced from small, independent farms and
              fisheries that prioritise animal welfare and environmental
              sustainability. Enjoy high-quality cuts with a clear conscience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 text-left shadow-xl shadow-rose-100 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#d50b23]/30 hover:shadow-rose-200/80">
            <div className="absolute -right-16 top-0 h-32 w-32 rounded-full bg-amber-200/30 transition group-hover:scale-125 group-hover:bg-amber-200/50" />
            <FaTractor className="text-4xl text-[#d50b23]" />
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Transparency & Traceability
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              We provide full transparency about where your food comes from.
              Every product includes details about the farm, farmer, and
              sustainable practices, so you know exactly what you’re serving.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 text-left shadow-xl shadow-rose-100 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#d50b23]/30 hover:shadow-rose-200/80">
            <div className="absolute -right-16 top-0 h-32 w-32 rounded-full bg-rose-200/30 transition group-hover:scale-125 group-hover:bg-rose-200/50" />
            <FaStar className="text-4xl text-[#d50b23]" />
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Exclusive, Premium Quality
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              From locally-raised mutton to free-range poultry, our selection
              offers premium, restaurant-quality meats sourced from the heart of
              Kashmir. Discover rich, authentic flavours and top-tier cuts that
              turn every meal into a celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
