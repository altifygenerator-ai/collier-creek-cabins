import { images, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section className="hero hero-full">
      <div className="hero-bg">
        <img src={images.hero} alt="Collier Creek Cabins by the creek" />
      </div>

      <div className="hero-overlay" />

      <div className="container hero-inner">
        <div className="hero-empty" />

        <Reveal className="hero-panel">
          <p className="hero-kicker">Creekside cabins & wedding barn</p>

          <h1>Stay, gather, and celebrate beside clear Collier Creek.</h1>

          <p className="hero-text">
            Collier, Liberty and Caddo cabins sit on private acreage near Norman
            and Caddo Gap, with clear cool creek water, wilderness to enjoy, and
            a wedding barn for full weekend gatherings.
          </p>

          <div className="hero-actions">
            <a href="#cabins" className="btn btn-primary">
              Explore the Cabins
            </a>
            <a href="#weddings" className="btn btn-secondary">
              Wedding Barn
            </a>
            <a href={`tel:${tel}`} className="btn btn-ghost">
              Call {siteInfo.phone}
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <span>Facebook</span>
              <strong>100% recommend</strong>
            </div>
            <div>
              <span>Reviews</span>
              <strong>11 reviews</strong>
            </div>
            <div>
              <span>Following</span>
              <strong>1.5K followers</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
