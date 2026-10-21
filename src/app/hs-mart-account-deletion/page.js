import Link from "next/link";
import DeletionRequestForm from "./DeletionRequestForm";

const PAGE_URL = "https://kumar-website.vercel.app/hs-mart-account-deletion";

// The request form stays disabled until supportEmail is a real email address.
const DELETION = {
  appName: "HS Mart",
  developerName: "kumarraju",
  supportEmail: "kumarraj6304467271@gmail.com",
  processingDays: "14",
  lastUpdated: "October 22, 2026",
  lastUpdatedISO: "2026-10-22",
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
              Last updated: <time dateTime={DELETION.lastUpdatedISO}>{DELETION.lastUpdated}</time>
            </p>
          </header>

          <div className="space-y-10">
            <Section id="delete-in-app" title="Delete your account in the app">
              <p>If you can sign in to {appName}, you can delete your account directly in the app:</p>
              <ol className="list-decimal space-y-2 pl-5 marker:text-purple-400">
                <li>Open {appName} and sign in.</li>
                <li>
                  Go to the <strong className="text-white">Profile</strong> tab and tap{" "}
                  <strong className="text-white">Delete Account</strong>.
                </li>
                <li>Confirm, then enter your password to verify it is you.</li>
              </ol>
              <p>
                This permanently deletes your account and removes the order history and saved address stored on your
                phone. It does not automatically remove your customer and order records in our Shopify store. To have
                those deleted too, send a request using the form below.
              </p>
            </Section>

            <Section id="how-to-request" title="Request deletion by email">
              <p>
                Use this option if you cannot sign in, no longer have the app, or want your Shopify customer and order
                records deleted.
              </p>
              <ol className="list-decimal space-y-2 pl-5 marker:text-purple-400">
                <li>Fill in the form below with the email address you used to register for {appName}.</li>
                <li>
                  Press <strong className="text-white">Open email to send request</strong>. Your email app opens with
                  the request filled in. Press <strong className="text-white">Send</strong>.
                </li>
                <li>
                  If you prefer, email <strong className="text-white">{supportEmail}</strong> directly with the
                  subject &quot;HS Mart Account Deletion Request&quot; and your registered email address. You can also
                  include the phone number you used for deliveries to help us find your orders.
                </li>
              </ol>
              <p>
                This page does not send anything by itself. Your request reaches us only after you press Send in your
                email app. We review requests sent to {supportEmail} and will contact you at the email address you
                write from if we need to verify your account or have questions about your request.
              </p>
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
                <li>
                  Your {appName} account and email and password sign-in details (name, email address, and user ID).
                </li>
                <li>
                  Personal details you gave us for deliveries, such as recipient names, delivery phone numbers, and
                  delivery addresses.
                </li>
                <li>
                  Personal details in your Shopify customer and order records, which we remove manually after
                  verifying your request, except where we must keep them (see below).
                </li>
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
