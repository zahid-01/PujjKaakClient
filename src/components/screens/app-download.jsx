import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function AppDownload() {
  const Motion = motion;
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/coming-soon");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2b6b] via-[#1a1a2e] to-[#0f2b6b] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <Motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Get the App
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg mb-10"
        >
          Download Pujj Kaak on your favourite platform and enjoy fresh meat
          delivered right to your doorstep.
        </Motion.p>

        <div className="flex flex-col gap-5">
          <Motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#3ddc84] to-[#2bb673] text-white font-semibold text-lg shadow-lg shadow-[#3ddc84]/20 border border-white/10 cursor-pointer transition-shadow hover:shadow-xl hover:shadow-[#3ddc84]/30"
          >
            <FaAndroid className="text-2xl" />
            Download for Android
          </Motion.button>

          <Motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#a8a8a8] to-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg shadow-lg shadow-white/10 border border-white/10 cursor-pointer transition-shadow hover:shadow-xl hover:shadow-white/20"
          >
            <FaApple className="text-2xl" />
            Download for iOS
          </Motion.button>
        </div>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-500 text-sm mt-8"
        >
          Both apps are launching soon — stay tuned!
        </Motion.p>
      </div>
    </div>
  );
}
