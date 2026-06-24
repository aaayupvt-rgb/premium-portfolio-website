import FadeIn from "@/components/shared/FadeIn";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Experience() {
  const experience = [
    {
      company: "Shreeram Communications",
      role: "Lead Visual Designer",
      years: "2022 – Present",
      focus: [
        "Integrated Campaign Design",
        "Retail Marketing",
        "OOH Branding",
        "AI Workflow Systems",
      ],
    },
    {
      company: "Sailor Exports",
      role: "Brand & Packaging Designer",
      years: "2021 – 2022",
      focus: [
        "Export Presentations",
        "Packaging Systems",
        "Exhibition Design",
        "Brand Consistency",
      ],
    },
    {
      company: "Biomech Healthcare",
      role: "Creative Designer",
      years: "2020 – 2021",
      focus: [
        "Healthcare Communication",
        "Product Brochures",
        "Sales Enablement Assets",
      ],
    },
  ];

  return (
    <FadeIn>
      <section id="experience" className="py-24 md:py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <SectionLabel>Experience</SectionLabel>
          </div>

          <div className="space-y-0">
            {experience.map((item, index) => (
              <div
                key={item.company}
                className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#FF4301]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                    {item.company}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500">{item.role}</p>
                  <p className="mt-1 text-sm text-neutral-600">{item.years}</p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-3 text-neutral-300">
                    {item.focus.map((point) => (
                      <p key={point} className="flex items-center gap-3">
                        <span className="h-px w-4 bg-[#FF4301] flex-shrink-0" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}