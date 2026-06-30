import { images, nearbyNotes } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function NearbyArea() {
  return (
    <section className="nearby-section nearby-area-polished section-pad">
      <div className="nearby-soft-mark">Around the Area</div>

      <div className="container nearby-grid nearby-grid-polished">
        <Reveal className="nearby-photo nearby-photo-polished">
          <div className="nearby-photo-frame">
            <img src={images.signs} alt="Area direction signs near Collier Creek" />
          </div>

          <div className="nearby-photo-note">
            <span>Nearby</span>
            <strong>Norman, Caddo Gap, Caddo River scenery, and quiet Arkansas roads.</strong>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="section-heading nearby-copy nearby-copy-polished">
          <p className="eyebrow">Norman & Caddo Gap</p>
          <p className="nearby-script-line">A quiet basecamp for creek country.</p>

          <h2>Mineral springs, crystals, river days, and wooded Arkansas scenery.</h2>

          <p>
            Collier Creek is tucked near Norman and Caddo Gap, close to natural
            mineral springs, crystal and diamond digging areas, Caddo River Beach,
            wooded hills, and the kind of slower roads that make the drive feel
            like part of the stay.
          </p>

          <div className="nearby-trail-list">
            {nearbyNotes.map((item) => (
              <div key={item}>
                <span aria-hidden="true" />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
