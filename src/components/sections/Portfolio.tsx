import FadeIn from "@/components/shared/FadeIn";

export default function Portfolio() {
  return (
    <section className="py-48">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <FadeIn>
          <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-8xl">
  Explore The
  <br />
  Full Portfolio
</h2>

            <p className="mt-8 text-lg text-neutral-300">
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
            Explore Full Portfolio →
          </a>
        </FadeIn>

      </div>
    </section>
  );
}