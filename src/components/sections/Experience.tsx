import FadeIn from "@/components/shared/FadeIn";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Experience() {
  const experience = [
    {
      company: "Shreeram Communications",
      focus: [
        "Integrated Campaign Design",
        "Retail Marketing",
        "OOH Branding",
        "AI Workflow Systems",
      ],
    },
    {
      company: "Sailor Exports",
      focus: [
        "Export Presentations",
        "Packaging Systems",
        "Exhibition Design",
        "Brand Consistency",
      ],
    },
    {
      company: "Biomech Healthcare",
      focus: [
        "Healthcare Communication",
        "Product Brochures",
        "Sales Enablement Assets",
      ],
    },
  ];

  return (
    <FadeIn>
    <section
      id="experience"
      className="py-24 md:py-48"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <SectionLabel>
  Experience
</SectionLabel>
        </div>

        <div className="space-y-16">
          {experience.map((item) => (
            <div
              key={item.company}
              className="grid gap-8 pb-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                  {item.company}
                </h3>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-3 text-neutral-300">
                  {item.focus.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}