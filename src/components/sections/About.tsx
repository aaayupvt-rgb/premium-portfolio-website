import FadeIn from "@/components/shared/FadeIn";
import SectionLabel from "@/components/shared/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionLabel>
          About
        </SectionLabel>

        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-12">

            <div className="lg:col-span-7">

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-7xl">
                Design that gets attention.
                <br />
                Systems that create results.
              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-lg leading-relaxed text-neutral-300">
                I&apos;m Aayush Patidar, a visual designer focused on
                building brand systems, campaign ecosystems,
                communication frameworks and automation workflows
                that help businesses grow with clarity and consistency.
              </p>

              <p className="mt-8 text-lg leading-relaxed text-neutral-300">
                Over the years I&apos;ve worked across branding,
                retail campaigns, social media design,
                advertising creatives and scalable systems
                that go beyond visuals.
              </p>

              <p className="mt-8 text-lg leading-relaxed text-neutral-300">
                My approach combines design thinking,
                strategic communication and automation
                to build brands that remain impossible
                to ignore.
              </p>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}