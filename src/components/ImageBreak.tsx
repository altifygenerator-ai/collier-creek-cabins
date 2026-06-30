import type { CSSProperties } from "react";
import { photoBreaks } from "@/data/site";
import Reveal from "@/components/Reveal";

const scriptLines = [
  "Clear water, shade trees, and room to slow down.",
  "Cabins close to the creek and tucked into the trees.",
  "A rustic place to gather, celebrate, and stay awhile.",
];

export default function ImageBreak({ index = 0 }: { index?: number }) {
  const item = photoBreaks[index];

  if (!item) return null;

  return (
    <section
      className={`image-break image-break-${index + 1}`}
      style={{ "--break-image": `url(${item.src})` } as CSSProperties}
    >
      <div className="image-break-overlay" />

      <div className="container image-break-content">
        <Reveal className={index % 2 === 0 ? "break-panel" : "break-panel right"}>
          <p className="eyebrow">{item.eyebrow}</p>
          <p className="break-script-line">
            {scriptLines[index] ?? "A quiet Arkansas stay beside Collier Creek."}
          </p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
