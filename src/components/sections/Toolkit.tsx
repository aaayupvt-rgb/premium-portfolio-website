import FadeIn from "@/components/shared/FadeIn";
import Container from "@/components/shared/Container";

const tools = [
  { src: "/tools/photoshop.svg", name: "Photoshop" },
  { src: "/tools/illustrator.svg", name: "Illustrator" },
  { src: "/tools/coreldraw.svg", name: "CorelDRAW" },
  { src: "/tools/figma.svg", name: "Figma" },
  { src: "/tools/n8n.svg", name: "n8n" },
  { src: "/tools/github.svg", name: "GitHub" },
  { src: "/tools/chatgpt.svg", name: "ChatGPT" },
  { src: "/tools/claude.svg", name: "Claude" },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-20 md:py-32">
      <Container>
        <FadeIn>

          <p className="mb-12 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Toolkit
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-3"
              >
                <img
                  src={tool.src}
                  alt={tool.name}
                  className="
                    h-14
                    w-auto
                    opacity-40
                    grayscale
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:grayscale-0
                  "
                />
                <span className="text-xs uppercase tracking-[0.15em] text-neutral-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-neutral-400">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

        </FadeIn>
      </Container>
    </section>
  );
}