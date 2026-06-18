import FadeIn from "@/components/shared/FadeIn";
import Container from "@/components/shared/Container";

const tools = [
  "/tools/photoshop.svg",
  "/tools/illustrator.svg",
  "/tools/coreldraw.svg",
  "/tools/figma.svg",
  "/tools/n8n.svg",
  "/tools/github.svg",
  "/tools/chatgpt.svg",
  "/tools/claude.svg",
];

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      className="border-t border-black/10 py-20 md:py-32"
    >
      <Container>
        <FadeIn>

          <p className="mb-12 text-xs uppercase tracking-[0.35em] text-neutral-400">
            Toolkit
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">

            {tools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt=""
                className="
h-14
w-auto
opacity-40
grayscale
transition-all
duration-300
hover:opacity-100
hover:grayscale-0
"
              />
            ))}

          </div>

        </FadeIn>
      </Container>
    </section>
  );
}