import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "collection", label: "Information We Collect" },
  { id: "usage", label: "How We Use Information" },
  { id: "sharing", label: "Data Sharing & Disclosure" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights & Choices" },
  { id: "updates", label: "Changes to this Policy" },
  { id: "contact", label: "Contact Us" },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-stone-150 py-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-4 space-y-4 text-xs md:text-sm leading-relaxed text-slate-600 font-sans">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900 py-10">
      {/* Background Orbs */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-amber-100/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-10 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 border-b border-stone-200 pb-8 lg:flex-row lg:items-end lg:justify-between text-left">
          <div className="max-w-3xl space-y-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1B5E3B] transition hover:text-emerald-700"
            >
              <span aria-hidden="true">←</span>
              Back to Halal Nation
            </Link>
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
                Privacy
              </span>
              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Halal Nation Privacy Policy
              </h1>
              <p className="max-w-3xl text-sm md:text-base leading-relaxed text-slate-600">
                At Halal Nation, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website or mobile application.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white/90 px-5 py-4 text-xs text-slate-600 shadow-md border-green-glow">
            <p className="font-bold text-slate-800">Last updated</p>
            <p className="mt-1">June 22, 2026</p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[18rem_1fr] text-left">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                On this page
              </p>
              <nav className="mt-4 flex flex-col gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-[#1B5E3B]"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-3xl border border-emerald-100 bg-white/95 px-6 py-8 shadow-md md:px-10 border-green-glow">
            <Section id="introduction" title="Introduction">
              <p>
                Halal Nation Pvt Ltd. ("we", "us", or "our") values your trust. This Privacy Policy describes how we handle personal data in connection with our website, mobile application, and related delivery services.
              </p>
              <p>
                By using our services, you consent to the collection, use, and disclosure practices described in this Privacy Policy.
              </p>
            </Section>

            <Section id="collection" title="Information We Collect">
              <p>We collect information to provide a better, faster delivery experience for you:</p>
              <ul className="list-disc space-y-2 pl-5 font-sans">
                <li>
                  <strong>Account & Profile Information:</strong> When you register on our platform, we collect your phone number, name, and any profile details you supply.
                </li>
                <li>
                  <strong>Delivery Details:</strong> We collect and store delivery addresses and instructions to ensure accurate delivery of your orders.
                </li>
                <li>
                  <strong>Transaction & Order History:</strong> We keep a record of the items you order, delivery times, and transaction values.
                </li>
                <li>
                  <strong>Device & Usage Data:</strong> We automatically collect information about your device type, operating system, IP address, and how you interact with our platform to troubleshoot and optimize our services.
                </li>
              </ul>
            </Section>

            <Section id="usage" title="How We Use Information">
              <p>We process your personal information for the following purposes:</p>
              <ul className="list-disc space-y-2 pl-5 font-sans">
                <li>To process and deliver your orders of fresh meat and groceries;</li>
                <li>To send order updates, delivery status alerts, and support notifications;</li>
                <li>To verify accounts, maintain security, and prevent fraudulent activity;</li>
                <li>To optimize our mobile application performance and enhance the user experience; and</li>
                <li>To comply with regulatory obligations and legal process.</li>
              </ul>
            </Section>

            <Section id="sharing" title="Data Sharing & Disclosure">
              <p>
                We do not sell, rent, or trade your personal data to third parties. We share information only in these limited scenarios:
              </p>
              <ul className="list-disc space-y-2 pl-5 font-sans">
                <li>
                  <strong>Delivery Personnel & Partners:</strong> We share your name, phone number, and delivery address with our delivery riders to fulfill your orders.
                </li>
                <li>
                  <strong>Service Providers:</strong> We use trusted third-party providers for hosting services, database management, and error reporting.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required to do so by law, or in response to subpoenas, court orders, or requests from regulatory authorities.
                </li>
              </ul>
            </Section>

            <Section id="security" title="Data Security">
              <p>
                We employ industry-standard technical and organizational security measures to protect your personal data from unauthorized access, loss, misuse, or alteration. All communication with our servers is encrypted using Secure Socket Layer (SSL) technology.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </Section>

            <Section id="retention" title="Data Retention">
              <p>
                We retain your personal data for as long as your account is active, or as needed to provide you with our services. If you wish to delete your account, we will purge your data in accordance with our data removal timeline (normally within 30 business days).
              </p>
            </Section>

            <Section id="rights" title="Your Rights & Choices">
              <p>
                You have the right to access, correct, or request deletion of your personal data.
              </p>
              <p>
                You can request the deletion of your account and all associated personal data directly within the application settings, or by visiting our <Link to="/delete-account" className="text-[#1B5E3B] font-bold hover:underline">Delete Account</Link> page for instructions on initiating account removal.
              </p>
            </Section>

            <Section id="updates" title="Changes to this Policy">
              <p>
                We may revise this Privacy Policy from time to time. If we make material changes, we will update the "Last Updated" date at the top of the policy and notify users through the app or website.
              </p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p>
                If you have any questions or feedback regarding this Privacy Policy, please contact our compliance officer at <a href="mailto:support@halalnation.in" className="text-[#1B5E3B] font-bold hover:underline">support@halalnation.in</a>.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
