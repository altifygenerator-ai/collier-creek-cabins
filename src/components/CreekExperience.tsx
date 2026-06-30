import { creekFeatures, images } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function CreekExperience() {
  return (
    <section className="creek-section section-pad" id="creek">
      <div className="container creek-grid">
        <Reveal className="creek-copy">
          <p className="eyebrow">Collier Creek</p>
          <h2>Dip in a crystal clear creek to swim, snorkel or soak yourself.</h2>
          <p>
            Beautiful hiking and exploring is right off the property. Catch
            small mouth bass in Collier Creek, go snorkeling, and watch the fish
            and plants under the huge slate rocks overhanging the banks into the
            water.
          </p>
          <div className="creek-chip-grid">
            {creekFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="creek-photo-stack creek-photo-stack-v2">
          <img className="creek-large" src={images.creek} alt="Clear Collier Creek" />
          <img className="creek-small" src={images.signs} alt="Collier Creek signs" />
          <div className="creek-note">
            <strong>Clear cool Collier Creek</strong>
            <span>Swimming, snorkeling, soaking, fishing, hiking, and exploring.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
