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
    <section className="bg-gray-100 px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <span className="text-sm text-black font-semibold">
          🚚 Fast & Fresh Meat Delivery Service
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          <span className="text-[#d50b23]">Fresh Meat,</span> <br />
          Delivered Fast to <span className="text-[#d50b23]">Your Door.</span>
        </h1>

        <p className="text-gray-600 text-sm">
          A meat delivery shop, also known as PUJJ KAAK, is a retail service
          that specializes in delivering fresh, high-quality meat products
          directly to your doorstep. It offers a convenient way to purchase
          chicken, mutton, beef, and other meats, along with select household
          essentials—all from the comfort of your home.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleClick}
            className="bg-[#d50b23] flex items-center gap-4 hover:bg-red-500 text-white font-semibold py-2 px-5 rounded-lg shadow"
          >
            <img src={googleStore} className="w-12" /> Google Play
          </button>
          <button
            onClick={handleClick}
            className="bg-[#d50b23] flex items-center gap-4 hover:bg-red-500 text-white font-semibold py-2 px-5 rounded-lg shadow"
          >
            <img src={appStore} className="w-12" /> App Store
          </button>
        </div>

        {/* Features */}
        <div className="flex gap-8 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-[#d50b23] text-xl">✓</span>
            <p className="text-sm text-gray-700">
              Fastest service <br />
              <span className="text-xs text-gray-500">
                Free of cost delivery
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#d50b23] text-xl">✓</span>
            <p className="text-sm text-gray-700">
              100% Fresh & Halal <br />
              <span className="text-xs text-gray-500">Maintains Quality</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative">
          <img
            src={heroImg}
            alt="Delivery Guy"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
          {/* Optional Badge Overlay */}
          <div className="absolute md:top-3 top-15 left-0 bg-[#d50b23]/50 px-4 py-1 rounded-full text-sm font-medium shadow">
            50+ Products
          </div>
          <div className="absolute bottom-3 left-0 bg-[#d50b23]/70 px-4 py-1 rounded-full text-sm font-medium shadow">
            Years of exp: 3+
          </div>
          <div className="absolute bottom-80 left-45 md:left-90 bg-[#d50b23]/70 px-4 py-1 rounded-full text-sm font-medium shadow">
            Halal Certified ✔
          </div>
          <div className="absolute md:bottom-60 bottom-40 left-35 md:left-10 bg-[#d50b23]/70 px-4 py-1 rounded-full text-sm font-medium shadow">
            🌱 Freshness Guarantee
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
