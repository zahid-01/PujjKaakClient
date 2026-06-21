import { motion } from "framer-motion";
import Button from "../ui/button/page";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const Motion = motion;
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 text-slate-900">
      {/* Background visual accents */}
      <div className="absolute right-[20%] top-1/4 h-80 w-80 rounded-full bg-emerald-100/20 blur-[100px]" />
      <div className="absolute left-[20%] bottom-1/4 h-80 w-80 rounded-full bg-amber-100/10 blur-[100px]" />

      <div className="relative border border-emerald-100 bg-white/95 p-10 rounded-3xl shadow-xl max-w-lg w-full text-center border-green-glow">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl font-extrabold text-slate-900 mb-4"
        >
          🚀 Coming Soon!
        </Motion.h1>

        <p className="text-slate-655 mb-6 font-medium leading-relaxed text-sm">
          Our team is crafting something amazing. The Halal Nation Android and iOS apps are launching soon in Srinagar. Be the first to receive notifications!
        </p>
        
        <div className="flex justify-center">
          <Button text="Back Home" onClick={handleRedirect} />
        </div>
        
        <p className="text-xs mt-6 text-slate-500 font-semibold uppercase tracking-wider">
          No spam, promise. Just premium updates!
        </p>
      </div>
    </div>
  );
}
