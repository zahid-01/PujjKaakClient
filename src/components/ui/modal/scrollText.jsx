import { motion } from "framer-motion";

const logos = [
  {
    title: "FORTUNE",
    text: "Connects Consumers to Producers",
  },
  {
    title: "TODAY",
    text: '"Perfect Mail Order Food Gift"',
  },
  {
    title: (
      <>
        the Fresh and Tasty <em className="italic">Eats</em>
      </>
    ),
    text: '"Best Places to Buy Meat Online"',
  },
  {
    title: "FRESH FOOD",
    text: '"Transparency in addition to delicious meat"',
  },
  {
    title: <span className="italic text-xl">I</span>,
    text: '"Artisanal"',
  },
];

export default function ScrollingLogos() {
  return (
    <div className="relative z-10 bg-white py-6 overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 text-center text-sm sm:text-base text-gray-800"
          >
            <p className="font-bold">{logo.title}</p>
            <p className="text-xs">{logo.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
