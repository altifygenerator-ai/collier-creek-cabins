import { amenities, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Amenities() {
  return (
    <section className="amenities-section amenities-provided-section section-pad">
      <div className="amenities-soft-mark">Provided</div>

      <div className="container amenities-layout amenities-layout-v2">
        <Reveal className="section-heading amenities-copy amenities-copy-v2">
          <p className="eyebrow">Cabin comforts</p>
          <h2>Everything needed for an easy cabin weekend.</h2>
          <p>
            The cabins are set up for real stays, with the practical comforts
            guests need inside and the simple outdoor details that make it easy
            to enjoy the creek, porches, grills, and quiet space around the property.
          </p>

          <div className="good-to-know good-to-know-v2">
            <strong>Good to know</strong>
            <span>{siteInfo.minimumStay}</span>
            <span>
              Friendly dogs are welcome. Guests are responsible for any damages.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="amenities-checklist-card">
          <div className="amenities-checklist-head">
            <span>What we provide</span>
            <strong>Comfortable basics, outdoor space, and useful extras.</strong>
          </div>

          <div className="amenities-checklist">
            {amenities.map((item) => (
              <div className="amenity-check-row" key={item}>
                <span aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
