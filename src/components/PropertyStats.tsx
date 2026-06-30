import { propertyStats, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function PropertyStats() {
  return (
    <section className="property-ribbon-section">
      <div className="container">
        <Reveal className="property-ribbon">
          <div className="ribbon-lead">
            <span>Property highlights</span>
            <strong>{siteInfo.highlightLine}</strong>
          </div>

          <div className="ribbon-items">
            {propertyStats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
