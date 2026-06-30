import { photoBreaks } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ImageBreaks() {
  return (
    <>
      {photoBreaks.map((item, index) => (
        <section className="image-break" key={item.src}>
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
      ))}
    </>
  );
}
