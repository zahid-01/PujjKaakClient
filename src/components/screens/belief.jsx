export default function BeliefSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1470093014438-2ede8d7a4818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hlZXBzfGVufDB8fDB8fHww')",
      }}
    >
      <div className="max-w-6xl mx-auto text-left text-white">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          <span className="font-bold">We believe</span> in creating a meaningful
          connection between you and the food you eat.
        </h2>
        <p className="text-sm font-semibold max-w-2xl mb-8">
          Taste, transparency and convenience shouldn’t be mutually exclusive.
          This has been our founding belief since we started in 2024, and it
          continues to be the force that drives us.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="bg-white text-black px-6 py-4 rounded-xl font-semibold shadow-md">
            3000+ happy customers
          </div>
          <div className="bg-white text-black px-6 py-4 rounded-xl font-semibold shadow-md">
            Over 2000 boxes shipped
          </div>
          <div className="bg-[#d50b23] text-white px-6 py-4 rounded-xl font-semibold shadow-md">
            30 tons of styrofoam saved <br /> with our fully compostable
            insulation
          </div>
        </div>
      </div>
    </section>
  );
}
