import FadeIn from "@/components/shared/FadeIn";
import SectionLabel from "@/components/shared/SectionLabel";

const steps = [
  "Research",
  "Strategy",
  "Identity",
  "Execution",
  "Automation",
  "Optimization",
];

export default function Approach() {
  return (
    <section className="border-t border-black/10 py-24 md:py-48">
      <div className="mx-auto max-w-7xl px-6">

        <SectionLabel>
          Approach
        </SectionLabel>

        <FadeIn>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-[88px]">
            Good design attracts attention.
            <br />
            Systems sustain growth.
          </h2>
        </FadeIn>

        <div className="mt-24">
          {steps.map((step) => (
            <div
              key={step}
              className="
                border-b
                border-black/10
                py-8
                transition-all
                duration-300
                hover:pl-4
              "
            >
              <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                {step}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}