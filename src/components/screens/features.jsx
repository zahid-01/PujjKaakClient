import { FaGlobeAmericas, FaTractor, FaStar } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-amber-50 py-24">
      <div className="absolute left-0 top-10 h-24 w-24 rounded-full bg-[#d50b23]/15 blur-3xl" />
      <div className="absolute right-12 top-1/3 h-24 w-24 rounded-full bg-[#d50b23]/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 md:px-10">
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d50b23] shadow-sm">
            Why Families Choose Us
          </span>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Elevated meat delivery, crafted for discerning kitchens.
          </h2>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            From sourcing to delivery, every step is engineered to preserve
            freshness, traceability, and flavour—so you can cook with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#d50b23]/15 bg-white/90 p-9 shadow-[0_25px_60px_rgba(213,11,35,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(213,11,35,0.12)]">
            <div className="absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-[#d50b23] via-rose-500 to-orange-400" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d50b23]/10 text-[#d50b23]">
              <FaGlobeAmericas className="text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Sustainably Sourced
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              All of our meats are sourced from small, independent farms and
              fisheries that prioritise animal welfare and environmental
              sustainability. Enjoy high-quality cuts with a clear conscience.
            </p>
            <div className="pointer-events-none absolute -right-8 bottom-6 h-16 w-16 rounded-full border border-[#d50b23]/15 bg-[#d50b23]/5 blur-lg transition group-hover:scale-125" />
          </div>

          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#d50b23]/15 bg-white/90 p-9 shadow-[0_25px_60px_rgba(213,11,35,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(213,11,35,0.12)]">
            <div className="absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-[#d50b23] via-rose-500 to-orange-400" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d50b23]/10 text-[#d50b23]">
              <FaTractor className="text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Transparency & Traceability
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              We provide full transparency about where your food comes from.
              Every product includes details about the farm, farmer, and
              sustainable practices, so you know exactly what you’re serving.
            </p>
            <div className="pointer-events-none absolute -left-8 top-6 h-16 w-16 rounded-full border border-[#d50b23]/15 bg-[#d50b23]/5 blur-lg transition group-hover:scale-125" />
          </div>

          {/* Feature 3 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#d50b23]/15 bg-white/90 p-9 shadow-[0_25px_60px_rgba(213,11,35,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(213,11,35,0.12)]">
            <div className="absolute inset-x-10 top-0 h-1 rounded-full bg-gradient-to-r from-[#d50b23] via-rose-500 to-orange-400" />
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d50b23]/10 text-[#d50b23]">
              <FaStar className="text-2xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Exclusive, Premium Quality
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              From locally-raised mutton to free-range poultry, our selection
              offers premium, restaurant-quality meats sourced from the heart of
              Kashmir. Discover rich, authentic flavours and top-tier cuts that
              turn every meal into a celebration.
            </p>
            <div className="pointer-events-none absolute bottom-8 right-10 h-16 w-16 rounded-full border border-[#d50b23]/15 bg-[#d50b23]/5 blur-lg transition group-hover:scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
}
