import { images, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function WeddingWeekend() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section className="wedding-section section-pad" id="weddings">
      <div className="container wedding-card wedding-card-v2">
        <Reveal className="wedding-copy">
          <p className="eyebrow">Wedding barn & special events</p>
          <h2>Host a wedding or special event on the majestic creek.</h2>
          <p>
            Collier Creek Cabins hosts weddings and special events on beautiful
            majestic creek and rolling hills scenery with trees. The property
            includes the wedding event barn, clear Collier Creek, private
            acreage, and all three cabins booked inclusive with weddings.
          </p>

          <div className="wedding-flow">
            <span>Book the cabins</span>
            <span>Use the barn</span>
            <span>Enjoy the creek</span>
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
