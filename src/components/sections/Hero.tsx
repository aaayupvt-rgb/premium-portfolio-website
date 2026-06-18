import Container from "@/components/shared/Container";
import RevealText from "@/components/shared/RevealText";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-20 md:pt-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8">

            <RevealText>
              <h1 className="max-w-5xl text-[42px] font-semibold leading-[0.95] tracking-[-0.09em] sm:text-[56px] md:text-[96px] lg:text-[140px]">
                INVISIBLE
                <br />
                THOUGHTS.
                <br />
                VISIBLE
                <br />

                <span className="text-[#FF4301]">
                  RESULTS.
                </span>
              </h1>
            </RevealText>

            <div className="mt-8 flex flex-wrap gap-2 md:mt-12 md:gap-3">

              <span className="rounded-full border border-black/10 px-3 py-2 text-xs md:px-4 md:text-sm">
                Brand Identity
              </span>

              <span className="rounded-full border border-black/10 px-3 py-2 text-xs md:px-4 md:text-sm">
                Campaign Systems
              </span>

              <span className="rounded-full border border-black/10 px-3 py-2 text-xs md:px-4 md:text-sm">
                Automation
              </span>

            </div>

            <div className="mt-6 h-px w-24 bg-black/10 md:mt-16" />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 md:mt-10 md:text-lg">
              I design communication systems,
              brand experiences and intelligent
              workflows that help businesses grow.
            </p>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4">

            <div className="mt-4 space-y-8 lg:mt-0">

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Location
                </p>

                <p className="mt-2 text-sm">
                  India
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Focus
                </p>

                <p className="mt-2 text-sm">
                  Branding + Automation
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  Available
                </p>

                <p className="mt-2 text-sm">
                  Freelance & Consulting
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}