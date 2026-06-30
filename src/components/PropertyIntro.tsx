import { images } from "@/data/site";
import Reveal from "@/components/Reveal";

const cards = [
  {
    kicker: "Creek days",
    title: "Come for the creek",
    text:
      "Spend the day walking down to the water, sitting under the trees, reading on the porch, grilling outside, or letting the kids explore. The creek is the part guests keep talking about.",
    detail: "Clear water, shade trees, porch sitting, and room to slow down.",
  },
  {
    kicker: "Cabin comfort",
    title: "Stay close together",
    text:
      "Collier, Liberty, and Caddo give families and groups their own cabin spaces while keeping everyone close to the creek, porches, grills, and shared outdoor areas.",
    detail: "Great for families, groups, birthdays, girls trips, and quiet getaways.",
  },
  {
    kicker: "Gather here",
    title: "Room for the whole weekend",
    text:
      "With the wedding barn, cabins, creek, and private acreage all in one place, the property works naturally for weddings, family trips, peaceful weekends, and time away from town.",
    detail: "A rustic setting with cabins, outdoor space, and creekside scenery.",
  },
];

export default function PropertyIntro() {
  return (
    <section className="intro-section section-pad">
      <div className="intro-soft-mark">Collier Creek</div>

      <div className="container intro-grid intro-grid-polished">
        <Reveal className="section-heading intro-heading-card">
          <p className="eyebrow">About the property</p>
          <h2>Private cabins, clear creek water, and quiet outdoor space.</h2>
          <p>
            Collier Creek Cabins is made for the kind of stay that feels simple,
            peaceful, and easy to remember. Clean cabin spaces, shaded porches,
            clear water, room to relax, and a quiet setting near Norman and Caddo
            Gap all come together on one private creekside property.
          </p>

          <div className="intro-note-row">
            <span>Clear creek access</span>
            <span>Covered porches</span>
            <span>Private acreage</span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="intro-photo-card intro-photo-card-polished">
          <img src={images.cabinDoor} alt="Rustic cabin door at Collier Creek" />
          <div className="intro-photo-caption">
            <span>Guest favorite</span>
            <strong>Peaceful, private, and close to the water.</strong>
          </div>
        </Reveal>
      </div>

      <div className="container intro-card-grid intro-card-grid-polished">
        {cards.map((card, index) => (
          <Reveal delay={index * 0.08} key={card.title}>
            <article className="feature-card feature-card-polished">
              <div className="feature-card-topline">
                <span>0{index + 1}</span>
                <small>{card.kicker}</small>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <strong>{card.detail}</strong>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
