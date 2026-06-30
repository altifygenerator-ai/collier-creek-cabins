import { amenities, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Amenities() {
  return (
    <section className="amenities-section section-pad">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">Cabin comforts</p>
            <h2>Simple comforts for an easy cabin weekend.</h2>
          </div>
          <p>
            The cabins are set up for real stays, with kitchen space, bathrooms,
            covered decks, picnic tables, grills, and little extras that make it
            easier to enjoy the creek instead of overpacking for the trip.
          </p>
        </Reveal>

        <Reveal className="amenities-grid">
          {amenities.map((item) => (
            <div className="amenity-pill" key={item}>
              {item}
            </div>
          ))}
        </Reveal>

        <Reveal className="policy-strip">
          <span>{siteInfo.minimumStay}</span>
          <span>Friendly dogs are welcome. Guests are responsible for any damages.</span>
        </Reveal>
      </div>
    </section>
  );
}
