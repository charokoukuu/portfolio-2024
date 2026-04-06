'use client';

import { useState, FormEvent } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = '名前は必須項目です';
    if (!form.email.trim()) {
      newErrors.email = 'メールアドレスは必須項目です';
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      newErrors.email = '無効なメールアドレスです';
    }
    if (!form.message.trim())
      newErrors.message = 'お問い合わせ内容は必須項目です';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT ?? '',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'お問い合わせ',
            avatar_url:
              'https://avatars.githubusercontent.com/u/35647163?v=4',
            content: `名前: ${form.name}\nメールアドレス: ${form.email}\n\nお問い合わせ内容: \n${form.message}`,
          }),
        }
      );
      if (response.ok || response.status === 204) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Failed to send:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <GlassPanel className="max-w-md p-8 text-center">
          <div className="mb-4 font-mono text-4xl text-lime-400">✓</div>
          <h2 className="mb-2 font-mono text-lg font-bold text-cyan-50">
            TRANSMISSION COMPLETE
          </h2>
          <p className="mb-6 font-mono text-sm text-slate-400">
            お問い合わせ内容が送信されました。
            <br />
            ご連絡いただきありがとうございます。
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setForm({ name: '', email: '', message: '' });
            }}
            className="neon-button"
          >
            SEND ANOTHER
          </button>
        </GlassPanel>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-lg">
        <SectionTitle system="COMM::TRANSMISSION" title="Contact" />

        <GlassPanel className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1 block font-mono text-xs tracking-wider text-slate-500"
              >
                NAME *
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="cyber-input"
                placeholder="名前を入力"
              />
              {errors.name && (
                <p className="mt-1 font-mono text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1 block font-mono text-xs tracking-wider text-slate-500"
              >
                EMAIL *
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="cyber-input"
                placeholder="メールアドレスを入力"
              />
              {errors.email && (
                <p className="mt-1 font-mono text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1 block font-mono text-xs tracking-wider text-slate-500"
              >
                MESSAGE *
              </label>
              <textarea
                id="contact-message"
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="cyber-input resize-none"
                placeholder="お問い合わせ内容を入力"
              />
              {errors.message && (
                <p className="mt-1 font-mono text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="neon-button w-full disabled:opacity-40"
            >
              {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT'}
            </button>
          </form>
        </GlassPanel>
      </div>
    </div>
  );
}
