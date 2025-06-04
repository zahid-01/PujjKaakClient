import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollingLogos from "../ui/modal/scrollText";
import ScrollingAd from "../ui/modal/scrollAds";
import Button from "../ui/button/page";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/coming-soon");
  };

  return (
    <div className="md:min-h-screen bg-[#d50b23] text-white overflow-hidden">
      <ScrollingAd />
      <img
        src="/banner.svg"
        alt="fresh Meat"
        className="w-[90vw] h-auto mx-auto object-cover"
      />

      <div className="container mx-auto px-4 py-5 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Fresh Meat Delivered at your Doorstep!
        </motion.h1>

        <div className="flex gap-6 mt-6">
          <Button
            text="Download for Android"
            className="text-[10px]"
            onClick={handleRedirect}
            icon={<FaAndroid />}
          />
          <Button
            icon={<FaApple />}
            className="text-[10px]"
            text="Download for iOS"
            onClick={handleRedirect}
          />
        </div>
      </div>

      <div className="bg-white py-6 px-4 flex flex-wrap justify-around items-center gap-6 text-center text-sm sm:text-base text-gray-800">
        <ScrollingLogos />
      </div>
    </div>
  );
}
