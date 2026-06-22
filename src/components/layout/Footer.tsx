export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        <div>
          <p className="text-sm text-neutral-400">
            © 2026 Ayush Patidar
          </p>
        </div>

        <div className="flex gap-8 text-sm text-neutral-400">
          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}