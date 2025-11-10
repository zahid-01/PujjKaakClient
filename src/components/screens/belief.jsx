export default function BeliefSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-28 px-6 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470093014438-2ede8d7a4818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hlZXBzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px] md:leading-[1.15]">
            <span className="font-bold">We believe</span> in creating a meaningful
            connection between you and the food you eat.
          </h2>
          <p className="max-w-xl text-sm font-semibold text-white/80 md:text-base md:leading-relaxed">
            Taste, transparency and convenience shouldn’t be mutually exclusive.
            This has been our founding belief since we started in 2024, and it
            continues to be the force that drives us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur-lg">
            <div className="absolute -right-20 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <p className="text-4xl font-bold text-white">3000+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              happy customers
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur-lg">
            <div className="absolute -left-16 top-10 h-24 w-24 rounded-full bg-[#d50b23]/40 blur-3xl" />
            <p className="text-4xl font-bold text-white">2000+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              boxes shipped
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-[#d50b23]/95 p-8 shadow-2xl shadow-black/30 md:col-span-2">
            <div className="absolute -right-24 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <p className="text-4xl font-bold text-white">30 tons</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              styrofoam saved with compostable insulation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
