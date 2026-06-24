"use client";

import FadeIn from "@/components/shared/FadeIn";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    // mailto fallback — opens email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:aaayujpg@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <FadeIn>
      <section id="contact" className="bg-black py-24 text-white md:py-48">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-20 lg:grid-cols-12">

            {/* Left */}
            <div className="lg:col-span-6">
              <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/50">
                Contact
              </p>

              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Ready To Build
                <br />
                Something
                <br />
                <span className="text-[#FF4301]">Impossible</span>
                <br />
                To Ignore?
              </h2>

              <p className="mt-10 max-w-sm text-lg leading-relaxed text-white/70">
                Available for branding, creative systems,
                automation workflows, campaign design,
                and long-term collaborations.
              </p>

              <a
                href="mailto:aaayujpg@gmail.com"
                className="mt-12 inline-block text-lg font-medium text-white/85 transition-all duration-300 hover:text-[#FF4301]"
              >
                aaayujpg@gmail.com
              </a>

              <div className="mt-10 h-px w-32 bg-white/15" />

              <div className="mt-10 flex items-center gap-6">

                {/* Behance */}
                <a
                  href="https://www.behance.net/ayushpatidar14"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                  className="text-white/60 transition-all duration-300 hover:text-[#FF4301] hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M8.072 10.538c.786 0 1.355-.47 1.355-1.204 0-.733-.569-1.176-1.355-1.176H5.25v2.38h2.822zm.227 4.012c.88 0 1.53-.48 1.53-1.316 0-.834-.65-1.288-1.53-1.288H5.25v2.604h3.049zM3 6h5.37c2.19 0 3.4 1.164 3.4 2.88 0 1.184-.62 2.006-1.55 2.4 1.27.34 2.07 1.34 2.07 2.92C12.29 16.98 10.86 18 8.54 18H3V6zm12.36 3.06h4.62V7.92h-4.62v1.14zm2.33 2.25c-1.2 0-1.74.78-1.84 1.56h3.52c-.06-.92-.62-1.56-1.68-1.56zm.08 6.87c-2.52 0-4.18-1.66-4.18-4.15s1.66-4.15 4.18-4.15c2.43 0 4.08 1.62 4.08 4.27v.32h-5.95c.1 1.14.82 1.85 1.9 1.85.84 0 1.34-.36 1.58-.92h2.27c-.42 1.72-1.92 2.78-3.88 2.78z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/patidaraaayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/60 transition-all duration-300 hover:text-[#FF4301] hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.18h.05c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.13V24h-4v-7.08c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V24h-4V8z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/aaayu_p"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/60 transition-all duration-300 hover:text-[#FF4301] hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.12a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  </svg>
                </a>

              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-6">
              <div className="space-y-6">

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      w-full
                      border-b
                      border-white/10
                      bg-transparent
                      py-4
                      text-lg
                      text-white
                      placeholder:text-white/20
                      focus:border-[#FF4301]
                      focus:outline-none
                      transition-colors
                      duration-300
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="
                      w-full
                      border-b
                      border-white/10
                      bg-transparent
                      py-4
                      text-lg
                      text-white
                      placeholder:text-white/20
                      focus:border-[#FF4301]
                      focus:outline-none
                      transition-colors
                      duration-300
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="
                      w-full
                      border-b
                      border-white/10
                      bg-transparent
                      py-4
                      text-lg
                      text-white
                      placeholder:text-white/20
                      focus:border-[#FF4301]
                      focus:outline-none
                      transition-colors
                      duration-300
                      resize-none
                    "
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || status === "sent"}
                  className="
                    mt-4
                    inline-flex
                    rounded-full
                    bg-[#FF4301]
                    px-10
                    py-4
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#e03a00]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  {status === "sent" ? "Message Sent ✓" : status === "sending" ? "Sending..." : "Send Message →"}
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}