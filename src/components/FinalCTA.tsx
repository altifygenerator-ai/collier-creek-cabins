import { cabins, images, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");
  const secondTel = siteInfo.secondaryPhone.replace(/[^0-9]/g, "");

  return (
    <section className="final-cta final-booking-section section-pad" id="contact">
      <div className="final-soft-mark">Book Your Stay</div>

      <div className="container final-booking-grid">
        <Reveal className="final-booking-copy">
          <p className="eyebrow">Book your stay</p>
          <p className="final-script-line">Ready for a creekside weekend?</p>

          <h2>Choose your cabin and start planning your stay at Collier Creek.</h2>

          <p>
            Book Collier, Liberty, or Caddo directly through the cabin links
            below. For weddings, special events, or questions before booking,
            call or email and they can help you get pointed in the right direction.
          </p>

          <div className="final-booking-links">
            {cabins.map((cabin) => (
              <a key={cabin.name} href={cabin.bookUrl} target="_blank" rel="noreferrer">
                <span>{cabin.sleeps}</span>
                <strong>Book {cabin.name.replace(" Cabin", "")}</strong>
                <small>{cabin.label}</small>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="final-photo final-photo-polished">
          <img src={images.mcguire} alt="McGuire sign and outdoor grill at Collier Creek" />

          <div className="final-photo-card">
            <span>Questions before booking?</span>
            <strong>Call, email, or ask about weddings and special events.</strong>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Reveal delay={0.16} className="final-contact-panel">
          <div className="final-contact-intro">
            <span>Contact Collier Creek</span>
            <strong>Booking links first, contact info close by.</strong>
          </div>

          <div className="final-contact-grid">
            <a href={`tel:${tel}`}>
              <span>Phone</span>
              <strong>{siteInfo.phone}</strong>
            </a>

            <a href={`tel:${secondTel}`}>
              <span>Second phone</span>
              <strong>{siteInfo.secondaryPhone}</strong>
            </a>

            <a href={`mailto:${siteInfo.email}`}>
              <span>Email</span>
              <strong>{siteInfo.email}</strong>
            </a>

            <div>
              <span>Address</span>
              <strong>{siteInfo.address}</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
