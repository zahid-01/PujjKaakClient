import { motion } from "framer-motion";

const ads = [
  {
    title: "We’ve Just Launched in Kashmir!",
  },
  { coupon: "Use Code: MEAT200 at checkout and get upto 20% discount." },
];

export default function ScrollingAd() {
  return (
    <div className="bg-white py-2 overflow-hidden mb-4">
      <motion.div
        className="flex gap-5 whitespace-nowrap"
        animate={{
          x: ["0%", "-30%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...ads, ...ads].map((ad, index) => (
          <div
            key={index}
            className="flex flex-col w-auto text-center text-sm sm:text-base text-gray-800"
          >
            <p className="text-md">{ad.title}</p>
            <p className="text-md font-semibold text-[#d50b23]">{ad.coupon}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
