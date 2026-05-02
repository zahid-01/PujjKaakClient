import { Link } from "react-router-dom";

const sections = [
  { id: "acceptance", label: "Acceptance" },
  { id: "eligibility", label: "Eligibility" },
  { id: "use", label: "Use of the Platform" },
  { id: "orders", label: "Orders, Pricing & Availability" },
  { id: "delivery", label: "Delivery & Risk" },
  { id: "content", label: "Content & Accounts" },
  { id: "prohibited", label: "Prohibited Conduct" },
  { id: "disclaimer", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "law", label: "Governing Law" },
  { id: "contact", label: "Contact" },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#d50b23] transition hover:text-[#b50a1d]"
            >
              <span aria-hidden="true">←</span>
              Back to Halal Nation
            </Link>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d50b23]">
                Terms and Conditions
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                Halal Nation Terms of Service
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-600">
                These terms govern your use of Halal Nation&apos;s website, mobile
                application, and related services. By using the platform, you
                agree to the conditions below.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-4 text-sm text-slate-600 shadow-lg shadow-rose-100">
            <p className="font-semibold text-slate-900">Last updated</p>
            <p>May 2, 2026</p>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[18rem_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                On this page
              </p>
              <nav className="mt-4 flex flex-col gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-rose-50 hover:text-[#d50b23]"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-8 shadow-sm md:px-10">
            <Section id="acceptance" title="Acceptance">
              <p>
                These terms apply to every visit to the platform and to every order
                placed through it. If you do not agree with any part of them, do not
                use the platform.
              </p>
              <p>
                We may update these terms from time to time to reflect product,
                service, legal, or operational changes. Continued use of the platform
                after an update means you accept the revised version.
              </p>
            </Section>

            <Section id="eligibility" title="Eligibility">
              <p>
                You must be at least 18 years old and legally capable of entering into
                a contract under applicable law. If you use the platform on behalf of a
                business or other entity, you confirm that you have authority to bind
                that entity.
              </p>
            </Section>

            <Section id="use" title="Use of the Platform">
              <p>
                We grant you a limited, revocable, non-exclusive, and non-transferable
                right to use the platform for personal, lawful purchases and browsing.
                You must not interfere with the platform, attempt to bypass security
                controls, or use the platform in a way that damages our systems or
                other users.
              </p>
              <p>
                All content on the platform, including text, images, logos, graphics,
                product details, and interface elements, belongs to Halal Nation or its
                licensors unless stated otherwise.
              </p>
            </Section>

            <Section id="orders" title="Orders, Pricing & Availability">
              <p>
                Products are offered subject to availability. We may limit quantities,
                cancel all or part of an order, or discontinue a product without prior
                notice when operationally necessary.
              </p>
              <p>
                We try to keep product descriptions, images, and prices accurate, but
                errors can occur. If a price or product detail is incorrect, we may
                correct it and contact you before fulfilment or cancel the affected
                item.
              </p>
              <p>
                Because meat and related items are perishable, actual delivered weight
                may vary slightly from the estimated weight shown at checkout. Where
                applicable, we charge only for the delivered quantity.
              </p>
            </Section>

            <Section id="delivery" title="Delivery & Risk">
              <p>
                Delivery timelines are estimates, not guarantees. Weather, traffic,
                supply conditions, and route changes can affect the final delivery
                window.
              </p>
              <p>
                Risk in the product passes to you upon delivery to the address you
                provide. Please inspect the package promptly and follow any storage or
                handling instructions printed on the packaging.
              </p>
            </Section>

            <Section id="content" title="Content & Accounts">
              <p>
                If you create an account, you are responsible for the accuracy of the
                details you provide and for keeping your login credentials secure.
              </p>
              <p>
                If you submit reviews, messages, photos, or other material, you grant us
                a worldwide, royalty-free license to use, host, display, reproduce, and
                adapt that content for operating and improving the platform.
              </p>
              <p>
                You remain responsible for all activity that happens under your account.
                Please notify us immediately if you suspect unauthorized access.
              </p>
            </Section>

            <Section id="prohibited" title="Prohibited Conduct">
              <p>Do not use the platform to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>break any law or encourage unlawful conduct;</li>
                <li>submit false, misleading, hateful, obscene, or defamatory content;</li>
                <li>infringe intellectual property or privacy rights;</li>
                <li>upload malicious code, interfere with security, or scrape data;</li>
                <li>impersonate another person or misrepresent your identity; or</li>
                <li>resell, redistribute, or commercially exploit platform content without permission.</li>
              </ul>
            </Section>

            <Section id="disclaimer" title="Disclaimers">
              <p>
                The platform and all products are provided on an &quot;as is&quot; and
                &quot;as available&quot; basis to the fullest extent permitted by law.
                We do not guarantee uninterrupted access, error-free operation, or that
                third-party links and services will remain available.
              </p>
              <p>
                Any information about products, dietary details, or related guidance is
                provided for general use only and should not replace your own judgment or
                independent verification.
              </p>
            </Section>

            <Section id="liability" title="Liability">
              <p>
                To the maximum extent permitted by law, Halal Nation will not be liable
                for indirect, incidental, special, or consequential losses, including
                lost profits or loss of data, arising from your use of the platform or
                products.
              </p>
              <p>
                Our total liability for any claim related to a purchase is limited to the
                amount you paid for the affected order, unless applicable law requires a
                different outcome.
              </p>
            </Section>

            <Section id="law" title="Governing Law">
              <p>
                These terms are governed by the laws of India. Any dispute arising out of
                or related to these terms will be handled by the competent courts having
                jurisdiction over the location of Halal Nation&apos;s principal place of
                business, unless applicable law says otherwise.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                For questions about these terms, refunds, or order-related issues, use
                the support details published in the app or on the website.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
