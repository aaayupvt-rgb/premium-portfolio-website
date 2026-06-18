import Container from "@/components/shared/Container";
import FadeIn from "@/components/shared/FadeIn";

export default function Story() {
  return (
    <section className="py-20 md:py-48">
      <Container>
        <FadeIn>

          <div className="max-w-4xl">

            <h2 className="text-[42px] leading-[1.05] tracking-[-0.06em] md:text-[88px]">

              Most designers
              <br />
              create visuals.

              <br />
              <br />

              I build{" "}
              <span className="text-[#FF4301]">
                systems.
              </span>

            </h2>

          </div>

          <div className="mt-10 space-y-4 md:mt-16">

            <p className="text-xl text-neutral-400 md:text-4xl">
              Brand Systems.
            </p>

            <p className="text-xl text-neutral-400 md:text-4xl">
              Communication Systems.
            </p>

            <p className="text-xl text-neutral-400 md:text-4xl">
              Automation Systems.
            </p>

          </div>

        </FadeIn>
      </Container>
    </section>
  );
}