import FadeIn from "@/components/shared/FadeIn";

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden py-48">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          z-0
        "
      >
        <source
          src="/portfolio/portfoliobg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/75
          z-[1]
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <FadeIn>

          <h2
            className="
              text-5xl
              font-semibold
              tracking-[-0.05em]
              md:text-8xl
            "
          >
            Explore The
            <br />
            Portfolio
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-neutral-300
            "
          >
            Browse selected branding,
            campaign design,
            communication systems,
            and automation projects.
          </p>

          <a
            href="https://www.behance.net/ayushpatidar14"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-12
              inline-flex
              rounded-full
              border
              border-white
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Explore Portfolio →
          </a>

        </FadeIn>

      </div>

      {/* Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-48
          w-full
          bg-gradient-to-b
          from-transparent
          to-black
          z-[2]
          pointer-events-none
        "
      />

    </section>
  );
}