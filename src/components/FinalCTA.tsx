import { cabins, siteInfo } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  const tel = siteInfo.phone.replace(/[^0-9]/g, "");

  return (
    <section className="final-cta section-pad" id="contact">
      <div className="container">
        <Reveal className="final-card">
          <p className="eyebrow">Contact Us</p>
          <h2>Make a reservation at Collier Creek Cabins.</h2>
          <p>
            Call with questions, use the Airbnb links to book Collier, Liberty,
            or Caddo, or ask about weddings and special events at the wedding
            barn.
          </p>

          <div className="contact-grid">
            <a href={`tel:${tel}`}>
              <span>Phone</span>
              <strong>{siteInfo.phone}</strong>
            </a>
            <a href={`tel:${siteInfo.secondaryPhone.replace(/[^0-9]/g, "")}`}>
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

          <div className="booking-links">
            {cabins.map((cabin) => (
              <a key={cabin.name} href={cabin.bookUrl} target="_blank">
                Book {cabin.name.replace(" Cabin", "")}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
