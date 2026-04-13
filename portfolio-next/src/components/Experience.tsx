import { Section } from "./Section";
import { Timeline, TimelineItem } from "./Timeline";
import { experienceRoles } from "@/data/site";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <Timeline>
        {experienceRoles.map((role, index) => (
          <TimelineItem key={role.id} index={index}>
            <h3 className="break-words bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text font-sans text-xl font-semibold tracking-tight text-pretty text-transparent">
              {role.company}
            </h3>
            <div className="section-meta mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {role.range}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[var(--accent-2)]" />
                {role.location}
              </span>
            </div>
            <p className="text-pretty mt-3 bg-gradient-to-r from-[var(--accent)] via-[#8b5cf6] to-[var(--accent-2)] bg-clip-text font-mono text-[0.8125rem] font-medium leading-relaxed tracking-[0.02em] text-transparent sm:text-sm">
              {role.title}
            </p>
            <ul className="section-body mt-4 list-disc space-y-2 pl-5">
              {role.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
