import FadeIn from "@/components/shared/FadeIn";
import SectionLabel from "@/components/shared/SectionLabel";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "3", label: "Industries" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">

        <SectionLabel>About</SectionLabel>

        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-12">

            <div className="lg:col-span-7">
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-7xl">
                Design that gets attention.
                <br />
                Systems that create results.
              </h2>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-16">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-semibold tracking-[-0.05em] text-[#FF4301]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-neutral-300">
                <span className="text-[#FF4301]">I&apos;m Aayush Patidar, a visual designer</span> focused on
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

              <a
                href="https://www.linkedin.com/in/patidaraaayush"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-12
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  transition-all
                  duration-300
                  hover:text-[#FF4301]
                "
              >
                View LinkedIn
                <span className="h-px w-8 bg-current" />
              </a>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}