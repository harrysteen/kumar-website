import Link from "next/link";

const PAGE_URL = "https://harry.services/hs-mart-privacy-policy";

// TODO before publishing: replace every value wrapped in [ ] below.
const POLICY = {
  appName: "HS Mart",
  effectiveDate: "[EFFECTIVE DATE — e.g. October 21, 2026]",
  lastUpdated: "October 21, 2026",
  developerName: "[DEVELOPER / BUSINESS LEGAL NAME]",
  contactEmail: "kumarraj6304467271@gmail.com",
  postalAddress: "[BUSINESS POSTAL ADDRESS]",
  deletionDays: "[NUMBER]",
  minimumAge: "18",
};

export const metadata = {
  title: "HS Mart Privacy Policy",
  description:
    "Privacy Policy for the HS Mart Android shopping app: what information we collect, how we use and share it, how long we keep it, and how to request account and data deletion.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "HS Mart Privacy Policy",
    description:
      "How the HS Mart shopping app collects, uses, shares, and protects your information.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "introduction", title: "Introduction and Developer Contact" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "account", title: "Account Registration and Authentication" },
  { id: "orders", title: "Shopping, Orders, Payments, and Delivery" },
  { id: "cookies", title: "Cookies and Third-Party Services" },
  { id: "sharing", title: "Data Sharing and Service Providers" },
  { id: "security", title: "Data Security" },
  { id: "retention", title: "Data Retention" },
  { id: "deletion", title: "Account Deletion and Data Deletion" },
  { id: "children", title: "Children's Privacy" },
  { id: "rights", title: "Your Privacy Rights" },
  { id: "changes", title: "Changes to This Privacy Policy" },
  { id: "contact", title: "Contact Us" },
];

function Section({ id, number, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-t border-white/10 pt-10">
      <h2 id={`${id}-heading`} className="text-xl sm:text-2xl font-semibold text-white">
        <span className="text-purple-300 mr-2">{number}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

function List({ children }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-purple-400">{children}</ul>;
}

function Term({ children }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-300 underline underline-offset-2 hover:text-purple-200"
    >
      {children}
    </a>
  );
}

export default function HSMartPrivacyPolicyPage() {
  const { appName, developerName, contactEmail, postalAddress } = POLICY;

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
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{appName} Privacy Policy</h1>
            <dl className="mt-6 grid gap-2 text-sm text-zinc-400 sm:grid-cols-2">
              <div>
                <dt className="inline font-medium text-zinc-200">Effective Date: </dt>
                <dd className="inline">{POLICY.effectiveDate}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-zinc-200">Last Updated: </dt>
                <dd className="inline">
                  <time dateTime="2026-10-21">{POLICY.lastUpdated}</time>
                </dd>
              </div>
            </dl>
          </header>

          <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Contents</h2>
            <ol className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-zinc-300 hover:text-purple-300">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            <Section id="introduction" number={1} title="Introduction and Developer Contact">
              <p>
                This Privacy Policy explains how {appName} (the &quot;App&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) collects, uses, shares, and protects information when you use the {appName} mobile
                shopping application. By using the App, you agree to the practices described here.
              </p>
              <p>The App is developed and operated by:</p>
              <address className="not-italic rounded-xl border border-white/10 bg-zinc-950 p-4 text-zinc-200">
                <span className="block font-semibold text-white">{developerName}</span>
                <span className="block">{postalAddress}</span>
                <span className="block">Email: {contactEmail}</span>
              </address>
            </Section>

            <Section id="information-we-collect" number={2} title="Information We Collect">
              <p>We collect only the information needed to run the App&apos;s features:</p>
              <List>
                <li>
                  <Term>Account information:</Term> your full name, email address, and password when you create an
                  account. Your password is handled by Firebase Authentication. We never see or store it.
                </li>
                <li>
                  <Term>Mobile number:</Term> the contact number you enter at checkout for delivery. If mobile-number
                  sign-in is turned on in the App, the number you use to sign in or link to your account is also
                  processed by Firebase Authentication to send and verify a one-time password (OTP).
                </li>
                <li>
                  <Term>Delivery address:</Term> recipient name, flat/house number, landmark, area or locality,
                  and pincode that you enter at checkout.
                </li>
                <li>
                  <Term>Precise location (optional):</Term> if you allow location access and choose to use your
                  current location, the App reads your device&apos;s GPS coordinates while the App is in use. It
                  converts them into a street address with your device&apos;s built-in geocoding service. We do not
                  collect location in the background.
                </li>
                <li>
                  <Term>Order information:</Term> products, quantities, prices, delivery fee, order total, order ID,
                  and the payment method you select.
                </li>
                <li>
                  <Term>Photos (optional):</Term> if you use the AI Virtual Try-On feature, the photo you take with
                  your camera or choose from your gallery. If you choose UPI payment, the App also asks you to pick a
                  payment screenshot from your gallery. That screenshot is shown in the App for your review and is
                  not uploaded to our servers.
                </li>
                <li>
                  <Term>Try-On edit instructions (optional):</Term> any text instructions you type to edit a
                  Try-On image.
                </li>
                <li>
                  <Term>Support messages:</Term> if you contact customer care on WhatsApp, the messages you send us.
                </li>
                <li>
                  <Term>Technical information:</Term> our service providers, such as Firebase and our hosting
                  provider, may automatically process technical data such as IP address, device and app information,
                  and request logs to deliver their services and prevent abuse.
                </li>
              </List>
              <p>
                The App does not contain advertising SDKs or third-party analytics SDKs, and does not access your
                contacts, SMS messages, or files other than images you choose to share.
              </p>
            </Section>

            <Section id="how-we-use" number={3} title="How We Use Information">
              <List>
                <li>To create and manage your account and keep you signed in.</li>
                <li>To process, record, fulfil, and deliver your orders, and to contact you about them.</li>
                <li>To fill in your delivery address and help delivery personnel find you.</li>
                <li>To show product availability and keep our store inventory up to date.</li>
                <li>To generate AI Virtual Try-On previews when you ask for them.</li>
                <li>To show your order history and saved delivery location in the App.</li>
                <li>To respond to support requests.</li>
                <li>To protect the App, prevent fraud and abuse, and comply with legal obligations.</li>
              </List>
              <p>We do not sell your personal information and do not use it for targeted advertising.</p>
            </Section>

            <Section id="account" number={4} title="Account Registration and Authentication">
              <p>
                You can browse products without an account, but you must sign in to place an order. Accounts are
                managed with <Term>Firebase Authentication</Term>, a service provided by Google. When you sign up,
                Firebase stores your name, email address, a securely hashed password, and a unique user ID. When
                mobile-number sign-in is available, Firebase also processes your phone number to send and verify
                OTP codes.
              </p>
              <p>
                Your sign-in session is stored on your device so you stay logged in. Signing out ends the session on
                that device.
              </p>
            </Section>

            <Section id="orders" number={5} title="Shopping, Orders, Payments, and Delivery">
              <p>
                Our product catalogue is provided through <Term>Shopify</Term>. When you place an order, the App sends
                your order details (name, email, mobile number, delivery address, location coordinates if provided,
                items, totals, and payment method) to our order server. Our server records the order in our Shopify
                store so we can manage inventory and fulfil it.
              </p>
              <p>The App offers the following payment options:</p>
              <List>
                <li>
                  <Term>Online payment through Shopify Checkout:</Term> the App opens a secure Shopify-hosted checkout
                  page in your browser, pre-filled with your email, mobile number, and delivery address. Card, UPI, or
                  net-banking details you enter there are collected by Shopify and its payment processors under their
                  own privacy policies. They are not collected or stored by the {appName} App.
                </li>
                <li>
                  <Term>UPI payment:</Term> you pay with your own UPI app. We never receive your UPI PIN or bank
                  login details.
                </li>
                <li>
                  <Term>Cash on Delivery:</Term> payment is collected when your order is delivered.
                </li>
              </List>
              <p>
                To deliver your order, we share your name, mobile number, and delivery address (including a map link
                if you shared your location) with the people who deliver it.
              </p>
              <p>A copy of your order history is stored on your device so you can view it in the Orders screen.</p>
            </Section>

            <Section id="cookies" number={6} title="Cookies and Third-Party Services">
              <p>
                The {appName} App does not use cookies. If you open Shopify Checkout, that web page is operated by
                Shopify and may use cookies under{" "}
                <ExternalLink href="https://www.shopify.com/legal/privacy">Shopify&apos;s Privacy Policy</ExternalLink>.
              </p>
              <p>
                This privacy policy web page does not require cookies, sign-in, or installing the App to read. The
                website uses Vercel Web Analytics, which collects anonymous, aggregated page-view statistics without
                cookies.
              </p>
            </Section>

            <Section id="sharing" number={7} title="Data Sharing and Service Providers">
              <p>
                We share information only with the service providers that run the App&apos;s features, and only for
                the purposes described in this policy:
              </p>
              <List>
                <li>
                  <Term>Google Firebase Authentication</Term> for account sign-up, sign-in, and OTP verification (
                  <ExternalLink href="https://firebase.google.com/support/privacy">Firebase privacy information</ExternalLink>
                  ).
                </li>
                <li>
                  <Term>Shopify</Term> for the product catalogue, online checkout, and order records, including your
                  name, email, mobile number, and delivery address (
                  <ExternalLink href="https://www.shopify.com/legal/privacy">Shopify Privacy Policy</ExternalLink>).
                </li>
                <li>
                  <Term>Vercel</Term>, which hosts our order server. It processes the order details sent from the App
                  and keeps short-term server logs (
                  <ExternalLink href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</ExternalLink>).
                </li>
                <li>
                  <Term>Replicate</Term>, an AI image service, which processes your Try-On photo, the product image,
                  and any edit instructions to generate the Try-On preview. This happens only when you use the Try-On
                  feature (
                  <ExternalLink href="https://replicate.com/privacy">Replicate Privacy Policy</ExternalLink>).
                </li>
                <li>
                  <Term>Delivery personnel</Term>, who receive the name, mobile number, and address needed to deliver
                  your order.
                </li>
                <li>
                  <Term>WhatsApp (Meta)</Term>, only if you choose to contact customer care on WhatsApp.
                </li>
              </List>
              <p>
                We may also disclose information if required by law, to protect our rights or the safety of users,
                or as part of a business transfer. We do not sell or rent your personal information.
              </p>
            </Section>

            <Section id="security" number={8} title="Data Security">
              <p>
                Information sent between the App and our service providers travels over encrypted HTTPS connections.
                Passwords are handled and stored by Firebase Authentication, never by us. Order records are kept in
                our Shopify store, which only authorised staff can access. Data saved on your device (sign-in
                session, saved location, and order history) is kept in the App&apos;s private storage.
              </p>
              <p>
                No method of transmission or storage is completely secure. We take reasonable measures to protect
                your information but cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="retention" number={9} title="Data Retention">
              <List>
                <li>
                  <Term>Account data</Term> (name, email, phone, user ID) is kept in Firebase until your account is
                  deleted.
                </li>
                <li>
                  <Term>Order records</Term> in Shopify are kept for as long as needed to fulfil orders, handle
                  returns and disputes, and meet tax and accounting obligations, which is{" "}
                  [ORDER RECORD RETENTION PERIOD].
                </li>
                <li>
                  <Term>Server logs</Term> on our hosting provider are kept for a limited period under that
                  provider&apos;s log retention settings.
                </li>
                <li>
                  <Term>Try-On photos</Term> are not stored by us. Replicate processes them and keeps them under its
                  own data retention policy.
                </li>
                <li>
                  <Term>Data on your device</Term> stays there until you clear the App&apos;s storage or uninstall the
                  App. Signing out does not remove saved order history or location.
                </li>
              </List>
            </Section>

            <Section id="deletion" number={10} title="Account Deletion and Data Deletion">
              <p>You can ask us to delete your {appName} account and its associated data at any time:</p>
              <ol className="list-decimal space-y-2 pl-5 marker:text-purple-400">
                <li>
                  Email <Term>{contactEmail}</Term> from the email address linked to your account, or include the
                  mobile number linked to your account.
                </li>
                <li>
                  Use the subject line <Term>&quot;HS Mart Account Deletion Request&quot;</Term>.
                </li>
                <li>
                  We may ask you to confirm that you own the account. We will then delete your Firebase account and
                  the personal information linked to it within {POLICY.deletionDays} days, and email you when this is
                  done.
                </li>
              </ol>
              <p>
                <Term>What is deleted:</Term> your account (name, email, phone number, user ID) and the personal
                details attached to your orders, except where the law requires us to keep them.
              </p>
              <p>
                <Term>What may be kept:</Term> order and transaction records that we must keep for tax, accounting,
                fraud-prevention, or legal reasons. These are kept only for the required period and then deleted.
              </p>
              <p>
                <Term>Data on your device:</Term> to remove order history, saved location, and your sign-in session
                from your phone, uninstall the App or go to{" "}
                <em>Settings → Apps → {appName} → Storage → Clear data</em>.
              </p>
              <p>You can also ask us to delete specific data without deleting your account by emailing us.</p>
            </Section>

            <Section id="children" number={11} title="Children's Privacy">
              <p>
                The App is not intended for anyone under {POLICY.minimumAge} years of age. We do not knowingly collect
                personal information from children. If you believe a child has given us personal information, please
                contact us and we will delete it.
              </p>
            </Section>

            <Section id="rights" number={12} title="Your Privacy Rights">
              <p>
                Depending on where you live, including under India&apos;s Digital Personal Data Protection Act, 2023,
                you may have the right to:
              </p>
              <List>
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>Request deletion of your information, as described in Section 10.</li>
                <li>Withdraw consent, for example by turning off location, camera, or photo permissions in your device settings.</li>
                <li>Raise a complaint or grievance with us, or with the relevant data protection authority.</li>
              </List>
              <p>
                To use any of these rights, email us at <Term>{contactEmail}</Term>. We will respond within a
                reasonable time and as required by applicable law.
              </p>
            </Section>

            <Section id="changes" number={13} title="Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy when the App&apos;s features or our practices change. The updated
                version will be posted on this page with a new &quot;Last Updated&quot; date. If the changes are
                significant, we will give additional notice in the App or by email.
              </p>
            </Section>

            <Section id="contact" number={14} title="Contact Us">
              <p>If you have questions or concerns about this Privacy Policy or your data, contact:</p>
              <address className="not-italic rounded-xl border border-white/10 bg-zinc-950 p-4 text-zinc-200">
                <span className="block font-semibold text-white">{developerName}</span>
                <span className="block">{postalAddress}</span>
                <span className="block">Email: {contactEmail}</span>
              </address>
            </Section>
          </div>
        </article>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} {developerName}. {appName} Privacy Policy.
        </div>
      </footer>
    </div>
  );
}
