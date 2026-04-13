import { Section } from "./Section";
import { aboutParagraphs } from "@/data/site";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-5">
        {aboutParagraphs.map((p, idx) => (
          <p key={idx} className="section-body max-w-3xl">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
