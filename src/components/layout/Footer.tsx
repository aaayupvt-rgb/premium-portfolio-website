export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <p className="text-sm text-neutral-500">
            © 2026 Ayush Patidar. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-neutral-400">
          <a
            href="https://www.linkedin.com/in/patidaraaayush"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[#FF4301]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/aaayu_p"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[#FF4301]"
          >
            Instagram
          </a>
          <a
            href="https://www.behance.net/ayushpatidar14"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-[#FF4301]"
          >
            Behance
          </a>
        </div>

      </div>
    </footer>
  );
}