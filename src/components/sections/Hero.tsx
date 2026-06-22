import Container from "@/components/shared/Container";
import RevealText from "@/components/shared/RevealText";
import TypewriterWord from "@/components/shared/TypewriterWord";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-20 md:pt-32">
      <Container>

        <div className="flex flex-col items-center text-center">

          <RevealText>

            <h1
  className="
    font-semibold
    leading-[0.9]
    tracking-[-0.07em]

    text-[15vw]
    sm:text-[13vw]
    md:text-[88px]
    lg:text-[120px]
  "
>
  <span className="block">
    INVISIBLE THOUGHTS.
  </span>

  <span className="block mt-2">
    VISIBLE{" "}

    <span
      className="
        inline-block
        text-[#FF4301]
      "
    >
      <TypewriterWord />
    </span>

  </span>
</h1>

          </RevealText>

          {/* Tags */}

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:mt-14">

            <span
              className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
              "
            >
              Brand Identity
            </span>

            <span
              className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
              "
            >
              Campaign Systems
            </span>

            <span
              className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
              "
            >
              Automation
            </span>

          </div>

          {/* Divider */}

          <div className="mt-16 h-px w-24 bg-white/10" />

          {/* Paragraph */}

          <p
            className="
              mx-auto
              mt-10
              max-w-2xl
              text-center
              text-base
              leading-relaxed
              text-neutral-300

              md:text-lg
            "
          >
            I design communication systems,
            brand experiences and intelligent
            workflows that help businesses grow.
          </p>

        </div>

      </Container>
    </section>
  );
}