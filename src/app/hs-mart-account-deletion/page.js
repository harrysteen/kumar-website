import Link from "next/link";
import DeletionRequestForm from "./DeletionRequestForm";

const PAGE_URL = "https://harry.services/hs-mart-account-deletion";

// TODO before publishing: replace every value wrapped in [ ] below.
// The request form stays disabled until supportEmail is a real email address.
const DELETION = {
  appName: "HS Mart",
  developerName: "[DEVELOPER / BUSINESS LEGAL NAME]",
  supportEmail: "kumarraj6304467271@gmail.com",
  processingDays: "[NUMBER]",
  lastUpdated: "October 21, 2026",
};

export const metadata = {
  title: "HS Mart Account Deletion Request",
  description:
    "Request deletion of your HS Mart shopping app account and associated personal data. Learn what is deleted, what may be retained, and how long it takes.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "HS Mart Account Deletion Request",
    description: "How to request deletion of your HS Mart account and associated personal data.",
    url: PAGE_URL,
    type: "article",
  },
};

function Section({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="border-t border-white/10 pt-10">
      <h2 id={id} className="text-xl sm:text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

function List({ children }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-purple-400">{children}</ul>;
}

export default function HSMartAccountDeletionPage() {
  const { appName, supportEmail, processingDays } = DELETION;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white/80 hover:text-purple-300">
            harry.services
          </Link>
          <span className="text-xs uppercase tracking-widest text-white/50">Legal</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <article>
          <header className="mb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-purple-300">{appName}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{appName} Account Deletion Request</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              You can ask us to delete your {appName} account and the personal data associated with it at any time.
              You do not need to sign in or have the app installed to make a request.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Last updated: <time dateTime="2026-10-21">{DELETION.lastUpdated}</time>
            </p>
          </header>

          <div className="space-y-10">
            <Section id="how-to-request" title="How to request deletion">
              <ol className="list-decimal space-y-2 pl-5 marker:text-purple-400">
                <li>Fill in the form below with the email address you used to register for {appName}.</li>
                <li>
                  Press <strong className="text-white">Open email to send request</strong>. Your email app opens with
                  the request filled in. Press <strong className="text-white">Send</strong>.
                </li>
                <li>
                  If you prefer, email <strong className="text-white">{supportEmail}</strong> directly with the
                  subject &quot;HS Mart Account Deletion Request&quot; and your registered email address or phone
                  number.
                </li>
                <li>We will reply to confirm we received your request, and again when it has been completed.</li>
              </ol>
            </Section>

            <section
              aria-labelledby="request-form"
              className="rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:p-8"
            >
              <h2 id="request-form" className="text-xl sm:text-2xl font-semibold text-white">
                Deletion request form
              </h2>
              <div className="mt-5">
                <DeletionRequestForm supportEmail={supportEmail} />
              </div>
            </section>

            <Section id="verification" title="Verifying account ownership">
              <p>
                To protect your account, we may need to confirm that you own it before deleting anything. We may ask
                you to reply from the email address registered with {appName}, or to confirm details of your account
                or a recent order. We use this information only to verify and process your request.
              </p>
            </Section>

            <Section id="what-is-deleted" title="What data is deleted">
              <List>
                <li>Your {appName} account and sign-in details (name, email address, phone number, and user ID).</li>
                <li>Personal details linked to your account, such as saved names, phone numbers, and delivery addresses.</li>
                <li>Personal details attached to your past orders, except where we must keep them (see below).</li>
              </List>
            </Section>

            <Section id="what-is-retained" title="What data may be retained">
              <p>
                We may need to keep some order and transaction records, such as invoices, amounts, and dates, to meet
                tax, accounting, fraud-prevention, or other legal obligations. These records are kept only for as long
                as the law requires and are then deleted.
              </p>
              <p>
                Data stored on your phone, such as order history and your saved location, is not on our servers. To
                remove it, uninstall the app or go to{" "}
                <em>Settings → Apps → {appName} → Storage → Clear data</em>.
              </p>
            </Section>

            <Section id="processing-time" title="Processing time">
              <p>
                We aim to complete verified deletion requests within{" "}
                <strong className="text-white">{processingDays} days</strong> of receiving them. Once your account is
                deleted it cannot be recovered, and you will need to create a new account to use {appName} again.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                For questions about account deletion or your data, email{" "}
                <strong className="text-white">{supportEmail}</strong>. For more information, read the{" "}
                <Link href="/hs-mart-privacy-policy" className="text-purple-300 underline underline-offset-2 hover:text-purple-200">
                  {appName} Privacy Policy
                </Link>
                .
              </p>
            </Section>
          </div>
        </article>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} {DELETION.developerName}. {appName} Account Deletion.
        </div>
      </footer>
    </div>
  );
}
