import { FaGlobeAmericas, FaTractor, FaStar } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 md:px-16 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="bg-red-50 p-4">
          <FaGlobeAmericas className="text-[#d50b23] text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Sustainably Sourced</h3>
          <p className="text-sm font-semibold text-[#0f2b6b]">
            All of our meats are sourced from small, independent farms and
            fisheries that prioritize animal welfare and environmental
            sustainability. Enjoy high-quality cuts with a clear conscience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-red-50 p-4">
          <FaTractor className="text-[#d50b23] text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Transparency & Traceability
          </h3>
          <p className="text-sm font-semibold text-[#0f2b6b]">
            We provide full transparency about where your food comes from. Every
            product includes details about the farm, farmer, and sustainable
            practices, so you know exactly what you’re serving.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-red-50 p-4">
          <FaStar className="text-[#d50b23] text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Exclusive, Premium Quality
          </h3>
          <p className="text-sm font-semibold text-[#0f2b6b]">
            From locally-raised mutton to free-range poultry, our selection
            offers premium, restaurant-quality meats sourced from the heart of
            Kashmir. Discover rich, authentic flavors and top-tier cuts that
            turn every meal into a celebration.
          </p>
        </div>
      </div>
    </div>
  );
}
