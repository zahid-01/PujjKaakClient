import { IconMail, IconTrashX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900 py-10">
      {/* Glow Orbs */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-100/20 blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-amber-100/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-10 md:px-10 lg:px-16">
        <div className="mb-8 space-y-4 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1B5E3B] transition hover:text-emerald-700"
          >
            <span aria-hidden="true">←</span>
            Back to Halal Nation
          </Link>
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-emerald-250 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1B5E3B] shadow-sm">
              Account Compliance
            </span>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Delete your Halal Nation account
            </h1>
            <p className="max-w-2xl text-sm md:text-base leading-relaxed text-slate-655 font-medium">
              In accordance with Google Play and App Store requirements, we provide this path to delete your account and associated private data.
            </p>
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl border border-emerald-100 bg-white/95 shadow-md border-green-glow text-left">
          <div className="border-b border-stone-150 bg-stone-50/50 px-6 py-5 md:px-8">
            <div className="flex items-center gap-3 text-slate-900">
              <IconTrashX className="h-5 w-5 text-[#1B5E3B]" />
              <h2 className="font-serif text-lg font-bold">Steps to initiate deletion</h2>
            </div>
          </div>

          <div className="space-y-6 px-6 py-8 md:px-8">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-5">
              <p className="font-bold text-sm text-slate-800 uppercase tracking-wider">In-App Deletion (Recommended)</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                To delete your profile immediately, open the Halal Nation mobile app, navigate to **Profile Settings &rarr; Account Management &rarr; Delete Account**.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5">
              <p className="font-bold text-sm text-slate-800 uppercase tracking-wider">Data Removal Timeline</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Upon submitting your deletion request, your phone number, addresses, order history, and security credentials will be permanently purged from our secure servers within 30 business days.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5">
              <p className="font-bold text-sm text-slate-800 uppercase tracking-wider">Manual Email Request</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                If you do not have the mobile application installed, you can email our compliance team directly at support@halalnation.in. Please include the mobile number registered with your account.
              </p>
              <a
                href="mailto:support@halalnation.in?subject=Delete%20Halal%20Nation%20Account%20Request"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#1B5E3B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#154b2f] shadow-md shadow-emerald-950/20"
              >
                <IconMail className="h-4 w-4" />
                Email compliance team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
