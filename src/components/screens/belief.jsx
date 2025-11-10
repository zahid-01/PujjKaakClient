export default function BeliefSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24 px-6 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470093014438-2ede8d7a4818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hlZXBzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />
      <div className="relative mx-auto max-w-6xl space-y-10 text-left text-white">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          <span className="font-bold">We believe</span> in creating a meaningful
          connection between you and the food you eat.
        </h2>
        <p className="max-w-2xl text-sm font-semibold md:text-base md:leading-relaxed">
          Taste, transparency and convenience shouldn’t be mutually exclusive.
          This has been our founding belief since we started in 2024, and it
          continues to be the force that drives us.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-3xl bg-white/90 px-8 py-6 text-black shadow-2xl shadow-black/20 backdrop-blur">
            <p className="text-4xl font-bold text-[#d50b23]">3000+</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-700">
              Happy Customers
            </p>
          </div>
          <div className="rounded-3xl bg-white/90 px-8 py-6 text-black shadow-2xl shadow-black/20 backdrop-blur">
            <p className="text-4xl font-bold text-[#d50b23]">2000+</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-700">
              Boxes Shipped
            </p>
          </div>
          <div className="rounded-3xl bg-[#d50b23] px-8 py-6 text-white shadow-2xl shadow-black/30">
            <p className="text-4xl font-bold">30 tons</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">
              Styrofoam Saved with compostable insulation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
