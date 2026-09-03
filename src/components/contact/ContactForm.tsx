"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { getDictionary, route, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n/dictionary";

type Values = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

/** Sunucuda da aynı kurallar uygulanır; bkz. app/api/iletisim/route.ts */
function validate(values: Values, messages: Dictionary["form"]["errors"]): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = messages.name;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = messages.email;
  }
  // Telefon isteğe bağlıdır; girildiyse en az 10 rakam beklenir.
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = messages.phone;
  }
  if (values.subject.trim().length < 3) {
    errors.subject = messages.subject;
  }
  if (values.message.trim().length < 20) {
    errors.message = messages.message;
  }
  if (!values.consent) {
    errors.consent = messages.consent;
  }

  return errors;
}

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-[0.95rem] text-ink outline-none transition-colors duration-300 placeholder:text-muted-light focus:border-ink";

export default function ContactForm({ locale }: { locale: Locale }) {
  const id = useId();
  const dict = getDictionary(locale);
  const t = dict.form;
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Kullanıcı düzeltmeye başlar başlamaz hatayı kaldır.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values, t.errors);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`${id}-${firstKey}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="border-t border-ink py-12"
        aria-live="polite"
      >
        <p className="label-eyebrow text-muted">{t.sentLabel}</p>
        <p className="mt-6 max-w-lg font-serif text-[1.6rem] font-light leading-snug md:text-[1.9rem]">
          {t.sentHeading}
        </p>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70">
          {t.sentBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="group mt-10 inline-flex items-baseline gap-3 text-sm"
        >
          <span className="border-b border-line-strong pb-1">{t.sentAgain}</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-500 group-hover:translate-x-2"
          >
            →
          </span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <Field
          id={`${id}-name`}
          label={t.name}
          required
          error={errors.name}
          input={
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${id}-name-error` : undefined}
              className={fieldClass}
            />
          }
        />

        <Field
          id={`${id}-email`}
          label={t.email}
          required
          error={errors.email}
          input={
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
              className={fieldClass}
            />
          }
        />

        <Field
          id={`${id}-phone`}
          label={t.phone}
          hint={t.optional}
          error={errors.phone}
          input={
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
              className={fieldClass}
            />
          }
        />

        <Field
          id={`${id}-subject`}
          label={t.subject}
          required
          error={errors.subject}
          input={
            <input
              id={`${id}-subject`}
              name="subject"
              type="text"
              value={values.subject}
              onChange={(e) => update("subject", e.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? `${id}-subject-error` : undefined
              }
              className={fieldClass}
            />
          }
        />
      </div>

      <Field
        id={`${id}-message`}
        label={t.message}
        required
        error={errors.message}
        input={
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${id}-message-error` : undefined
            }
            className={`${fieldClass} resize-y`}
          />
        }
      />

      <div>
        <label
          htmlFor={`${id}-consent`}
          className="flex cursor-pointer items-start gap-4 text-sm leading-relaxed text-ink/75"
        >
          <input
            id={`${id}-consent`}
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? `${id}-consent-error` : undefined
            }
            className="mt-1 h-4 w-4 shrink-0 accent-ink"
          />
          <span>
            {t.consentBefore}
            <Link
              href={route(locale, "dataProtection")}
              className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
            >
              {t.consentLink}
            </Link>
            {t.consentAfter}
          </span>
        </label>
        {errors.consent && (
          <p
            id={`${id}-consent-error`}
            className="mt-3 pl-8 text-xs text-ink/70"
          >
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-baseline gap-3 text-sm tracking-wide disabled:opacity-50"
        >
          <span className="border-b border-ink pb-1 transition-colors duration-500">
            {status === "sending" ? t.submitting : t.submit}
          </span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
          >
            →
          </span>
        </button>

        {status === "error" && (
          <p role="alert" className="text-sm text-ink/70">
            {t.deliveryError}
          </p>
        )}
      </div>

      <p className="max-w-2xl border-t border-line pt-8 text-xs leading-relaxed text-muted">
        {t.disclaimer}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  input,
  error,
  required,
  hint,
}: {
  id: string;
  label: string;
  input: React.ReactNode;
  error?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="label-eyebrow flex items-baseline gap-2 text-muted"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-muted-light">
            *
          </span>
        )}
        {hint && (
          <span className="font-normal normal-case tracking-normal text-muted">
            ({hint})
          </span>
        )}
      </label>
      <div className="mt-2">{input}</div>
      {error && (
        <p id={`${id}-error`} className="mt-3 text-xs text-ink/70">
          {error}
        </p>
      )}
    </div>
  );
}
