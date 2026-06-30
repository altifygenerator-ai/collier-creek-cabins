import { images, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

const weddingHighlights = [
  {
    label: "Ceremony feel",
    text: "Rustic barn setting with creekside scenery and quiet Arkansas woods.",
  },
  {
    label: "Stay together",
    text: "All three cabins book with weddings so your group can stay close.",
  },
  {
    label: "Photo moments",
    text: "Barn doors, trees, porches, creek water, and warm outdoor spaces.",
  },
];

export default function WeddingWeekend() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section className="wedding-section wedding-celebration-section section-pad" id="weddings">
      <div className="wedding-soft-mark">Wedding Weekends</div>

      <div className="container wedding-celebration-grid">
        <Reveal className="wedding-copy wedding-copy-polished">
          <p className="eyebrow">Wedding barn & special events</p>
          <h2>A warm creekside place to celebrate, gather, and stay close.</h2>
          <p>
            Collier Creek gives wedding weekends a relaxed setting with the event
            barn, all three cabins, private acreage, and clear creek scenery in
            one place. It is rustic and natural, but still comfortable enough for
            guests to settle in and enjoy the whole weekend.
          </p>

          <div className="wedding-highlight-grid">
            {weddingHighlights.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.text}</strong>
              </div>
            ))}
          </div>

          <div className="wedding-flow wedding-flow-polished">
            <span>Event barn</span>
            <span>Three cabins</span>
            <span>Creekside photos</span>
            <span>Outdoor space</span>
          </div>

          <div className="hero-actions wedding-actions">
            <a className="btn btn-primary" href={`tel:${tel}`}>
              Ask About Weddings
            </a>
            <a className="btn btn-ghost-dark" href="#contact">
              Contact Info
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="wedding-photo-story">
          <div className="wedding-main-photo">
            <img src={images.weddingBarn} alt="Collier Creek wedding barn" />
            <div>
              <span>{siteInfo.weddingNote}</span>
              <strong>Wedding Barn & Collier Creek</strong>
            </div>
          </div>

          <div className="wedding-mini-card">
            <span>Celebrate here</span>
            <strong>Barn, cabins, creek, trees, and room for the weekend.</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
