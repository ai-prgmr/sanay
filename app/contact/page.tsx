"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Collaboration Proposal");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Mimic API submission
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setName("");
        setEmail("");
        setSubject("Collaboration Proposal");
        setMessage("");
      }, 3000);
    }, 1500);
  };

  return (
    <main className="pt-32 pb-section-gap relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Header */}
        <header className="mb-stack-lg max-w-3xl animate-fade-in-up">
          <h1 className="font-display text-headline-lg-mobile md:text-display mb-stack-md leading-tight text-primary">
            Get In <span className="text-secondary">Touch</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Whether you're looking for a strategic collaboration, financial mentorship, or have a specific inquiry, I'm always open to meaningful connections.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Contact Form Section */}
          <div className="lg:col-span-7 glass-card rounded-xl p-stack-lg shadow-sm hover:shadow-lg transition-premium relative overflow-hidden">
            <div className="accent-line absolute top-0 left-0 w-full"></div>
            <h2 className="font-headline-md text-headline-md mb-stack-lg text-primary">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-stack-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-outline uppercase tracking-wider font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-transparent border-0 border-b-2 border-outline-variant py-3 focus:border-secondary transition-colors font-body-md text-primary focus:outline-none"
                    placeholder="John Doe"
                    disabled={status !== "idle"}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md text-outline uppercase tracking-wider font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-transparent border-0 border-b-2 border-outline-variant py-3 focus:border-secondary transition-colors font-body-md text-primary focus:outline-none"
                    placeholder="john@example.com"
                    disabled={status !== "idle"}
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-outline uppercase tracking-wider font-semibold">
                  Subject
                </label>
                <div className="relative">
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-transparent border-0 border-b-2 border-outline-variant py-3 focus:border-secondary transition-colors font-body-md text-primary focus:outline-none w-full appearance-none pr-8 cursor-pointer"
                    disabled={status !== "idle"}
                  >
                    <option value="Collaboration Proposal">Collaboration Proposal</option>
                    <option value="Mentorship Inquiry">Mentorship Inquiry</option>
                    <option value="Finance Project Discussion">Finance Project Discussion</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-3 text-outline-variant pointer-events-none">
                    arrow_drop_down
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-md text-label-md text-outline uppercase tracking-wider font-semibold">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="bg-transparent border-0 border-b-2 border-outline-variant py-3 focus:border-secondary transition-colors font-body-md text-primary focus:outline-none resize-none"
                  placeholder="How can I help you?"
                  disabled={status !== "idle"}
                />
              </div>

              <div className="pt-stack-md">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-full md:w-auto px-10 py-4 rounded-lg font-headline-md hover:-translate-y-0.5 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 text-white ${
                    status === "idle"
                      ? "bg-primary hover:bg-secondary cursor-pointer"
                      : status === "sending"
                      ? "bg-primary/80 opacity-80 cursor-wait"
                      : "bg-green-600"
                  }`}
                >
                  {status === "idle" && (
                    <>
                      <span>Submit Inquiry</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <span>Sending...</span>
                      <span className="material-symbols-outlined text-lg animate-spin">
                        sync
                      </span>
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <span>Message Sent!</span>
                      <span className="material-symbols-outlined text-lg">
                        check_circle
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info & CTA Sidebar */}
          <div className="lg:col-span-5 space-y-stack-lg">
            {/* Direct Contact Card */}
            <div className="glass-card rounded-xl p-stack-lg relative hover:shadow-md transition-premium">
              <div className="accent-line absolute top-0 left-0 w-full"></div>
              <h3 className="font-headline-md text-headline-md mb-stack-md text-primary">
                Direct Contact
              </h3>
              <div className="space-y-stack-md">
                <a
                  className="flex items-center gap-stack-md group transition-all"
                  href="mailto:SANAYCHOUBEY13@GMAIL.COM"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline">Email</span>
                    <span className="font-body-md text-body-md font-bold group-hover:text-secondary text-primary uppercase break-all">
                      SANAYCHOUBEY13@GMAIL.COM
                    </span>
                  </div>
                </a>

                <a
                  className="flex items-center gap-stack-md group transition-all"
                  href="tel:+919267925188"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline">Phone</span>
                    <span className="font-body-md text-body-md font-bold group-hover:text-secondary text-primary">
                      +91 92679 25188
                    </span>
                  </div>
                </a>
                
                <div className="flex items-center gap-stack-md">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline">Location</span>
                    <span className="font-body-md text-body-md font-bold text-primary">
                      New Delhi, India
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-stack-lg pt-stack-md border-t border-outline-variant">
                <h4 className="font-label-md text-label-md text-outline uppercase mb-stack-md tracking-widest font-semibold">
                  Connect
                </h4>
                <div className="flex gap-4">
                  <a
                    className="p-3 bg-primary text-on-primary rounded-full hover:bg-secondary transition-colors"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    className="p-3 bg-primary text-on-primary rounded-full hover:bg-secondary transition-colors"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Mentorship CTA Card */}
            <div className="bg-primary-container rounded-xl p-stack-lg text-on-primary-fixed relative overflow-hidden group hover:shadow-lg transition-premium">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent group-hover:scale-110 transition-transform duration-700"></div>
              <h3 className="font-headline-md text-headline-md mb-stack-md text-white relative z-10">
                Mentorship &amp; Collaboration
              </h3>
              <p className="font-body-md text-body-md mb-stack-lg text-on-primary-container relative z-10 leading-relaxed">
                Looking to break into finance or strategy? I dedicate time each month to mentor aspiring students and collaborate on innovative F1/Fintech ventures.
              </p>
              <div className="flex items-center gap-stack-sm mb-stack-lg relative z-10">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-label-sm font-bold tracking-widest text-secondary uppercase">
                  Availability: 2 slots open
                </span>
              </div>
              <a
                className="inline-flex items-center gap-2 font-label-md text-label-md text-white border-b-2 border-secondary pb-1 group-hover:gap-4 transition-all relative z-10 cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Strategy Session
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Summary Section (Engagement Booster) */}
        <section className="mt-section-gap grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-stack-md rounded-lg text-center hover:-translate-y-1 hover:shadow-md transition-premium">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2 font-fill">
              verified
            </span>
            <h4 className="font-headline-md text-headline-md text-primary">1st Place</h4>
            <p className="font-label-sm text-outline font-medium">
              F1 in Schools National Finals
            </p>
          </div>
          <div className="glass-card p-stack-md rounded-lg text-center hover:-translate-y-1 hover:shadow-md transition-premium">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2 font-fill">
              trending_up
            </span>
            <h4 className="font-headline-md text-headline-md text-primary">+15% ROI</h4>
            <p className="font-label-sm text-outline font-medium">
              Simulated Equity Portfolio
            </p>
          </div>
          <div className="glass-card p-stack-md rounded-lg text-center hover:-translate-y-1 hover:shadow-md transition-premium">
            <span className="material-symbols-outlined text-secondary text-4xl mb-2 font-fill">
              history_edu
            </span>
            <h4 className="font-headline-md text-headline-md text-primary">500+ Hrs</h4>
            <p className="font-label-sm text-outline font-medium">
              Strategic Project Management
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
