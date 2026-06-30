import { creekFeatures, images } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function CreekExperience() {
  return (
    <section className="creek-section section-pad" id="creek">
      <div className="container creek-grid">
        <Reveal className="creek-copy">
          <p className="eyebrow">Collier Creek</p>
          <h2>Clear water, shade trees, and room to slow down.</h2>
          <p>
            Walk down to Collier Creek for swimming, snorkeling, soaking,
            fishing, and exploring. Guests can enjoy the water, the slate rock
            banks, the wooded setting, and the quiet outdoor space right off the
            property.
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
            <span>Swim, soak, fish, explore, or just sit by the water.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
