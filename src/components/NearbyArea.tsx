import { nearbyNotes } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function NearbyArea() {
  return (
    <section className="nearby-section section-pad">
      <div className="container nearby-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">Caddo Gap area</p>
          <h2>Natural mineral springs, diamond and crystal area for digging.</h2>
          <p>
            Caddo Gap is known for its unique energy, the proximity of natural
            mineral springs, and diamond and crystal areas for digging. This
            makes the whole area special.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="nearby-list">
          {nearbyNotes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
