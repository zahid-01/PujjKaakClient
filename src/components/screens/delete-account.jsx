import { IconMail, IconTrashX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50">
      <div className="mx-auto w-full max-w-4xl px-6 py-10 md:px-10 lg:px-16">
        <div className="mb-8 space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1B5E3B] transition hover:text-[#155232]"
          >
            <span aria-hidden="true">←</span>
            Back to Halal Nation
          </Link>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1B5E3B]">
              Account Deletion
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Delete your Halal Nation account
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              This page is provided for account deletion requests and is linked
              from the app and website for Google Play compliance.
            </p>
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 md:px-8">
            <div className="flex items-center gap-3 text-slate-900">
              <IconTrashX className="h-5 w-5 text-[#1B5E3B]" />
              <h2 className="text-lg font-semibold">How to delete your account</h2>
            </div>
          </div>

          <div className="space-y-6 px-6 py-8 md:px-8">
            <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">In-app deletion</p>
              <p className="mt-2 text-base">
                To delete your account, open the Halal Nation app &rarr; Profile
                &rarr; Delete Account.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Deletion timeline</p>
              <p className="mt-2 text-base">
                Your data will be permanently deleted within 30 days.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Email request</p>
              <p className="mt-2 text-base">
                Alternatively email us at support@halalnation.com
              </p>
              <a
                href="mailto:support@halalnation.com?subject=Delete%20Account%20Request"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1B5E3B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#155232]"
              >
                <IconMail className="h-4 w-4" />
                Email support
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
