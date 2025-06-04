// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "./components/ui/button/page";

import BeliefSection from "./components/screens/belief";
import FeaturesSection from "./components/screens/features";
import Footer from "./components/screens/footer";
import HeroSection from "./components/screens/hero";
import Navbar from "./components/screens/navbar";
import { AnimatedTestimonials } from "./components/screens/testimonials";

// export default function LandingPage() {
//   const [showComingSoon, setShowComingSoon] = useState(false);

//   const handleAppClick = () => {
//     setShowComingSoon(true);
//   };

//   return (
//     <div className="min-h-screen bg-red-100 text-gray-900">
//       {!showComingSoon ? (
//         <main>
//           {/* Hero Section */}
//           <section
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1666013942642-b7b54ecafd7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1dGNoZXJ8ZW58MHx8MHx8fDA%3D')",
//               objectFit: "cover",
//             }}
//             className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 text-white"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: -50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-6xl font-bold mb-6"
//             >
//               Fresh Meat Delivered to Your Doorstep
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-lg md:text-xl mb-8 max-w-2xl"
//             >
//               Order high-quality, hygienic meat with just a tap. Coming soon on
//               Android and iOS!
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="flex flex-col md:flex-row gap-4"
//             >
//               <Button onClick={handleAppClick}>Download for Android</Button>
//               <Button onClick={handleAppClick}>Download for iOS</Button>
//             </motion.div>
//           </section>

//           {/* Features Section */}
//           <section className="py-20 px-6 bg-gray-50">
//             <div className="max-w-6xl mx-auto text-center">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//                 Why Choose Us?
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {[
//                   {
//                     title: "Farm-Fresh Quality",
//                     desc: "We partner directly with trusted farms for the freshest meat.",
//                   },
//                   {
//                     title: "Hygienically Packed",
//                     desc: "Every order is vacuum-packed to retain freshness and hygiene.",
//                   },
//                   {
//                     title: "Fast Delivery",
//                     desc: "Timely delivery, always. Your meat arrives cold and ready.",
//                   },
//                 ].map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.2, duration: 0.6 }}
//                     className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
//                   >
//                     <h3 className="text-xl font-semibold mb-3">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600">{feature.desc}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Footer */}
//           <footer className="text-center py-8 bg-red-700 text-white">
//             <p className="text-sm">
//               &copy; {new Date().getFullYear()} Pujj Kaak. All rights reserved.
//             </p>
//           </footer>
//         </main>
//       ) : (
//         <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-100">
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-red-700 mb-4"
//           >
//             Coming Soon
//           </motion.h2>
//           <p className="text-gray-700 mb-8 max-w-md">
//             Our app is on the way! Stay tuned for the freshest meat delivery
//             experience.
//           </p>
//           <Button
//             onClick={() => setShowComingSoon(false)}
//             className="bg-red-700 text-white px-5 py-2 rounded-xl"
//           >
//             Go Back
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./components/screens/coming";
import Landing from "./components/screens/landing";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  </BrowserRouter>
);

export default App;
