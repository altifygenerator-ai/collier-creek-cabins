import { amenities, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Amenities() {
  return (
    <section className="amenities-section section-pad">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">Cabin details</p>
            <h2>Covered decks, full kitchens, picnic tables, grills, and creek views.</h2>
          </div>
          <p>
            The cabins have full individual bathrooms with showers, beautiful
            covered decks looking at large and beautiful Collier Creek, personal
            picnic tables, grills, and a fully plumbed outhouse to share.
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
          <span>
            Friendly dogs are welcome. Guests are responsible for any damages.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
