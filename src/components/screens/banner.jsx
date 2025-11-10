import googlePlay from "../../imgs/google play.png";
import appStore from "../../imgs/app store.png";
import deliveryGuy from "../../imgs/delivery.png";
import { Link } from "react-router-dom";

const GreenCartBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#d50b23] via-rose-500 to-orange-400 py-24">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/15 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 md:flex-row md:px-10">
        {/* Left Text Section */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Download & Experience
          </span>
          <h2 className="text-3xl font-semibold leading-snug text-white md:text-4xl">
            Fresh Meat delivered at your doorstep —
            <span className="block font-bold">only from PUJJ KAAK</span>
          </h2>
          <p className="text-sm text-white/80 md:text-base">
            Download the app from App Store or Google Play and order premium
            halal cuts in a few taps.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link to="/coming-soon" className="transition hover:-translate-y-1">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-auto w-32 drop-shadow-lg"
              />
            </Link>
            <Link to="/coming-soon" className="transition hover:-translate-y-1">
              <img
                src={appStore}
                alt="App Store"
                className="h-auto w-32 drop-shadow-lg"
              />
            </Link>
          </div>
          <div className="grid gap-3 pt-6 text-left text-sm text-white/85 md:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              3000+ happy customers
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              Over 2000 boxes shipped
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] border border-white/20 bg-white/10 blur-xl" />
            <img
              src={deliveryGuy}
              alt="Delivery Guy with Box"
              className="relative w-full max-w-xs rounded-[2.5rem] border border-white/30 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenCartBanner;
