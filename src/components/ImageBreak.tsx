import { photoBreaks } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ImageBreak({ index = 0 }: { index?: number }) {
  const item = photoBreaks[index];

  if (!item) return null;

  return (
    <section className={`image-break image-break-${index + 1}`}>
      <img src={item.src} alt={item.title} />
      <div className="image-break-overlay" />
      <div className="container image-break-content">
        <Reveal className={index % 2 === 0 ? "break-panel" : "break-panel right"}>
          <p className="eyebrow">{item.eyebrow}</p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
