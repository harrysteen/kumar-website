import Link from "next/link";

const PAGE_URL = "https://kumar-website.vercel.app/hs-mart-privacy-policy";
const ACCOUNT_DELETION_URL = "https://kumar-website.vercel.app/hs-mart-account-deletion";

const POLICY = {
  appName: "HS Mart",
  effectiveDate: "October 21, 2026",
  lastUpdated: "October 22, 2026",
  lastUpdatedISO: "2026-10-22",
  developerName: "kumarraju",
  contactEmail: "kumarraj6304467271@gmail.com",
  deletionDays: "14",
  minimumAge: "18",
};

export const metadata = {
  title: "HS Mart Privacy Policy",
  description:
    "Privacy Policy for the HS Mart Android shopping app: what information we collect, how we use and share it, how long we keep it, and how to delete your account and data.",
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
  { id: "introduction", title: "Introduction and Developer Contact Information" },
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

// Numbers come from the order in `sections`, so headings always match the table of contents.
function Section({ id, children }) {
  const index = sections.findIndex((s) => s.id === id);
  const { title } = sections[index];
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-t border-white/10 pt-10">
      <h2 id={`${id}-heading`} className="text-xl sm:text-2xl font-semibold text-white">
        <span className="text-purple-300">{index + 1}.</span> {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-7 text-zinc-300">{children}</div>
    </section>
  );
}

function SubHeading({ children }) {
  return <h3 className="pt-2 text-lg font-semibold text-white">{children}</h3>;
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

function ContactCard() {
  return (
    <address className="not-italic rounded-xl border border-white/10 bg-zinc-950 p-4 text-zinc-200">
      <span className="block font-semibold text-white">{POLICY.appName}</span>
      <span className="block">Developer: {POLICY.developerName}</span>
      <span className="block">
        Email:{" "}
        <a
          href={`mailto:${POLICY.contactEmail}`}
          className="break-all text-purple-300 underline underline-offset-2 hover:text-purple-200"
        >
          {POLICY.contactEmail}
        </a>
      </span>
    </address>
  );
}

export default function HSMartPrivacyPolicyPage() {
  const { appName, developerName, contactEmail, deletionDays } = POLICY;

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
                <dt className="inline font-medium text-zinc-200">Effective Date:</dt>{" "}
                <dd className="inline">{POLICY.effectiveDate}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-zinc-200">Last Updated:</dt>{" "}
                <dd className="inline">
                  <time dateTime={POLICY.lastUpdatedISO}>{POLICY.lastUpdated}</time>
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
            <Section id="introduction">
              <p>
                This Privacy Policy explains how {appName} (the &quot;App&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) collects, uses, shares, and protects information when you use the {appName} mobile
                shopping application. By using the App, you agree to the practices described here.
              </p>
              <p>
                {appName} is developed and published by the developer {developerName}. For any privacy question or
                request, contact:
              </p>
              <ContactCard />
            </Section>

            <Section id="information-we-collect">
              <p>We collect only the information needed to run the App&apos;s features:</p>
              <List>
                <li>
                  <Term>Account information:</Term> your full name, email address, and password when you create an
                  account. Your password is handled by Firebase Authentication. We never see or store it.
                </li>
                <li>
                  <Term>Mobile number:</Term> the contact number you enter at checkout so we can deliver your order
                  and contact you about it.
                </li>
                <li>
                  <Term>Delivery address:</Term> recipient name, flat/house number, landmark, area or locality, and
                  pincode that you enter at checkout.
                </li>
                <li>
                  <Term>Precise location (optional):</Term> if you allow location access and choose to use your
                  current location, the App reads your device&apos;s GPS coordinates while the App is in use and
                  converts them into a street address using your device&apos;s geocoding service. The coordinates are
                  included with your order to help us find your delivery address. We do not collect location in the
                  background.
                </li>
                <li>
                  <Term>Order information:</Term> products, quantities, prices, delivery fee, order total, order ID,
                  and the payment method you select.
                </li>
                <li>
                  <Term>UPI payment screenshot (optional):</Term> if you choose UPI payment, the App asks you to pick
                  a payment screenshot from your gallery. The screenshot is shown in the App for your review and stays
                  on your device. It is not uploaded to our servers.
                </li>
                <li>
                  <Term>AI Virtual Try-On photos (optional):</Term> if you use the Try-On feature on a clothing or
                  accessories product, the photo you take with your camera or choose from your gallery, together with
                  any text instructions you type to edit the result.
                </li>
                <li>
                  <Term>Support messages:</Term> if you contact us, the messages you send us.
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

            <Section id="how-we-use">
              <List>
                <li>To create and manage your account and keep you signed in.</li>
                <li>To process, record, fulfil, and deliver your orders, and to contact you about them.</li>
                <li>To fill in your delivery address and help us find your delivery location.</li>
                <li>To show product availability and keep our store inventory up to date.</li>
                <li>To generate AI Virtual Try-On previews when you ask for them.</li>
                <li>To show your order history and saved delivery location in the App.</li>
                <li>To respond to support and privacy requests.</li>
                <li>To protect the App, prevent fraud and abuse, and comply with legal obligations.</li>
              </List>
              <p>We do not sell your personal information and do not use it for targeted advertising.</p>
            </Section>

            <Section id="account">
              <p>
                You can browse products without an account, but you must sign in to place an order. Accounts use email
                and password sign-in, managed by <Term>Firebase Authentication</Term>, a service provided by Google.
                When you sign up, Firebase stores your name, email address, a securely hashed password, and a unique
                user ID.
              </p>
              <p>
                Your sign-in session is stored on your device so you stay logged in. Signing out ends the session on
                that device.
              </p>
            </Section>

            <Section id="orders">
              <p>
                Our product catalogue is provided through <Term>Shopify</Term>. When you place an order, the App sends
                your order details (name, email, mobile number, delivery address, location coordinates if provided,
                items, totals, and payment method) to our order server. Our server creates a customer and order record
                in our Shopify store so we can manage inventory and fulfil the order.
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
                  <Term>UPI payment:</Term> you pay with your own UPI app. We never receive your UPI PIN or bank login
                  details.
                </li>
                <li>
                  <Term>Cash on Delivery:</Term> payment is collected when your order is delivered.
                </li>
              </List>
              <p>
                Orders are delivered by third-party courier or delivery companies. To fulfil your order, we share your
                name, delivery phone number, and delivery address with the courier or delivery provider handling it.
                If you shared your location at checkout and it is needed to find your address, we may also share
                location or map information (such as a map link) with that provider.
              </p>
              <p>A copy of your order history is stored on your device so you can view it in the Orders screen.</p>
            </Section>

            <Section id="cookies">
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

            <Section id="sharing">
              <p>
                We share information only with the service providers that run the App&apos;s features, and only for the
                purposes described in this policy:
              </p>
              <List>
                <li>
                  <Term>Google Firebase Authentication</Term> for account sign-up and sign-in (
                  <ExternalLink href="https://firebase.google.com/support/privacy">Firebase privacy information</ExternalLink>
                  ).
                </li>
                <li>
                  <Term>Shopify</Term> for the product catalogue, online checkout, and customer and order records,
                  including your name, email, mobile number, and delivery address (
                  <ExternalLink href="https://www.shopify.com/legal/privacy">Shopify Privacy Policy</ExternalLink>).
                </li>
                <li>
                  <Term>Vercel</Term>, which hosts our order server. It processes the order details sent from the App
                  and keeps short-term server logs (
                  <ExternalLink href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</ExternalLink>).
                </li>
                <li>
                  <Term>Replicate</Term>, an AI image service, which processes your Try-On photo, the product image, and
                  any edit instructions to generate the Try-On preview. This happens only when you use the Try-On
                  feature (<ExternalLink href="https://replicate.com/privacy">Replicate Privacy Policy</ExternalLink>).
                </li>
                <li>
                  <Term>WhatsApp (Meta)</Term>, only if you choose to contact us through the WhatsApp option in the App.
                </li>
                <li>
                  <Term>Third-party courier and delivery providers</Term>, who receive your name, delivery phone number,
                  and delivery address, and location or map information only when you provided it and it is needed,
                  to deliver your order.
                </li>
              </List>
              <p>
                We may also disclose information if required by law, to protect our rights or the safety of users, or
                as part of a business transfer. We do not sell or rent your personal information.
              </p>
            </Section>

            <Section id="security">
              <p>
                Information sent between the App and our service providers travels over encrypted HTTPS connections.
                Passwords are handled and stored by Firebase Authentication, never by us. Customer and order records
                are kept in our Shopify store, which can only be accessed by signing in to the store&apos;s admin
                account. Data saved on your device (sign-in session, saved location, and order history) is kept in the
                App&apos;s private storage.
              </p>
              <p>
                No method of transmission or storage is completely secure. We take reasonable measures to protect your
                information but cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="retention">
              <List>
                <li>
                  <Term>Account data</Term> (name, email, and user ID) is kept in Firebase until you delete your
                  account.
                </li>
                <li>
                  <Term>Shopify customer and order records</Term> are kept while they are needed to fulfil your
                  orders, handle payments, refunds, returns, and disputes, and for as long as applicable tax,
                  accounting, and other laws require us to keep transaction records. When they are no longer needed
                  for these purposes, we delete or anonymise them.
                </li>
                <li>
                  <Term>Server logs</Term> on our hosting provider are kept for a limited period under that
                  provider&apos;s log retention settings.
                </li>
                <li>
                  <Term>Try-On photos</Term> are not stored by us. Replicate processes them and keeps them under its own
                  data retention policy.
                </li>
                <li>
                  <Term>Data on your device</Term> stays there until you delete your account in the App, clear the
                  App&apos;s storage, or uninstall the App. Signing out does not remove saved order history or
                  location.
                </li>
              </List>
            </Section>

            <Section id="deletion">
              <p>You can delete your {appName} account at any time in either of these ways.</p>

              <SubHeading>Option 1: Delete your account in the App</SubHeading>
              <ol className="list-decimal space-y-2 pl-5 marker:text-purple-400">
                <li>Open {appName} and sign in.</li>
                <li>
                  Go to the <Term>Profile</Term> tab and tap <Term>Delete Account</Term>.
                </li>
                <li>Confirm, then enter your password to verify it is you.</li>
              </ol>
              <p>
                This immediately and permanently deletes your Firebase account (name, email address, and user ID) and
                removes the order history and saved address stored on your phone. It cannot be undone.
              </p>
              <p>
                Deleting your account in the App does not automatically remove your customer and order records in our
                Shopify store. To have those deleted as well, submit a request using Option 2.
              </p>

              <SubHeading>Option 2: Request deletion online or by email</SubHeading>
              <p>
                If you no longer have the App, cannot sign in, or want your Shopify customer and order records deleted,
                visit{" "}
                <a
                  href={ACCOUNT_DELETION_URL}
                  className="break-all text-purple-300 underline underline-offset-2 hover:text-purple-200"
                >
                  {ACCOUNT_DELETION_URL}
                </a>
                . That page opens a pre-filled email draft in your email app. Your request is sent only when you press
                Send. You can also email <Term>{contactEmail}</Term> directly with the subject{" "}
                <Term>&quot;HS Mart Account Deletion Request&quot;</Term> and the email address linked to your account.
              </p>
              <p>
                We may ask you to confirm that you own the account. We aim to complete valid deletion requests within{" "}
                {deletionDays} days of receiving them.
              </p>

              <SubHeading>What is deleted and what may be kept</SubHeading>
              <p>
                <Term>Deleted:</Term> your account (name, email address, and user ID) and, on request, the personal
                details in your Shopify customer and order records.
              </p>
              <p>
                <Term>May be kept:</Term> order and transaction records that we are legally required to keep, or need
                for tax, accounting, fraud-prevention, or dispute purposes. These records are kept only for as long as
                that requirement applies and are not used for any other purpose.
              </p>
              <p>
                <Term>Data on your device:</Term> without deleting your account, you can remove order history, saved
                location, and your sign-in session from your phone by uninstalling the App or going to{" "}
                <em>Settings → Apps → {appName} → Storage → Clear data</em>.
              </p>
              <p>You can also ask us to delete specific data without deleting your account by emailing us.</p>
            </Section>

            <Section id="children">
              <p>
                {appName} is intended for adults aged {POLICY.minimumAge} and older. We do not knowingly collect
                personal information from anyone under {POLICY.minimumAge}. If you believe someone under{" "}
                {POLICY.minimumAge} has given us personal information, please contact us and we will delete it.
              </p>
            </Section>

            <Section id="rights">
              <p>
                Depending on where you live, including under India&apos;s Digital Personal Data Protection Act, 2023, you
                may have the right to:
              </p>
              <List>
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>
                  Delete your account in the App, or request deletion of your information, as described in Section 10.
                </li>
                <li>
                  Withdraw consent, for example by turning off location, camera, or photo permissions in your device
                  settings.
                </li>
                <li>Raise a complaint or grievance with us, or with the relevant data protection authority.</li>
              </List>
              <p>
                To use any of these rights, email us at <Term>{contactEmail}</Term>. We will respond within a
                reasonable time and as required by applicable law.
              </p>
            </Section>

            <Section id="changes">
              <p>
                We may update this Privacy Policy when the App&apos;s features or our practices change. The updated
                version will be posted on this page with a new &quot;Last Updated&quot; date. For significant changes,
                we may also let you know in the App or by email.
              </p>
            </Section>

            <Section id="contact">
              <p>If you have questions or concerns about this Privacy Policy or your data, contact:</p>
              <ContactCard />
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
