import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    question: "Is the meat 100% Halal certified?",
    answer: "Yes, all our meats are 100% certified Halal. We adhere strictly to traditional, hand-slaughtered methods (Zabiha) and maintain highest standards of hygiene and slaughter protocol.",
  },
  {
    question: "What are your delivery hours and slots?",
    answer: "We deliver fresh cuts daily between 7:00 AM and 8:00 PM. During checkout in the mobile app, you can select your preferred delivery window, including early morning slots so your fresh cuts arrive in time for lunch preparations.",
  },
  {
    question: "How is the meat kept fresh during delivery?",
    answer: "We use a cold-chain packaging system. Every order is vacuum-sealed and shipped in triple-layered insulated crates with organic wool insulation and food-grade gel ice packs. This keeps the internal box temperature between 1.8°C and 3.0°C right to your doorstep.",
  },
  {
    question: "Can I request custom butchery cuts?",
    answer: "Absolutely! The Halal Nation mobile app allows you to customize your cuts (e.g., Rogan Josh pieces, double-minced Rista meat, thin strips, or boneless). You can even add custom notes for your assigned master butcher.",
  },
  {
    question: "What is your refund and cancellation policy?",
    answer: "Given the perishable nature of fresh meat, orders can be canceled before they are dispatched. If there is any issue with the weight, hygiene, or cut of the meat upon delivery, contact our support team immediately for a replacement or refund.",
  },
];

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-900 relative py-10">
      {/* Background visual accents */}
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-emerald-100/30 blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-100/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-10 md:px-10 lg:px-16 text-left">
        
        {/* Back Link & Header */}
        <div className="mb-12 space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B5E3B] transition hover:text-emerald-700"
          >
            <span aria-hidden="true">←</span>
            Back to Halal Nation
          </Link>
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
              Customer Care
            </span>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Support & Help Center
            </h1>
            <p className="max-w-2xl text-slate-655 text-sm md:text-base leading-relaxed font-sans font-medium">
              Have questions about your order, cuts, or packaging? Reach out to our dedicated support team or browse our frequently asked questions.
            </p>
          </div>
        </div>

        {/* Contact details Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          
          <a
            href="tel:+919055414246"
            className="group rounded-2xl border border-emerald-100/60 bg-white/90 p-6 flex items-center gap-4 transition hover:border-[#1B5E3B]/30 hover:shadow-md border-green-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-[#1B5E3B] group-hover:text-white transition-colors">
              <FaPhoneAlt className="text-[#1B5E3B] group-hover:text-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Call Support</span>
              <p className="font-serif text-lg font-bold text-slate-800 mt-0.5 group-hover:text-[#1B5E3B] transition-colors">+91 9055414246</p>
            </div>
          </a>

          <a
            href="mailto:support@halalnation.in"
            className="group rounded-2xl border border-emerald-100/60 bg-white/90 p-6 flex items-center gap-4 transition hover:border-[#1B5E3B]/30 hover:shadow-md border-green-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-[#1B5E3B] group-hover:text-white transition-colors">
              <FaEnvelope className="text-[#1B5E3B] group-hover:text-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Email Us</span>
              <p className="font-serif text-lg font-bold text-slate-800 mt-0.5 group-hover:text-[#1B5E3B] transition-colors">support@halalnation.in</p>
            </div>
          </a>

        </div>

        {/* FAQ Section Accordion */}
        <section className="rounded-3xl border border-emerald-100/80 bg-white/95 p-8 shadow-md border-green-glow">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-5 mb-6 text-slate-900">
            <FaQuestionCircle className="text-[#1B5E3B] text-lg" />
            <h2 className="font-serif text-xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/80 bg-stone-50/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-serif font-bold text-sm md:text-base text-slate-800 hover:text-[#1B5E3B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-stone-400"
                    >
                      <FaChevronDown className="text-xs" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-slate-600 font-sans leading-relaxed border-t border-stone-150 bg-white/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
