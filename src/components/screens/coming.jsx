import { motion } from "framer-motion";
import Button from "../ui/button/page";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-[#d50b23] to-[#0f2b6b] flex items-center justify-center px-4">
      <div className="bg-[#0f2b6b] backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-white mb-4"
        >
          🚀 Coming Soon!
        </motion.h1>

        <p className="text-white mb-6">
          We’re cooking something amazing. Our Android and iOS apps are
          launching soon. Be the first to know!
        </p>
        <Button text="Back Home" onClick={handleRedirect} />
        <p className="text-sm mt-4 text-white">
          No spam, promise. Just juicy updates!
        </p>
      </div>
    </div>
  );
}
