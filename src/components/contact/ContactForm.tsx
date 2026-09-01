"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";

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
function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Lütfen ad ve soyadınızı yazınız.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Geçerli bir e-posta adresi giriniz.";
  }
  // Telefon isteğe bağlıdır; girildiyse en az 10 rakam beklenir.
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Telefon numarası eksik görünüyor.";
  }
  if (values.subject.trim().length < 3) {
    errors.subject = "Lütfen kısa bir konu başlığı yazınız.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Mesajınızı biraz daha ayrıntılı yazabilir misiniz?";
  }
  if (!values.consent) {
    errors.consent = "Devam edebilmek için onay kutusunu işaretlemeniz gerekir.";
  }

  return errors;
}

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-[0.95rem] text-ink outline-none transition-colors duration-300 placeholder:text-muted-light focus:border-ink";

export default function ContactForm() {
  const id = useId();
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

    const found = validate(values);
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
        body: JSON.stringify(values),
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
        <p className="label-eyebrow text-muted">Teşekkür ederiz</p>
        <p className="mt-6 max-w-lg font-serif text-[1.6rem] font-light leading-snug md:text-[1.9rem]">
          Mesajınızı aldık.
        </p>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70">
          Okuyup size döneceğiz. Beklemeyecek bir konuysa büromuzu telefonla
          da arayabilirsiniz.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="group mt-10 inline-flex items-baseline gap-3 text-sm"
        >
          <span className="border-b border-line-strong pb-1">
            Yeni bir mesaj yaz
          </span>
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
          label="Ad Soyad"
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
          label="E-posta"
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
          label="Telefon"
          hint="isteğe bağlı"
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
          label="Konu"
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
        label="Mesaj"
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
            <Link
              href="/kvkk"
              className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
            >
              KVKK Aydınlatma Metni
            </Link>
            &rsquo;ni okudum ve kişisel verilerimin belirtilen kapsamda
            işlenmesini kabul ediyorum.
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
            {status === "sending" ? "Gönderiliyor" : "Mesajı gönder"}
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
            Mesaj gönderilemedi. Lütfen tekrar deneyin veya bize doğrudan
            e-posta gönderin.
          </p>
        )}
      </div>

      <p className="max-w-2xl border-t border-line pt-8 text-xs leading-relaxed text-muted">
        Bu formu doldurmanız avukat–müvekkil ilişkisi kurmaz; vekâlet ilişkisi
        ancak ayrıca imzalanacak bir sözleşmeyle doğar. Bu nedenle gizli
        bilgileri forma yazmamanızı öneririz. Süre sınırı olan bir konuysa
        beklemeden bizi arayın.
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
