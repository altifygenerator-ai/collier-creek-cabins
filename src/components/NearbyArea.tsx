import { nearbyNotes } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function NearbyArea() {
  return (
    <section className="nearby-section section-pad">
      <div className="container nearby-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">Norman & Caddo Gap</p>
          <h2>Creek country, mineral springs, crystals, and quiet Arkansas scenery.</h2>
          <p>
            Collier Creek is near Norman and Caddo Gap, with natural mineral
            springs, diamond and crystal digging areas, Caddo River Beach, and
            wooded scenery nearby.
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
