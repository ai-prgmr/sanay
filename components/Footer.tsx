import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-stack-lg mt-auto relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="font-headline-md text-headline-md font-black text-primary">
          Sanay Choubey
        </div>
        <div className="flex gap-stack-md">
          <a
            className="text-on-surface-variant hover:text-primary font-label-md text-label-md transition-opacity hover:opacity-80 hover:underline decoration-secondary underline-offset-4"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary font-label-md text-label-md transition-opacity hover:opacity-80 hover:underline decoration-secondary underline-offset-4"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary font-label-md text-label-md transition-opacity hover:opacity-80 hover:underline decoration-secondary underline-offset-4"
            href="mailto:sanaychoubey13@gmail.com"
          >
            Email
          </a>
        </div>
        <div className="text-on-surface-variant font-label-md text-label-md">
          © 2024 Sanay Choubey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
