"use client";

import { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DeletionRequestForm({ supportEmail }) {
  const isConfigured = EMAIL_PATTERN.test(supportEmail);
  const [form, setForm] = useState({ email: "", phone: "", reason: "" });
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpened(false);

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError("Please enter the email address registered with your HS Mart account.");
      return;
    }
    setError("");

    const subject = "HS Mart Account Deletion Request";
    const body = [
      "Hello HS Mart Support,",
      "",
      "Please delete my HS Mart account and the personal data associated with it.",
      "",
      `Registered email: ${form.email.trim()}`,
      `Registered phone number: ${form.phone.trim() || "Not provided"}`,
      `Reason: ${form.reason.trim() || "Not provided"}`,
      "",
      "I understand you may contact me to verify that I own this account.",
    ].join("\n");

    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/40";

  return (
    <form onSubmit={handleSubmit} noValidate aria-describedby="form-how-it-works" className="space-y-5">
      <p id="form-how-it-works" className="text-sm leading-6 text-zinc-400">
        Submitting this form opens your email app with a pre-filled deletion request addressed to HS Mart
        support. Your request is sent only when you press <strong className="text-zinc-200">Send</strong> in your
        email app. This website does not store the information you enter.
      </p>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-200">
          Registered email address <span className="text-purple-300">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "email-error" : undefined}
          value={form.email}
          onChange={handleChange}
          placeholder="name@example.com"
          className={inputClass}
        />
        {error && (
          <p id="email-error" role="alert" className="mt-2 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-200">
          Registered phone number <span className="text-zinc-500">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-zinc-200">
          Reason for deletion <span className="text-zinc-500">(optional)</span>
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          value={form.reason}
          onChange={handleChange}
          placeholder="Tell us why you are leaving (optional)"
          className={inputClass}
        />
      </div>

      {!isConfigured && (
        <p role="note" className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-amber-200">
          The HS Mart support email has not been configured yet, so requests cannot be sent from this page.
        </p>
      )}

      <button
        type="submit"
        disabled={!isConfigured}
        className="w-full rounded-xl bg-purple-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400 sm:w-auto"
      >
        Open email to send request
      </button>

      <div aria-live="polite">
        {opened && (
          <p className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-sm leading-6 text-zinc-300">
            Your email app should now be open with the request filled in. Press <strong>Send</strong> to submit it.
            If nothing opened, email <strong className="text-white">{supportEmail}</strong> with the subject
            &quot;HS Mart Account Deletion Request&quot; and include your registered email address.
          </p>
        )}
      </div>
    </form>
  );
}
