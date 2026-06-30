import { images, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function WeddingWeekend() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section className="wedding-section section-pad" id="weddings">
      <div className="container wedding-card wedding-card-v2">
        <Reveal className="wedding-copy">
          <p className="eyebrow">Wedding barn & special events</p>
          <h2>A rustic creekside place for wedding weekends and gatherings.</h2>
          <p>
            Collier Creek gives wedding guests a simple setup in one place: the
            event barn, all three cabins, five private acres, and clear creek
            scenery around the property. It feels relaxed, natural, and easy to
            make your own.
          </p>

          <div className="wedding-flow">
            <span>Event barn</span>
            <span>Three cabins</span>
            <span>Creekside photos</span>
            <span>Outdoor space</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${tel}`}>
              Ask About Weddings
            </a>
            <a className="btn btn-ghost light" href="#contact">
              Contact Info
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="wedding-image-panel">
          <img src={images.weddingBarn} alt="Collier Creek wedding barn" />
          <div>
            <span>{siteInfo.weddingNote}</span>
            <strong>Wedding Barn & clear Collier Creek</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
